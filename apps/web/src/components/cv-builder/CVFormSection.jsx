
import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export default function CVFormSection({ 
  id,
  title, 
  icon: Icon,
  items = [], 
  onAdd, 
  onRemove, 
  children 
}) {
  return (
    <AccordionItem value={id} className="border border-border rounded-xl bg-card overflow-hidden shadow-sm mb-4">
      <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
        <div className="flex items-center gap-3">
          {Icon && <div className="p-1.5 bg-primary/10 rounded-md text-primary"><Icon className="w-4 h-4" /></div>}
          <span className="font-bold text-foreground text-base">{title}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-5 pb-5 pt-2">
        <div className="space-y-5">
          {items.map((item, index) => (
            <div key={item.id || index} className="relative group p-4 border border-border/50 rounded-xl bg-background/50 transition-colors hover:border-border">
              {onRemove && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => onRemove(item.id || index)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
              {/* Children is a render prop pattern here to inject fields per item */}
              {typeof children === 'function' ? children(item, index) : children}
            </div>
          ))}
          
          {onAdd && (
            <Button 
              type="button" 
              variant="outline" 
              onClick={onAdd}
              className="w-full border-dashed border-2 py-6 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" /> Add {title} Entry
            </Button>
          )}
          
          {!onAdd && !items.length && children}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
