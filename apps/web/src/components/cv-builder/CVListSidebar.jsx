
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Plus, MoreVertical, Copy, Trash2, Edit2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function CVListSidebar({ savedCVs, selectedCVId, onSelectCV, onCreateNewCV, onDeleteCV, onDuplicateCV, onRenameCV }) {
  return (
    <div className="w-64 border-r border-border/50 bg-background/80 backdrop-blur-xl flex flex-col h-full shrink-0 hidden md:flex">
      <div className="p-4 border-b border-border/50">
        <Button onClick={onCreateNewCV} className="w-full shadow-md shadow-primary/20 rounded-xl">
          <Plus className="w-4 h-4 mr-2" /> New CV
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 px-2">Your CVs</div>
        
        {savedCVs.map(cv => (
          <motion.div 
            key={cv.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`group flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${selectedCVId === cv.id ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted text-foreground/80'}`}
            onClick={() => onSelectCV(cv.id)}
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <FileText className={`w-4 h-4 shrink-0 ${selectedCVId === cv.id ? 'text-primary' : 'text-muted-foreground'}`} />
              <span className="truncate text-sm">{cv.cvName || 'Untitled CV'}</span>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                <Button variant="ghost" size="icon" className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem onClick={(e) => { e.stopPropagation(); onRenameCV(cv.id); }}>
                  <Edit2 className="w-4 h-4 mr-2" /> Rename
                </DropdownMenuItem>
                <DropdownMenuItem onClick={(e) => { e.stopPropagation(); onDuplicateCV(cv.id); }}>
                  <Copy className="w-4 h-4 mr-2" /> Duplicate
                </DropdownMenuItem>
                <DropdownMenuItem onClick={(e) => { e.stopPropagation(); onDeleteCV(cv.id); }} className="text-destructive focus:text-destructive">
                  <Trash2 className="w-4 h-4 mr-2" /> Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
        ))}
        
        {savedCVs.length === 0 && (
          <div className="text-center p-4 text-sm text-muted-foreground">
            No saved CVs yet. Create one to get started!
          </div>
        )}
      </div>
    </div>
  );
}
