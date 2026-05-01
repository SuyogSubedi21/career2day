
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Send } from 'lucide-react';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    try {
      await pb.collection('contacts').create(formData, { $autoCancel: false });
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact submission error:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <Helmet>
        <title>{`Contact Us | CareerFlow`}</title>
        <meta name="description" content="Get in touch with the CareerFlow team for support, partnerships, or general inquiries." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have a question about our platform, need support with your account, or interested in partnering? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-card border border-border shadow-lg rounded-2xl p-6 md:p-10">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Jane Doe" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="jane@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background text-foreground"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="How can we help you?" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background text-foreground"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Please provide details about your inquiry..." 
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-background text-foreground resize-none"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-secondary text-secondary-foreground rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-background/50 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:support@careerflow.example.com" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                      support@careerflow.example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-background/50 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-secondary-foreground/80">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-background/50 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-secondary-foreground/80">
                      100 Innovation Drive<br />
                      Suite 400<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-secondary-foreground/10">
                <p className="font-medium mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-background/50 rounded-full flex items-center justify-center hover:bg-background transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-background/50 rounded-full flex items-center justify-center hover:bg-background transition-colors" aria-label="Twitter">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-background/50 rounded-full flex items-center justify-center hover:bg-background transition-colors" aria-label="GitHub">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-8 border border-border/50">
              <h3 className="font-bold mb-2">Response Time</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our support team operates Monday through Friday, 9 AM to 5 PM PST. We aim to respond to all inquiries within 24-48 business hours.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
