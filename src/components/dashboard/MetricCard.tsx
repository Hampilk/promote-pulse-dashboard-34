
import React from "react";
import { ArrowDown, ArrowUp, LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: number;
  isActive?: boolean;
  onClick?: () => void;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  icon, 
  title, 
  value, 
  change, 
  isActive = false, 
  onClick 
}) => {
  const isPositive = change > 0;
  
  return (
    <div 
      className={`group flex-1 px-6 py-6 rounded-xl cursor-pointer transition-all hover:shadow-md ${
        isActive 
          ? "bg-card shadow-sm border" 
          : "hover:bg-background/80"
      }`}
      onClick={onClick}
    >
      <div className={`flex items-center gap-3 mb-2 text-sm text-muted-foreground transition-colors group-hover:text-primary ${
        isActive ? "text-foreground" : ""
      }`}>
        <span className={`p-1.5 rounded-md ${isActive ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}>{icon}</span>
        <div>{title}</div>
      </div>
      <div className="flex items-center gap-4 mt-3">
        <div className="text-2xl font-semibold">{value}</div>
        <div>
          <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
            isPositive 
              ? "bg-green-500/10 text-green-600 dark:bg-green-900/30 dark:text-green-400" 
              : "bg-red-500/10 text-red-600 dark:bg-red-900/30 dark:text-red-400"
          }`}>
            {isPositive ? 
              <ArrowUp className="size-3" /> : 
              <ArrowDown className="size-3" />
            }
            <span>{Math.abs(change)}%</span>
          </div>
          <div className="mt-1 text-xs text-muted-foreground">vs last month</div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
