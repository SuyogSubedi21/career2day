
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Upload, Download, Plus, Trash2, Edit, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { formatSalary } from '@/lib/utils/formatSalary.js';

export default function DataManagementDashboard() {
  const [activeTab, setActiveTab] = useState('careers');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  const fetchData = async (collection) => {
    setLoading(true);
    try {
      let collName = '';
      switch (collection) {
        case 'careers': collName = 'careers'; break;
        case 'salary': collName = 'SalaryData'; break;
        case 'skills': collName = 'Skills'; break;
        case 'certifications': collName = 'Certifications'; break;
        case 'interviews': collName = 'interviewQuestions'; break;
        case 'timelines': collName = 'Timelines'; break;
        default: collName = 'careers';
      }
      
      const records = await pb.collection(collName).getFullList({
        sort: '-created',
        $autoCancel: false
      });
      setData(records);
    } catch (err) {
      toast.error(`Failed to load ${collection} data: ` + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleExport = () => {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeTab}_export.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Export completed.');
  };

  const handleDelete = async (id, collection) => {
    if (!window.confirm('Are you sure you want to delete this record?')) return;
    try {
      let collName = collection === 'salary' ? 'SalaryData' : 
                     collection === 'skills' ? 'Skills' : 
                     collection === 'certifications' ? 'Certifications' : 
                     collection === 'interviews' ? 'interviewQuestions' : 
                     collection === 'timelines' ? 'Timelines' : 'careers';
                     
      await pb.collection(collName).delete(id, { $autoCancel: false });
      toast.success('Record deleted.');
      fetchData(activeTab);
    } catch (err) {
      toast.error('Failed to delete: ' + err.message);
    }
  };

  const renderTableContent = () => {
    if (loading) {
      return (
        <TableRow>
          <TableCell colSpan={6} className="text-center py-10">
            <Loader2 className="w-6 h-6 animate-spin mx-auto text-primary" />
          </TableCell>
        </TableRow>
      );
    }
    
    if (data.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
            No records found.
          </TableCell>
        </TableRow>
      );
    }

    switch (activeTab) {
      case 'salary':
        return data.map(item => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.careerSlug}</TableCell>
            <TableCell>{item.level}</TableCell>
            <TableCell>{item.country}</TableCell>
            <TableCell>{formatSalary(item.minSalary, item.currency)} - {formatSalary(item.maxSalary, item.currency)}</TableCell>
            <TableCell className="text-muted-foreground">{new Date(item.updated).toLocaleDateString()}</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="icon" className="mr-2"><Edit className="w-4 h-4" /></Button>
              <Button variant="ghost" size="icon" className="text-destructive" onClick={() => handleDelete(item.id, 'salary')}><Trash2 className="w-4 h-4" /></Button>
            </TableCell>
          </TableRow>
        ));
      case 'skills':
        return data.map(item => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.skillName}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.difficulty}</TableCell>
            <TableCell>{item.estimatedLearningTime} wks</TableCell>
            <TableCell className="text-muted-foreground">{new Date(item.updated).toLocaleDateString()}</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="icon" className="mr-2"><Edit className="w-4 h-4" /></Button>
              <Button variant="ghost" size="icon" className="text-destructive" onClick={() => handleDelete(item.id, 'skills')}><Trash2 className="w-4 h-4" /></Button>
            </TableCell>
          </TableRow>
        ));
      default: // Careers
        return data.map(item => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.slug}</TableCell>
            <TableCell>{item.category || 'N/A'}</TableCell>
            <TableCell className="text-muted-foreground">{new Date(item.updated).toLocaleDateString()}</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="icon" className="mr-2"><Edit className="w-4 h-4" /></Button>
              <Button variant="ghost" size="icon" className="text-destructive" onClick={() => handleDelete(item.id, 'careers')}><Trash2 className="w-4 h-4" /></Button>
            </TableCell>
          </TableRow>
        ));
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Helmet>
        <title>Data Management | Admin Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Data Management</h1>
          <p className="text-muted-foreground mt-1">Manage global platforms data, careers, salaries, and resources.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExport} disabled={loading}>
            <Download className="w-4 h-4 mr-2" /> Export JSON
          </Button>
          <Button variant="outline" onClick={() => toast.info('Import feature coming soon.')}>
            <Upload className="w-4 h-4 mr-2" /> Import CSV
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" /> Add New
          </Button>
        </div>
      </div>

      <div className="glass-card rounded-xl p-2 sm:p-6 shadow-sm border border-border/50">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="overflow-x-auto pb-2 mb-4">
            <TabsList className="min-w-max">
              <TabsTrigger value="careers">Careers</TabsTrigger>
              <TabsTrigger value="salary">Salary Data</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
              <TabsTrigger value="interviews">Interview Qs</TabsTrigger>
              <TabsTrigger value="timelines">Timelines</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="rounded-md border bg-card overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    {activeTab === 'salary' ? (
                      <>
                        <TableHead>Career Slug</TableHead>
                        <TableHead>Level</TableHead>
                        <TableHead>Country</TableHead>
                        <TableHead>Range</TableHead>
                        <TableHead>Last Updated</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </>
                    ) : activeTab === 'skills' ? (
                      <>
                        <TableHead>Skill Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Difficulty</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Last Updated</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </>
                    ) : (
                      <>
                        <TableHead>Name</TableHead>
                        <TableHead>Slug</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Last Updated</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </>
                    )}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {renderTableContent()}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
