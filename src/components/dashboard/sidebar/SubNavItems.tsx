
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SubNavItemsProps {
  subItems: Array<{
    label: string;
    path: string;
    badge?: number | string;
    badgeVariant?: "destructive" | "default" | "outline";
  }>;
  isActive: (path: string) => boolean;
}

const SubNavItems: React.FC<SubNavItemsProps> = ({ subItems, isActive }) => {
  return (
    <div className="relative flex flex-col pl-9 before:absolute before:top-0 before:left-[1.4375rem] before:bottom-0 before:w-[1.5px] before:bg-border dark:before:bg-border">
      {subItems.map((subItem) => (
        <div key={subItem.path} className="relative">
          <div className="absolute top-0 -left-[0.8125rem] bottom-[calc(50%-0.75px)] w-[0.8125rem] border-l border-b border-border dark:border-border rounded-bl-[10px]"></div>
          <Link 
            to={subItem.path}
            className={cn(
              "flex items-center gap-2 py-2.5 px-3 rounded-md transition-colors text-sm",
              isActive(subItem.path)
                ? "text-primary font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
            )}
          >
            <span>{subItem.label}</span>
            {subItem.badge && (
              <div className={cn(
                "flex justify-center items-center w-6 h-6 ml-auto rounded-lg text-xs font-medium",
                subItem.badgeVariant === "destructive" ? "bg-destructive/10 text-destructive" :
                subItem.badgeVariant === "outline" ? "bg-orange-500/10 text-orange-500" :
                "bg-primary/10 text-primary"
              )}>
                {subItem.badge}
              </div>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SubNavItems;
