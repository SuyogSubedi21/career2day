
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext.jsx';
import pb from '@/lib/pocketbaseClient';
import { format } from 'date-fns';
import { FileText, MoreVertical, Edit2, Download, Trash2, Link2, Plus, Loader2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';
import { getTemplateById } from '@/data/templateData.js';

const MyResumesPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResumes();
  }, [currentUser]);

  const fetchResumes = async () => {
    if (!currentUser) return;
    try {
      const records = await pb.collection('resumes').getList(1, 50, {
        filter: `userId="${currentUser.id}"`,
        sort: '-updated',
        $autoCancel: false
      });
      setResumes(records.items);
    } catch (error) {
      console.error("Error fetching resumes:", error);
      toast.error('Failed to load your resumes.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this resume? This cannot be undone.')) {
      try {
        await pb.collection('resumes').delete(id, { $autoCancel: false });
        setResumes(resumes.filter(r => r.id !== id));
        toast.success('Resume deleted successfully.');
      } catch (error) {
        toast.error('Failed to delete resume.');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      <Helmet><title>My Resumes - CareerFlow</title></Helmet>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-primary/5 p-6 md:p-8 rounded-3xl border border-primary/10">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Resumes</h1>
          <p className="text-muted-foreground">Manage, edit, and download your saved resumes.</p>
        </div>
        <Button onClick={() => navigate('/resume-templates')} className="shrink-0">
          <Plus className="w-4 h-4 mr-2" /> Create New Resume
        </Button>
      </div>

      {resumes.length === 0 ? (
        <div className="glass-card rounded-3xl p-12 text-center flex flex-col items-center">
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
            <FileText className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold mb-2">No resumes yet</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            You haven't created any resumes. Browse our premium templates and start building your career story.
          </p>
          <Button onClick={() => navigate('/resume-templates')}>Browse Templates</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {resumes.map((resume) => {
            const template = getTemplateById(resume.templateId);
            return (
              <Card key={resume.id} className="overflow-hidden hover:border-primary/50 transition-colors group flex flex-col">
                <div className="aspect-[1.5/1] relative bg-muted/30 border-b overflow-hidden flex items-center justify-center">
                  {/* Pseudo-preview thumbnail based on template image */}
                  <img src={template.image} alt="Template" className="w-full h-full object-cover opacity-60 mix-blend-multiply filter contrast-125" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                    <Button variant="secondary" onClick={() => navigate(`/resume-builder?id=${resume.id}`)}>
                      <Edit2 className="w-4 h-4 mr-2" /> Edit Resume
                    </Button>
                  </div>
                  {resume.isPremium && (
                    <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm flex items-center">
                      <Star className="w-3 h-3 mr-1 fill-current" /> Premium
                    </div>
                  )}
                </div>
                
                <CardHeader className="pb-3 pt-5">
                  <div className="flex justify-between items-start gap-2">
                    <div className="min-w-0">
                      <h3 className="font-bold text-lg truncate" title={resume.title || 'Untitled Resume'}>
                        {resume.title || 'Untitled Resume'}
                      </h3>
                      <p className="text-sm text-muted-foreground truncate">{template.name}</p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="-mt-1 -mr-2"><MoreVertical className="w-4 h-4" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem onClick={() => navigate(`/resume-builder?id=${resume.id}`)}>
                          <Edit2 className="w-4 h-4 mr-2" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate(`/resume-builder?id=${resume.id}&download=true`)}>
                          <Download className="w-4 h-4 mr-2" /> Download PDF
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive" onClick={() => handleDelete(resume.id)}>
                          <Trash2 className="w-4 h-4 mr-2" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                
                <CardFooter className="pt-0 text-xs text-muted-foreground flex justify-between mt-auto">
                  <span>Updated {format(new Date(resume.updated), 'MMM d, yyyy')}</span>
                  <div className="flex gap-3">
                    <span className="flex items-center" title="Downloads"><Download className="w-3 h-3 mr-1" /> {resume.downloadCount || 0}</span>
                    <span className="flex items-center" title="Shares"><Link2 className="w-3 h-3 mr-1" /> {resume.shareCount || 0}</span>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyResumesPage;
