
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Share2, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const CalculatorLayout = ({ title, category, description, children, tips }) => {
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      <Helmet><title>{title} - CareerFlow Tools</title></Helmet>
      
      <nav className="flex items-center text-sm text-muted-foreground no-print">
        <Link to="/dashboard" className="hover:text-primary flex items-center"><Home className="w-4 h-4 mr-1" /> Home</Link>
        <ChevronRight className="w-4 h-4 mx-1" />
        <Link to="/tools" className="hover:text-primary">Tools</Link>
        <ChevronRight className="w-4 h-4 mx-1" />
        <span>{category}</span>
      </nav>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 no-print">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
          <p className="text-muted-foreground text-lg">{description}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleShare}><Share2 className="w-4 h-4 mr-2" /> Share</Button>
          <Button variant="outline" size="sm" onClick={handlePrint}><Printer className="w-4 h-4 mr-2" /> Print</Button>
        </div>
      </div>

      <div className="print-only hidden">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
      </div>

      <div className="mt-8">
        {children}
      </div>

      {tips && (
        <div className="mt-12 glass-card p-6 rounded-2xl bg-primary/5 border-primary/10 no-print">
          <h3 className="text-lg font-semibold mb-3 text-primary">💡 Pro Tips</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CalculatorLayout;
