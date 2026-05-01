
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export default function FAQSection({ faqs }) {
  return (
    <div className="max-w-3xl mx-auto mt-24 mb-24">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="glass-card border px-6 rounded-2xl shadow-sm data-[state=open]:pb-2">
            <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
