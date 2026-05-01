import express from 'express';
import Stripe from 'stripe';
import pb from '../utils/pocketbaseClient.js';
import logger from '../utils/logger.js';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Map plan types to Stripe price IDs
const planPriceMap = {
  premium_monthly: process.env.STRIPE_PRICE_ID_MONTHLY,
  premium_annual: process.env.STRIPE_PRICE_ID_ANNUAL,
};

// POST /stripe/create-checkout
router.post('/create-checkout', async (req, res) => {
  const { planType, email, amount, productName, cvId, paymentType, successUrl, cancelUrl } = req.body;

  // Handle one-time payment
  if (paymentType === 'one-time') {
    if (!amount || !productName || !cvId || !successUrl || !cancelUrl) {
      return res.status(400).json({ error: 'amount, productName, cvId, successUrl, and cancelUrl are required for one-time payments' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: Math.round(amount * 100), // Convert to cents
            product_data: {
              name: productName,
            },
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        cvId,
        paymentType: 'one-time',
      },
    });

    res.json({ url: session.url });
    return;
  }

  // Handle subscription payment (existing logic)
  if (!planType || !email) {
    return res.status(400).json({ error: 'planType and email are required' });
  }

  const priceId = planPriceMap[planType];
  if (!priceId) {
    return res.status(400).json({ error: 'Invalid planType' });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    customer_email: email,
    success_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/account/subscription?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/checkout`,
  });

  res.json({ url: session.url });
});

// POST /stripe/one-time-download-complete
router.post('/one-time-download-complete', async (req, res) => {
  const { sessionId, userEmail, cvId, cvName } = req.body;

  if (!sessionId || !cvId || !cvName) {
    return res.status(400).json({ error: 'sessionId, cvId, and cvName are required' });
  }

  // Verify payment session
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (!session || session.payment_status !== 'paid') {
    throw new Error('Payment verification failed');
  }

  // Record one-time download transaction
  await pb.collection('one_time_downloads').create({
    user_email: userEmail || null,
    cv_id: cvId,
    cv_name: cvName,
    amount: 3.00,
    stripe_payment_id: sessionId,
    status: 'completed',
  });

  logger.info(`Recorded one-time download for CV: ${cvName} (${cvId})`);

  res.json({ success: true, message: 'Download recorded' });
});

// POST /stripe/webhook
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    throw new Error('Webhook signature or secret missing');
  }

  const event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);

  logger.info(`Webhook event received: ${event.type}`);

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userEmail = session.customer_email;

    if (!userEmail) {
      throw new Error('No customer email in checkout session');
    }

    // Create or update subscription in PocketBase
    const existingSubscription = await pb
      .collection('subscriptions')
      .getFirstListItem(`user_email = "${userEmail}"`, { requestKey: null })
      .catch(() => null);

    const subscriptionData = {
      user_email: userEmail,
      plan_type: session.metadata?.planType || 'premium_monthly',
      stripe_customer_id: session.customer,
      stripe_session_id: session.id,
      status: 'active',
      renewal_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    };

    if (existingSubscription) {
      await pb.collection('subscriptions').update(existingSubscription.id, subscriptionData);
      logger.info(`Updated subscription for ${userEmail}`);
    } else {
      await pb.collection('subscriptions').create(subscriptionData);
      logger.info(`Created subscription for ${userEmail}`);
    }
  }

  if (event.type === 'customer.subscription.updated') {
    const subscription = event.data.object;
    const userEmail = subscription.metadata?.userEmail;

    if (userEmail) {
      const existingSubscription = await pb
        .collection('subscriptions')
        .getFirstListItem(`user_email = "${userEmail}"`, { requestKey: null })
        .catch(() => null);

      if (existingSubscription) {
        await pb.collection('subscriptions').update(existingSubscription.id, {
          status: subscription.status === 'active' ? 'active' : 'inactive',
        });
        logger.info(`Updated subscription status for ${userEmail}`);
      }
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object;
    const userEmail = subscription.metadata?.userEmail;

    if (userEmail) {
      const existingSubscription = await pb
        .collection('subscriptions')
        .getFirstListItem(`user_email = "${userEmail}"`, { requestKey: null })
        .catch(() => null);

      if (existingSubscription) {
        await pb.collection('subscriptions').update(existingSubscription.id, {
          status: 'cancelled',
        });
        logger.info(`Cancelled subscription for ${userEmail}`);
      }
    }
  }

  res.json({ received: true });
});

// GET /stripe/subscription/:userId
router.get('/subscription/:userId', async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ error: 'userId is required' });
  }

  // Query PocketBase for subscription by user_email (userId is the email)
  const subscription = await pb
    .collection('subscriptions')
    .getFirstListItem(`user_email = "${userId}"`, { requestKey: null })
    .catch(() => null);

  if (!subscription) {
    return res.status(404).json({ error: 'Subscription not found' });
  }

  res.json({
    plan_type: subscription.plan_type,
    status: subscription.status,
    renewal_date: subscription.renewal_date,
    amount_paid: subscription.amount_paid || 0,
    stripe_subscription_id: subscription.stripe_subscription_id,
  });
});

export default router;