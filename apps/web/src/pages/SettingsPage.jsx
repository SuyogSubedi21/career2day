
import React, { useState, useEffect } from 'react';
import { User, Shield, Palette, CreditCard, Download, UploadCloud, Loader2, Sun, Moon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { useTheme } from '@/contexts/ThemeContext.jsx';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient.js';

export default function SettingsPage() {
  const { currentUser } = useAuth();
  const { theme, toggleTheme } = useTheme();
  
  // Profile State
  const [name, setName] = useState(currentUser?.name || '');
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(
    currentUser?.avatar ? pb.files.getUrl(currentUser, currentUser.avatar) : null
  );
  const [isSavingProfile, setIsSavingProfile] = useState(false);

  // Account State
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [isSavingPassword, setIsSavingPassword] = useState(false);
  const [isSavingEmail, setIsSavingEmail] = useState(false);

  // Subscription State
  const [subscription, setSubscription] = useState(null);
  const [isLoadingSub, setIsLoadingSub] = useState(true);

  // Downloads State
  const [downloads, setDownloads] = useState([]);
  const [isLoadingDownloads, setIsLoadingDownloads] = useState(true);

  useEffect(() => {
    if (!currentUser) return;

    const fetchSubscription = async () => {
      try {
        const records = await pb.collection('subscriptions_stripe').getList(1, 1, {
          filter: `user_email = "${currentUser.email}"`,
          sort: '-created',
          $autoCancel: false
        });
        if (records.items.length > 0) {
          setSubscription(records.items[0]);
        }
      } catch (error) {
        console.error('Error fetching subscription:', error);
      } finally {
        setIsLoadingSub(false);
      }
    };

    const fetchDownloads = async () => {
      try {
        const records = await pb.collection('downloads').getList(1, 50, {
          filter: `user_id = "${currentUser.id}"`,
          sort: '-downloaded_date',
          $autoCancel: false
        });
        
        // Fetch CV details for these downloads
        const cvIds = [...new Set(records.items.map(d => d.cv_id))];
        let cvMap = {};
        
        if (cvIds.length > 0) {
          const cvFilter = cvIds.map(id => `id="${id}"`).join(' || ');
          const cvs = await pb.collection('userCVs').getFullList({
            filter: cvFilter,
            $autoCancel: false
          });
          cvs.forEach(cv => {
            cvMap[cv.id] = cv;
          });
        }

        const enrichedDownloads = records.items.map(d => ({
          ...d,
          cvName: cvMap[d.cv_id]?.name || 'Unknown CV',
          templateName: cvMap[d.cv_id]?.template || 'Unknown Template'
        }));

        setDownloads(enrichedDownloads);
      } catch (error) {
        console.error('Error fetching downloads:', error);
      } finally {
        setIsLoadingDownloads(false);
      }
    };

    fetchSubscription();
    fetchDownloads();
  }, [currentUser]);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image must be less than 5MB');
        return;
      }
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsSavingProfile(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      if (avatarFile) {
        formData.append('avatar', avatarFile);
      }

      await pb.collection('users').update(currentUser.id, formData, { $autoCancel: false });
      toast.success('Profile updated successfully');
    } catch (error) {
      console.error(error);
      toast.error('Failed to update profile');
    } finally {
      setIsSavingProfile(false);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }
    setIsSavingPassword(true);
    try {
      await pb.collection('users').update(currentUser.id, {
        oldPassword,
        password: newPassword,
        passwordConfirm: confirmPassword
      }, { $autoCancel: false });
      toast.success('Password updated successfully');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error(error);
      toast.error(error?.data?.message || 'Failed to update password. Check your current password.');
    } finally {
      setIsSavingPassword(false);
    }
  };

  const handleUpdateEmail = async (e) => {
    e.preventDefault();
    if (!newEmail) return;
    setIsSavingEmail(true);
    try {
      await pb.collection('users').requestEmailChange(newEmail, { $autoCancel: false });
      toast.success('Verification email sent to new address');
      setNewEmail('');
    } catch (error) {
      console.error(error);
      toast.error('Failed to request email change');
    } finally {
      setIsSavingEmail(false);
    }
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your account preferences, subscription, and history.</p>
      </div>

      <Tabs defaultValue="profile" className="flex flex-col md:flex-row gap-8">
        <TabsList className="flex md:flex-col h-auto bg-transparent space-y-2 w-full md:w-64 shrink-0 justify-start items-start">
          <TabsTrigger value="profile" className="w-full justify-start data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm py-3 px-4 rounded-lg transition-all"><User className="w-4 h-4 mr-3" /> Profile</TabsTrigger>
          <TabsTrigger value="account" className="w-full justify-start data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm py-3 px-4 rounded-lg transition-all"><Shield className="w-4 h-4 mr-3" /> Account</TabsTrigger>
          <TabsTrigger value="subscription" className="w-full justify-start data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm py-3 px-4 rounded-lg transition-all"><CreditCard className="w-4 h-4 mr-3" /> Subscription</TabsTrigger>
          <TabsTrigger value="downloads" className="w-full justify-start data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm py-3 px-4 rounded-lg transition-all"><Download className="w-4 h-4 mr-3" /> Downloads</TabsTrigger>
          <TabsTrigger value="preferences" className="w-full justify-start data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm py-3 px-4 rounded-lg transition-all"><Palette className="w-4 h-4 mr-3" /> Preferences</TabsTrigger>
        </TabsList>

        <div className="flex-1 min-w-0">
          {/* PROFILE TAB */}
          <TabsContent value="profile" className="mt-0 outline-none">
            <Card className="bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Profile Information</CardTitle>
                <CardDescription>Update your personal details and public profile photo.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpdateProfile} className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <Avatar className="w-24 h-24 border-2 border-border">
                      <AvatarImage src={avatarPreview} alt="Profile" className="object-cover" />
                      <AvatarFallback className="text-2xl bg-primary/10 text-primary">{getInitials(name || currentUser?.email)}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <Label htmlFor="avatar-upload" className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                        <UploadCloud className="w-4 h-4 mr-2" />
                        Upload Photo
                      </Label>
                      <Input id="avatar-upload" type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
                      <p className="text-xs text-muted-foreground">JPG, PNG or WebP. Max size 5MB.</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="max-w-md bg-background text-foreground" placeholder="Your full name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" value={currentUser?.email || ''} disabled className="max-w-md bg-muted text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">To change your email, go to the Account tab.</p>
                  </div>

                  <Button type="submit" disabled={isSavingProfile}>
                    {isSavingProfile && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                    Save Profile
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ACCOUNT TAB */}
          <TabsContent value="account" className="mt-0 outline-none space-y-6">
            <Card className="bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Change Password</CardTitle>
                <CardDescription>Ensure your account is using a long, random password to stay secure.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpdatePassword} className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <Label htmlFor="oldPassword">Current Password</Label>
                    <Input id="oldPassword" type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required className="bg-background text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required minLength={8} className="bg-background text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required minLength={8} className="bg-background text-foreground" />
                  </div>
                  <Button type="submit" disabled={isSavingPassword}>
                    {isSavingPassword && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                    Update Password
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Change Email</CardTitle>
                <CardDescription>Update the email address associated with your account.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpdateEmail} className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <Label htmlFor="newEmail">New Email Address</Label>
                    <Input id="newEmail" type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} required className="bg-background text-foreground" placeholder="new@example.com" />
                  </div>
                  <Button type="submit" variant="secondary" disabled={isSavingEmail}>
                    {isSavingEmail && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                    Request Email Change
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SUBSCRIPTION TAB */}
          <TabsContent value="subscription" className="mt-0 outline-none">
            <Card className="bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Subscription Plan</CardTitle>
                <CardDescription>Manage your billing and plan details.</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoadingSub ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="p-6 border border-border rounded-xl bg-muted/30">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <div>
                          <h3 className="font-bold text-2xl text-foreground capitalize">
                            {subscription ? subscription.plan_type.replace('_', ' ') : 'Free Plan'}
                          </h3>
                          <p className="text-muted-foreground mt-1">
                            {subscription?.status === 'active' ? 'Your subscription is active.' : 'You are currently on the free tier.'}
                          </p>
                        </div>
                        <span className={`px-4 py-1.5 rounded-full text-sm font-bold tracking-wide ${subscription?.status === 'active' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                          {subscription?.status?.toUpperCase() || 'FREE'}
                        </span>
                      </div>

                      {subscription && subscription.status === 'active' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground mb-1">Amount Paid</p>
                            <p className="text-lg font-semibold text-foreground">${subscription.amount_paid}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground mb-1">Renewal Date</p>
                            <p className="text-lg font-semibold text-foreground">
                              {subscription.renewal_date ? new Date(subscription.renewal_date).toLocaleDateString() : 'N/A'}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {!subscription || subscription.status !== 'active' ? (
                      <Button className="w-full sm:w-auto" onClick={() => window.location.href = '/pricing'}>
                        Upgrade to Premium
                      </Button>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        To manage your billing details or cancel your subscription, please contact support.
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* DOWNLOADS TAB */}
          <TabsContent value="downloads" className="mt-0 outline-none">
            <Card className="bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Download History</CardTitle>
                <CardDescription>View all your previously downloaded CVs.</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoadingDownloads ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  </div>
                ) : downloads.length === 0 ? (
                  <div className="text-center py-12 border-2 border-dashed border-border rounded-xl">
                    <Download className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                    <h3 className="text-lg font-medium text-foreground">No downloads yet</h3>
                    <p className="text-muted-foreground mt-1">When you download a CV, it will appear here.</p>
                  </div>
                ) : (
                  <div className="rounded-md border border-border overflow-hidden">
                    <Table>
                      <TableHeader className="bg-muted/50">
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>CV Name</TableHead>
                          <TableHead>Template</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {downloads.map((download) => (
                          <TableRow key={download.id}>
                            <TableCell className="font-medium text-foreground">
                              {new Date(download.downloaded_date || download.created).toLocaleDateString()}
                            </TableCell>
                            <TableCell>{download.cvName}</TableCell>
                            <TableCell>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                                {download.templateName}
                              </span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* PREFERENCES TAB */}
          <TabsContent value="preferences" className="mt-0 outline-none">
            <Card className="bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">General Preferences</CardTitle>
                <CardDescription>Customize your experience on Career2Day.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 border border-border rounded-xl bg-background">
                  <div>
                    <p className="font-medium text-foreground">Theme</p>
                    <p className="text-sm text-muted-foreground">Toggle between light and dark mode.</p>
                  </div>
                  <Button onClick={toggleTheme} variant="outline" className="border-border text-foreground min-w-[140px]">
                    {theme === 'dark' ? (
                      <><Sun className="w-4 h-4 mr-2" /> Light Mode</>
                    ) : (
                      <><Moon className="w-4 h-4 mr-2" /> Dark Mode</>
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded-xl bg-background opacity-70">
                  <div>
                    <p className="font-medium text-foreground">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive updates about new templates and features.</p>
                  </div>
                  <Button variant="outline" disabled>Coming Soon</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
