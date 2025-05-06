
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
      className={`group flex-1 px-12 py-8 rounded-3xl cursor-pointer transition-all max-2xl:p-6 max-xl:pr-3 max-md:p-4 ${
        isActive 
          ? "bg-b-surface2 shadow-md" 
          : "hover:bg-background/80"
      }`}
      onClick={onClick}
    >
      <div className={`flex items-center gap-3 mb-2 text-sub-title-1 transition-colors group-hover:text-t-primary max-md:mb-3 max-md:text-sub-title-2 ${
        isActive ? "text-foreground" : "text-muted-foreground"
      }`}>
        <span className={isActive ? "text-foreground" : "text-muted-foreground"}>{icon}</span>
        <div>{title}</div>
      </div>
      <div className="flex items-center gap-4 max-md:flex-col max-md:items-stretch max-md:gap-1">
        <div className="text-2xl font-bold md:text-3xl">{value}</div>
        <div>
          <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg ${
            isPositive 
              ? "bg-green-500/10 text-green-600 dark:bg-green-900/30 dark:text-green-400" 
              : "bg-red-500/10 text-red-600 dark:bg-red-900/30 dark:text-red-400"
          }`}>
            {isPositive ? 
              <ArrowUp className="size-4" /> : 
              <ArrowDown className="size-4" />
            }
            <span className="text-sm">{Math.abs(change)}%</span>
          </div>
          <div className="mt-1 text-xs text-muted-foreground">vs last month</div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
