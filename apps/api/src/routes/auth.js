import express from 'express';
import pb from '../utils/pocketbaseClient.js';
import logger from '../utils/logger.js';

const router = express.Router();

// POST /auth/signup
router.post('/signup', async (req, res) => {
  const { email, password, passwordConfirm, name } = req.body;

  if (!email || !password || !passwordConfirm) {
    return res.status(400).json({ error: 'email, password, and passwordConfirm are required' });
  }

  if (password !== passwordConfirm) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  try {
    // Create user in PocketBase
    const user = await pb.collection('users').create({
      email,
      password,
      passwordConfirm,
      name: name || email.split('@')[0],
      verified: false,
    });

    logger.info(`User registered: ${email}`);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    logger.error(`Signup error for ${email}:`, error.message);
    throw error;
  }
});

// POST /auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'email and password are required' });
  }

  try {
    // Authenticate user with PocketBase
    const authData = await pb.collection('users').authWithPassword(email, password);

    logger.info(`User logged in: ${email}`);

    res.json({
      success: true,
      message: 'Login successful',
      token: authData.token,
      user: {
        id: authData.record.id,
        email: authData.record.email,
        name: authData.record.name,
      },
    });
  } catch (error) {
    logger.error(`Login error for ${email}:`, error.message);
    throw error;
  }
});

// POST /auth/password-reset
router.post('/password-reset', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'email is required' });
  }

  try {
    // Request password reset in PocketBase
    await pb.collection('users').requestPasswordReset(email);

    logger.info(`Password reset requested for: ${email}`);

    res.json({
      success: true,
      message: 'Password reset email sent. Check your inbox.',
    });
  } catch (error) {
    logger.error(`Password reset error for ${email}:`, error.message);
    throw error;
  }
});

// POST /auth/confirm-password-reset
router.post('/confirm-password-reset', async (req, res) => {
  const { token, password, passwordConfirm } = req.body;

  if (!token || !password || !passwordConfirm) {
    return res.status(400).json({ error: 'token, password, and passwordConfirm are required' });
  }

  if (password !== passwordConfirm) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  try {
    // Confirm password reset in PocketBase
    await pb.collection('users').confirmPasswordReset(token, password, passwordConfirm);

    logger.info('Password reset confirmed successfully');

    res.json({
      success: true,
      message: 'Password reset successfully',
    });
  } catch (error) {
    logger.error('Password reset confirmation error:', error.message);
    throw error;
  }
});

// POST /auth/logout
router.post('/logout', async (req, res) => {
  try {
    pb.authStore.clear();
    logger.info('User logged out');
    res.json({
      success: true,
      message: 'Logged out successfully',
    });
  } catch (error) {
    logger.error('Logout error:', error.message);
    throw error;
  }
});

export default router;
