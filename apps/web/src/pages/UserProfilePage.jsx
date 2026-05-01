
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { User, FileText, Bookmark, GraduationCap, Briefcase, Settings, Edit, Target, DollarSign, BrainCircuit, Play, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { format } from 'date-fns';

export default function UserProfilePage() {
  const { currentUser } = useAuth();
  
  const [resumes, setResumes] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [interviews, setInterviews] = useState([]);
  const [subscription, setSubscription] = useState(null);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!currentUser) return;
      try {
        const [resRecords, bmRecords, qzRecords, intRecords, subRecords] = await Promise.all([
          pb.collection('resumes').getFullList({ filter: `userId="${currentUser.id}"`, sort: '-updated', $autoCancel: false }),
          pb.collection('savedCareers').getFullList({ filter: `userId="${currentUser.id}"`, sort: '-created', $autoCancel: false }),
          pb.collection('quizResults').getFullList({ filter: `userId="${currentUser.id}"`, sort: '-completedAt', $autoCancel: false }),
          pb.collection('interviewSessions').getFullList({ filter: `userId="${currentUser.id}"`, sort: '-lastUpdated', $autoCancel: false }),
          pb.collection('subscriptions').getFullList({ filter: `userId="${currentUser.id}"`, sort: '-created', $autoCancel: false })
        ]);

        setResumes(resRecords);
        setBookmarks(bmRecords);
        setQuizzes(qzRecords);
        setInterviews(intRecords);
        setSubscription(subRecords.find(s => s.status === 'Active') || null);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [currentUser]);

  if (loading) {
    return <div className="min-h-screen pt-32 pb-20 flex justify-center items-center">Loading dashboard...</div>;
  }

  const formatCareerName = (slug) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <Helmet>
        <title>Dashboard | CareerMastery</title>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PROFILE HEADER */}
        <div className="glass-panel rounded-3xl p-8 mb-8 flex flex-col md:flex-row items-center md:items-start gap-6 border-primary/10 shadow-lg">
          <Avatar className="w-24 h-24 border-4 border-background shadow-md">
            <AvatarImage src={currentUser?.avatar ? pb.files.getUrl(currentUser, currentUser.avatar) : ''} />
            <AvatarFallback className="bg-primary/10 text-primary text-3xl font-bold">
              {currentUser?.name?.charAt(0) || currentUser?.email?.charAt(0)?.toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-foreground">{currentUser?.name || 'Professional User'}</h1>
            <p className="text-muted-foreground mb-4">{currentUser?.email}</p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <Badge variant={subscription?.planType === 'Premium' ? 'default' : 'secondary'} className="px-3 py-1 text-sm font-semibold">
                {subscription ? `${subscription.planType} Plan` : 'Free Plan'}
              </Badge>
              {currentUser?.location && <Badge variant="outline" className="px-3 py-1 text-sm text-muted-foreground font-medium">{currentUser.location}</Badge>}
            </div>
          </div>
          <Button asChild className="shrink-0 rounded-xl font-bold px-6 shadow-md shadow-primary/20">
            <Link to="/profile/edit"><Edit className="w-4 h-4 mr-2" /> Edit Profile</Link>
          </Button>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="bg-muted/50 p-1 w-full justify-start h-auto flex-wrap rounded-2xl">
            <TabsTrigger value="overview" className="rounded-xl px-6 py-2.5 font-bold data-[state=active]:bg-background data-[state=active]:shadow-sm">Overview</TabsTrigger>
            <TabsTrigger value="resumes" className="rounded-xl px-6 py-2.5 font-bold data-[state=active]:bg-background data-[state=active]:shadow-sm">Resumes</TabsTrigger>
            <TabsTrigger value="bookmarks" className="rounded-xl px-6 py-2.5 font-bold data-[state=active]:bg-background data-[state=active]:shadow-sm">Bookmarks</TabsTrigger>
            <TabsTrigger value="progress" className="rounded-xl px-6 py-2.5 font-bold data-[state=active]:bg-background data-[state=active]:shadow-sm">Progress</TabsTrigger>
            <TabsTrigger value="settings" className="rounded-xl px-6 py-2.5 font-bold data-[state=active]:bg-background data-[state=active]:shadow-sm">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass-card rounded-2xl border-none">
                <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground font-medium flex items-center gap-2"><FileText className="w-4 h-4" /> Saved Resumes</CardTitle></CardHeader>
                <CardContent><div className="text-4xl font-extrabold text-foreground">{resumes.length}</div></CardContent>
              </Card>
              <Card className="glass-card rounded-2xl border-none">
                <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground font-medium flex items-center gap-2"><Bookmark className="w-4 h-4" /> Bookmarked Careers</CardTitle></CardHeader>
                <CardContent><div className="text-4xl font-extrabold text-foreground">{bookmarks.length}</div></CardContent>
              </Card>
              <Card className="glass-card rounded-2xl border-none">
                <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground font-medium flex items-center gap-2"><GraduationCap className="w-4 h-4" /> Quizzes Completed</CardTitle></CardHeader>
                <CardContent><div className="text-4xl font-extrabold text-foreground">{quizzes.length}</div></CardContent>
              </Card>
            </div>
            
            <Card className="glass-card rounded-2xl border-none">
              <CardHeader>
                <CardTitle className="text-xl">Account Information</CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-6">
                <div><div className="text-sm text-muted-foreground mb-1">Full Name</div><div className="font-bold">{currentUser?.name || 'Not set'}</div></div>
                <div><div className="text-sm text-muted-foreground mb-1">Email</div><div className="font-bold">{currentUser?.email}</div></div>
                <div><div className="text-sm text-muted-foreground mb-1">Phone</div><div className="font-bold">{currentUser?.phone || 'Not set'}</div></div>
                <div><div className="text-sm text-muted-foreground mb-1">Location</div><div className="font-bold">{currentUser?.location || 'Not set'}</div></div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resumes">
            <Card className="glass-card rounded-2xl border-none">
              <CardHeader className="flex flex-row items-center justify-between border-b border-border/50 pb-6 mb-6">
                <CardTitle className="text-xl">My Resumes</CardTitle>
                <Button asChild className="rounded-xl shadow-md"><Link to="/cv-builder"><Plus className="w-4 h-4 mr-2" /> New CV</Link></Button>
              </CardHeader>
              <CardContent>
                {resumes.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <FileText className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p>You haven't created any resumes yet.</p>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {resumes.map(cv => (
                      <div key={cv.id} className="p-4 rounded-xl bg-background border hover:border-primary/50 transition-colors flex flex-col">
                        <h4 className="font-bold text-lg mb-1 line-clamp-1">{cv.name || 'Untitled CV'}</h4>
                        <div className="text-sm text-muted-foreground mb-4">Template: <span className="capitalize text-foreground font-medium">{cv.template}</span> • Updated {format(new Date(cv.updated), 'MMM d, yyyy')}</div>
                        <div className="mt-auto flex gap-2">
                          <Button asChild variant="outline" size="sm" className="flex-1 rounded-lg"><Link to="/cv-builder">Edit</Link></Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookmarks">
            <Card className="glass-card rounded-2xl border-none">
              <CardHeader className="border-b border-border/50 pb-6 mb-6">
                <CardTitle className="text-xl">Bookmarked Careers</CardTitle>
              </CardHeader>
              <CardContent>
                {bookmarks.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <Bookmark className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p>No careers bookmarked yet.</p>
                    <Button asChild variant="link" className="mt-2"><Link to="/career-roadmaps">Explore Careers</Link></Button>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-4">
                    {bookmarks.map(bm => (
                      <div key={bm.id} className="p-5 rounded-xl bg-background border flex flex-col hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-lg mb-4 text-primary">{formatCareerName(bm.careerPath)}</h4>
                        <div className="mt-auto flex flex-wrap gap-2">
                          <Button asChild size="sm" className="rounded-lg"><Link to={`/career-roadmaps/${bm.careerPath}`}>Roadmap</Link></Button>
                          <Button asChild variant="secondary" size="sm" className="rounded-lg"><Link to={`/interview-questions/${bm.careerPath}`}>Practice</Link></Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <Card className="glass-card rounded-2xl border-none">
              <CardHeader className="border-b border-border/50 pb-4 mb-4">
                <CardTitle className="text-lg flex items-center gap-2"><GraduationCap className="w-5 h-5 text-primary" /> Quiz Results</CardTitle>
              </CardHeader>
              <CardContent>
                {quizzes.length === 0 ? <p className="text-sm text-muted-foreground text-center py-6">No quizzes completed.</p> : (
                  <div className="space-y-3">
                    {quizzes.map(q => (
                      <div key={q.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-background border gap-4">
                        <div>
                          <div className="font-bold">{formatCareerName(q.careerSlug)}</div>
                          <div className="text-sm text-muted-foreground">{format(new Date(q.completedAt), 'PPP')}</div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="font-bold text-primary">{Math.round(q.accuracy)}% Score</div>
                            <div className="text-xs text-muted-foreground uppercase font-bold">{q.readinessLevel}</div>
                          </div>
                          <Button asChild size="sm" variant="outline" className="rounded-lg"><Link to={`/quizzes/${q.careerSlug}`}>Retake</Link></Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="glass-card rounded-2xl border-none">
              <CardHeader className="border-b border-border/50 pb-4 mb-4">
                <CardTitle className="text-lg flex items-center gap-2"><BrainCircuit className="w-5 h-5 text-primary" /> Interview Practice</CardTitle>
              </CardHeader>
              <CardContent>
                {interviews.length === 0 ? <p className="text-sm text-muted-foreground text-center py-6">No interview sessions.</p> : (
                  <div className="space-y-3">
                    {interviews.map(i => (
                      <div key={i.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-background border gap-4">
                        <div>
                          <div className="font-bold">{formatCareerName(i.careerPath)}</div>
                          <div className="text-sm text-muted-foreground">Last updated {format(new Date(i.lastUpdated), 'PPP')}</div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="font-bold text-emerald-600">{i.readinessScore}% Readiness</div>
                            <div className="text-xs text-muted-foreground">{i.questionsAnswered} Answered ({i.knownQuestions} Known)</div>
                          </div>
                          <Button asChild size="sm" variant="secondary" className="rounded-lg"><Link to={`/interview-questions/${i.careerPath}`}><Play className="w-3 h-3 mr-1"/> Resume</Link></Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="glass-card rounded-2xl border-none">
              <CardHeader><CardTitle className="text-xl text-destructive">Danger Zone</CardTitle></CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Permanently delete your account and all associated data.</p>
                <Button variant="destructive" className="rounded-xl">Delete Account</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
