
import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export function FAQItem({ value, question, answer }) {
  return (
    <AccordionItem value={value} className="border-border/50">
      <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}

export default FAQItem;
