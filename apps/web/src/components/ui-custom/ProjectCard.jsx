
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export function ProjectCard({ title, description, techStack = [] }) {
  return (
    <Card className="hover:-translate-y-1 transition-transform duration-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg leading-tight">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      {techStack.length > 0 && (
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}

export default ProjectCard;
