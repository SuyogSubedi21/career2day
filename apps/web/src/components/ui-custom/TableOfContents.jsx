
import React, { useEffect, useState } from 'react';

export default function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
    }
  };

  if (!headings || headings.length === 0) return null;

  return (
    <div className="glass-card rounded-2xl p-6 sticky top-24">
      <h3 className="font-bold text-lg mb-4 text-foreground">Table of Contents</h3>
      <nav className="space-y-1">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => handleClick(e, heading.id)}
            className={`block py-1.5 text-sm transition-colors ${
              heading.level === 3 ? 'ml-4' : ''
            } ${
              activeId === heading.id 
                ? 'text-primary font-semibold' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
