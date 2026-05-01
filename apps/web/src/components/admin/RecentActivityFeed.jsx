
import React from 'react';
import { UserPlus, CreditCard, FileText, MessageSquare } from 'lucide-react';

export default function RecentActivityFeed({ activities }) {
  const getIcon = (type) => {
    switch (type) {
      case 'signup': return <UserPlus className="w-4 h-4 text-blue-500" />;
      case 'subscription': return <CreditCard className="w-4 h-4 text-green-500" />;
      case 'cv_build': return <FileText className="w-4 h-4 text-purple-500" />;
      case 'interview': return <MessageSquare className="w-4 h-4 text-amber-500" />;
      default: return <div className="w-4 h-4 rounded-full bg-gray-500" />;
    }
  };

  const getBgColor = (type) => {
    switch (type) {
      case 'signup': return 'bg-blue-500/10';
      case 'subscription': return 'bg-green-500/10';
      case 'cv_build': return 'bg-purple-500/10';
      case 'interview': return 'bg-amber-500/10';
      default: return 'bg-gray-500/10';
    }
  };

  if (!activities || activities.length === 0) {
    return <div className="text-center py-8 text-muted-foreground text-sm">No recent activity</div>;
  }

  return (
    <div className="space-y-6">
      {activities.map((activity, index) => (
        <div key={index} className="flex gap-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${getBgColor(activity.type)}`}>
            {getIcon(activity.type)}
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm text-foreground">
              <span className="font-medium">{activity.user}</span> {activity.action}
            </p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
