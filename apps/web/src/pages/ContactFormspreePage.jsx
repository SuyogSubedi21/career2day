import React from 'react';
import SEOHead from '@/components/SEOHead.jsx';

export default function ContactFormspreePage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Contact Us | Career2Day"
        description="Contact Career2Day for support, business, or feedback. Use the form below to reach us directly."
        ogUrl="https://career2day.com/contact"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Career2Day',
          url: 'https://career2day.com/contact'
        }}
      />
      <main className="mx-auto max-w-2xl w-full">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Contact</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Contact Career2Day</h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
            Fill out the form below and our team will get back to you as soon as possible.
          </p>
        </div>
        <form action="https://formspree.io/f/xgodyjpl" method="POST" className="bg-card border border-border rounded-lg shadow-md p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
            <input type="text" id="name" name="name" required className="w-full px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
            <textarea id="message" name="message" rows={6} required className="w-full px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"></textarea>
          </div>
          <button type="submit" className="w-full py-3 px-6 rounded bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors">Send Message</button>
        </form>
      </main>
    </div>
  );
}
