
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  description: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, trend, description }) => {
  return (
    <Card className="overflow-hidden border shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardContent className="space-y-2 pt-6">
        <p className="text-muted-foreground text-sm">{title}</p>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">{value}</h3>
          <div className={cn(
            "flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full",
            trend === "up" ? "bg-green-500/10 text-green-600 dark:bg-green-900/30 dark:text-green-400" : "bg-red-500/10 text-red-600 dark:bg-red-900/30 dark:text-red-400"
          )}>
            {trend === "up" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {change}
          </div>
        </div>
        <p className="text-muted-foreground text-xs">{description}</p>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
