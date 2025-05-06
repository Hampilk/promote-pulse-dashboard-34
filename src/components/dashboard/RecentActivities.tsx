
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RoundedBadge } from "@/components/ui/rounded-badge";
import { ChevronRight } from "lucide-react";

interface Activity {
  id: string;
  title: string;
  readTime: number;
  isNew?: boolean;
  isHot?: boolean;
  icon: React.ReactNode;
}

const RecentActivities: React.FC = () => {
  const activities: Activity[] = [
    {
      id: '1',
      title: 'Early access',
      readTime: 3,
      isNew: true,
      icon: <div className="bg-indigo-500/80 p-2 rounded-full"><span className="text-white text-xs">EA</span></div>
    },
    {
      id: '2',
      title: 'Access use guidelines',
      readTime: 9,
      isHot: true,
      icon: <div className="bg-pink-500/80 p-2 rounded-full"><span className="text-white text-xs">AG</span></div>
    },
    {
      id: '3',
      title: 'Exclusive downloads',
      readTime: 16,
      isNew: true,
      icon: <div className="bg-amber-500/80 p-2 rounded-full"><span className="text-white text-xs">ED</span></div>
    },
    {
      id: '4',
      title: 'Life & work updates',
      readTime: 35,
      isHot: true,
      icon: <div className="bg-emerald-500/80 p-2 rounded-full"><span className="text-white text-xs">LW</span></div>
    }
  ];

  return (
    <Card className="border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <h3 className="font-medium text-lg">Recent Activity</h3>
        <button className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors">
          View all
          <ChevronRight className="h-4 w-4" />
        </button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 py-2 hover:bg-muted/50 rounded-md px-2 transition-colors cursor-pointer">
              {activity.icon}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{activity.title}</h3>
                  {activity.isNew && <RoundedBadge variant="success">New</RoundedBadge>}
                  {activity.isHot && <RoundedBadge variant="danger">Hot</RoundedBadge>}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{activity.readTime} min read</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivities;
