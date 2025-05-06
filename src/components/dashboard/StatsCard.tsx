
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  description: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, trend, description }) => {
  return (
    <Card>
      <CardContent className="space-y-2 pt-6">
        <p className="text-muted-foreground text-sm">{title}</p>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">{value}</h3>
          <Badge variant={trend === "up" ? "outline" : "destructive"}>
            {change}
          </Badge>
        </div>
        <p className="text-muted-foreground text-xs">{description}</p>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
