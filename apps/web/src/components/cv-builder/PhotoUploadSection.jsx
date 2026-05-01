
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Trash2, UploadCloud } from 'lucide-react';
import { toast } from 'sonner';

export default function PhotoUploadSection({ cvData, setCvData }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setCvData(prev => ({ ...prev, photo_preview: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    setCvData(prev => ({ ...prev, photo_preview: null }));
  };

  return (
    <div className="space-y-4">
      <Label className="text-muted-foreground text-xs uppercase font-bold tracking-wider">Profile Photo (Optional)</Label>
      <p className="text-sm text-muted-foreground mb-4">
        Add a professional headshot to your CV. This feature is supported by selected templates.
      </p>
      
      {cvData.photo_preview ? (
        <div className="flex items-center gap-6 p-4 bg-muted/30 rounded-xl border border-border">
          <img 
            src={cvData.photo_preview} 
            alt="Profile Preview" 
            className="w-24 h-24 rounded-full object-cover border-2 border-primary/20 shadow-sm" 
          />
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">Photo uploaded successfully</p>
            <Button variant="destructive" size="sm" onClick={removePhoto} className="h-8">
              <Trash2 className="w-4 h-4 mr-2"/> Remove Photo
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer bg-muted/30 hover:bg-muted/80 border-border hover:border-primary/50 transition-all duration-200">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <div className="p-3 bg-background rounded-full shadow-sm mb-3">
                <UploadCloud className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-foreground font-medium mb-1">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground">JPG, PNG, WEBP or GIF (MAX. 5MB)</p>
            </div>
            <Input 
              type="file" 
              className="hidden" 
              accept="image/jpeg,image/png,image/gif,image/webp" 
              onChange={handleFileChange} 
            />
          </label>
        </div>
      )}
    </div>
  );
}
