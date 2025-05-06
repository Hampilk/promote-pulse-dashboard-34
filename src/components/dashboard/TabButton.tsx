
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TabButtonProps {
  active: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
  badge?: number | string;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ active, icon, children, badge, onClick }) => {
  return (
    <Button
      variant={active ? "default" : "ghost"}
      className={cn(
        "flex items-center gap-2 px-4 py-2 h-10 relative transition-all",
        active && "bg-gradient-to-r from-primary/10 to-primary/5"
      )}
      onClick={onClick}
    >
      {active && (
        <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-5 bg-primary rounded-r-full" />
      )}
      <span className={active ? "text-primary" : "text-muted-foreground"}>
        {icon}
      </span>
      <span className={active ? "font-medium" : ""}>{children}</span>
      {badge && (
        <div className="flex justify-center items-center w-5 h-5 min-w-5 ml-1 rounded-full bg-destructive text-xs text-destructive-foreground">
          {badge}
        </div>
      )}
    </Button>
  );
};

export default TabButton;
