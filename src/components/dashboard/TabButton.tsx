
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
      className="flex items-center gap-2"
      onClick={onClick}
    >
      {icon}
      {children}
      {badge && (
        <Badge variant="destructive" className="ml-2">
          {badge}
        </Badge>
      )}
    </Button>
  );
};

export default TabButton;
