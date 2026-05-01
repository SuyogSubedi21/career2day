
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Save, Loader2, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { toast } from 'sonner';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function EditProfilePage() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: ''
  });
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setFormData({
        name: currentUser.name || '',
        email: currentUser.email || '',
        phone: currentUser.phone || '',
        location: currentUser.location || ''
      });
      if (currentUser.avatar) {
        setAvatarPreview(pb.files.getUrl(currentUser, currentUser.avatar));
      }
    }
  }, [currentUser]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) {
      toast.error('Name is required');
      return;
    }
    
    setLoading(true);
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('phone', formData.phone);
      data.append('location', formData.location);
      if (avatarFile) {
        data.append('avatar', avatarFile);
      }

      await pb.collection('users').update(currentUser.id, data, { $autoCancel: false });
      
      // Update email separately if changed (requires verification in real systems, but PocketBase can do it)
      if (formData.email !== currentUser.email) {
        await pb.collection('users').requestEmailChange(formData.email, { $autoCancel: false });
        toast.info('Verification email sent to new address');
      }

      toast.success('Profile updated successfully');
      navigate('/profile');
    } catch (error) {
      toast.error(error.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4">
      <Helmet>
        <title>Edit Profile | CareerMastery</title>
      </Helmet>

      <div className="max-w-2xl mx-auto">
        <Link to="/profile" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Profile
        </Link>

        <div className="glass-card-premium rounded-[2rem] p-8 md:p-12 shadow-lg border-primary/10">
          <h1 className="text-3xl font-extrabold mb-8 text-foreground">Edit Profile</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Avatar Section */}
            <div className="flex items-center gap-6 pb-6 border-b border-border/50">
              <Avatar className="w-24 h-24 border-4 border-background shadow-md">
                <AvatarImage src={avatarPreview} />
                <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">
                  {formData.name?.charAt(0)?.toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <Label htmlFor="avatar-upload" className="cursor-pointer inline-flex items-center justify-center rounded-xl text-sm font-semibold h-10 px-4 py-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
                  <ImageIcon className="w-4 h-4 mr-2" /> Change Picture
                </Label>
                <Input 
                  id="avatar-upload" 
                  type="file" 
                  accept="image/jpeg, image/png, image/webp" 
                  className="hidden" 
                  onChange={handleFileChange}
                />
                <p className="text-xs text-muted-foreground">JPG, PNG or WEBP. Max 5MB.</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2.5">
                <Label className="font-semibold text-foreground/90">Full Name</Label>
                <Input 
                  value={formData.name} 
                  onChange={e => setFormData(prev => ({...prev, name: e.target.value}))} 
                  className="bg-background/50 h-12 rounded-xl"
                  required
                />
              </div>
              <div className="space-y-2.5">
                <Label className="font-semibold text-foreground/90">Email Address</Label>
                <Input 
                  type="email"
                  value={formData.email} 
                  onChange={e => setFormData(prev => ({...prev, email: e.target.value}))} 
                  className="bg-background/50 h-12 rounded-xl"
                  required
                />
              </div>
              <div className="space-y-2.5">
                <Label className="font-semibold text-foreground/90">Phone Number</Label>
                <Input 
                  type="tel"
                  value={formData.phone} 
                  onChange={e => setFormData(prev => ({...prev, phone: e.target.value}))} 
                  className="bg-background/50 h-12 rounded-xl"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="space-y-2.5">
                <Label className="font-semibold text-foreground/90">Location</Label>
                <Input 
                  value={formData.location} 
                  onChange={e => setFormData(prev => ({...prev, location: e.target.value}))} 
                  className="bg-background/50 h-12 rounded-xl"
                  placeholder="San Francisco, CA"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-6 border-t border-border/50">
              <Button type="button" variant="outline" asChild className="rounded-xl h-12 px-6 flex-1 sm:flex-none">
                <Link to="/profile">Cancel</Link>
              </Button>
              <Button type="submit" disabled={loading} className="rounded-xl h-12 px-8 shadow-lg shadow-primary/20 flex-1 sm:flex-none font-bold">
                {loading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin"/> Saving...</> : <><Save className="w-4 h-4 mr-2"/> Save Changes</>}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
