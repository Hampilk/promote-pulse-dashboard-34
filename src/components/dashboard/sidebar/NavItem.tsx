
import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  badge?: number | string;
  badgeVariant?: "destructive" | "default" | "outline";
  subItems?: Array<{
    label: string;
    path: string;
    badge?: number | string;
    badgeVariant?: "destructive" | "default" | "outline";
  }>;
  isActive: (path: string) => boolean;
  expanded: boolean;
  toggleMenu: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  path,
  badge,
  badgeVariant,
  subItems,
  isActive,
  expanded,
  toggleMenu,
}) => {
  const isItemActive = isActive(path) || 
    (subItems && subItems.some(sub => isActive(sub.path)));

  if (subItems) {
    return (
      <button
        onClick={toggleMenu}
        className={cn(
          "w-full flex items-center justify-between text-sm px-3 py-2.5 rounded-md transition-colors",
          isItemActive
            ? "bg-primary/10 text-primary font-medium relative"
            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
        )}
      >
        {isItemActive && (
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-5 bg-primary rounded-r-full" />
        )}
        <div className="flex items-center gap-3">
          <span className={isItemActive ? "text-primary" : "text-muted-foreground"}>
            {icon}
          </span>
          <span>{label}</span>
        </div>
        <ChevronDown
          size={16}
          className={cn(
            "text-muted-foreground transition-transform",
            expanded && "transform rotate-180"
          )}
        />
      </button>
    );
  }

  return (
    <Link
      to={path}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors",
        isActive(path)
          ? "bg-gradient-to-r from-primary/20 to-primary/5 text-primary font-medium relative"
          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
      )}
    >
      {isActive(path) && (
        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-5 bg-primary rounded-r-full" />
      )}
      <span className={isActive(path) ? "text-primary" : "text-muted-foreground"}>
        {icon}
      </span>
      <span>{label}</span>
      {badge && (
        <div className={cn(
          "flex justify-center items-center w-6 h-6 ml-auto rounded-lg text-xs font-medium",
          badgeVariant === "destructive" ? "bg-destructive/10 text-destructive" :
          badgeVariant === "outline" ? "bg-orange-500/10 text-orange-500" :
          "bg-primary/10 text-primary"
        )}>
          {badge}
        </div>
      )}
    </Link>
  );
};

export default NavItem;
