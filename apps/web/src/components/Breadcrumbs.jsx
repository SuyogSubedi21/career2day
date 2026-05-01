
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="flex items-center text-sm text-muted-foreground mb-6 overflow-x-auto whitespace-nowrap pb-2">
      <Link to="/" className="flex items-center hover:text-foreground transition-colors shrink-0">
        <Home className="w-4 h-4" />
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4 mx-2 shrink-0" />
          {item.path ? (
            <Link to={item.path} className="hover:text-foreground transition-colors shrink-0">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-foreground shrink-0">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
