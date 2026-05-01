
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, GripVertical, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CVItemList({ items = [], onAddItem, onRemoveItem, onUpdateItem, onReorderItems, renderItemForm, itemTitleKey = 'title' }) {
  
  const moveUp = (index) => {
    if (index === 0) return;
    const newItems = [...items];
    [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
    onReorderItems(newItems);
  };

  const moveDown = (index) => {
    if (index === items.length - 1) return;
    const newItems = [...items];
    [newItems[index + 1], newItems[index]] = [newItems[index], newItems[index + 1]];
    onReorderItems(newItems);
  };

  return (
    <div className="space-y-6">
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative bg-background/60 border border-border/50 rounded-xl p-5 shadow-sm group"
          >
            <div className="absolute right-2 top-2 flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
              <div className="flex flex-col mr-2">
                <button onClick={() => moveUp(index)} disabled={index === 0} className="p-1 hover:text-primary disabled:opacity-30"><ChevronUp className="w-4 h-4" /></button>
                <button onClick={() => moveDown(index)} disabled={index === items.length - 1} className="p-1 hover:text-primary disabled:opacity-30"><ChevronDown className="w-4 h-4" /></button>
              </div>
              <Button variant="ghost" size="icon" onClick={() => onRemoveItem(item.id)} className="text-destructive hover:bg-destructive/10 hover:text-destructive h-8 w-8">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="pr-12">
              {renderItemForm(item, (field, value) => onUpdateItem(item.id, field, value))}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <Button onClick={onAddItem} variant="outline" className="w-full border-dashed border-2 h-12 bg-background/30 hover:bg-background/60">
        <Plus className="w-4 h-4 mr-2" /> Add Item
      </Button>
    </div>
  );
}
