
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Grid, Home, Package, ShoppingBag, Users, FileText, Calendar } from "lucide-react";
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
}

const ModernSidebar: React.FC = () => {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (label: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const navItems: NavItemProps[] = [
    {
      icon: <Home size={18} />,
      label: "Home",
      path: "/",
    },
    {
      icon: <Grid size={18} />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <Package size={18} />,
      label: "Products",
      path: "/products",
      subItems: [
        { label: "Overview", path: "/products/overview" },
        { label: "Drafts", path: "/products/drafts", badge: 2 },
        { label: "Released", path: "/products/released" },
        { label: "Comments", path: "/products/comments" },
        { label: "Scheduled", path: "/products/scheduled", badge: 8, badgeVariant: "outline" },
      ]
    },
    {
      icon: <Users size={18} />,
      label: "Customers",
      path: "/customers",
      subItems: [
        { label: "Overview", path: "/customers/overview" },
        { label: "Customer List", path: "/customers/list" },
      ]
    },
    {
      icon: <ShoppingBag size={18} />,
      label: "Shop",
      path: "/shop",
    },
    {
      icon: <FileText size={18} />,
      label: "Income",
      path: "/income",
      subItems: [
        { label: "Earning", path: "/income/earning" },
        { label: "Refunds", path: "/income/refunds", badge: 3 },
        { label: "Payouts", path: "/income/payouts" },
        { label: "Statements", path: "/income/statements" },
      ]
    },
    {
      icon: <Calendar size={18} />,
      label: "Promote",
      path: "/promote",
    },
  ];

  const isActive = (path: string) => {
    return location.pathname === path || 
           (path !== "/" && location.pathname.startsWith(path));
  };

  const renderSubItems = (item: NavItemProps) => {
    if (!item.subItems || !expandedMenus[item.label]) return null;

    return (
      <div className="relative flex flex-col pl-9 before:absolute before:top-0 before:left-[1.4375rem] before:bottom-0 before:w-[1.5px] before:bg-border dark:before:bg-border">
        {item.subItems.map((subItem, idx) => (
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

  return (
    <div className="hidden md:block w-64 border-r bg-card h-screen overflow-y-auto sticky top-0">
      <div className="p-4 border-b">
        <div className="h-10 w-10 bg-primary/10 text-primary flex items-center justify-center rounded-md">
          <span className="font-bold">C2</span>
        </div>
      </div>

      <div className="py-4">
        <div className="px-3 mb-2 text-xs font-medium text-muted-foreground uppercase">Menu</div>
        <nav className="px-2 py-2">
          <div className="space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.subItems ? (
                  <button
                    onClick={() => toggleMenu(item.label)}
                    className={cn(
                      "w-full flex items-center justify-between text-sm px-3 py-2.5 rounded-md transition-colors",
                      (isActive(item.path) || (item.subItems && item.subItems.some(sub => isActive(sub.path))))
                        ? "bg-primary/10 text-primary font-medium relative"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    )}
                  >
                    {(isActive(item.path) || (item.subItems && item.subItems.some(sub => isActive(sub.path)))) && (
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-5 bg-primary rounded-r-full" />
                    )}
                    <div className="flex items-center gap-3">
                      <span className={isActive(item.path) ? "text-primary" : "text-muted-foreground"}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    <ChevronDown
                      size={16}
                      className={cn(
                        "text-muted-foreground transition-transform",
                        expandedMenus[item.label] && "transform rotate-180"
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors",
                      isActive(item.path)
                        ? "bg-gradient-to-r from-primary/20 to-primary/5 text-primary font-medium relative"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    )}
                  >
                    {isActive(item.path) && (
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-5 bg-primary rounded-r-full" />
                    )}
                    <span className={isActive(item.path) ? "text-primary" : "text-muted-foreground"}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                    {item.badge && (
                      <div className={cn(
                        "flex justify-center items-center w-6 h-6 ml-auto rounded-lg text-xs font-medium",
                        item.badgeVariant === "destructive" ? "bg-destructive/10 text-destructive" :
                        item.badgeVariant === "outline" ? "bg-orange-500/10 text-orange-500" :
                        "bg-primary/10 text-primary"
                      )}>
                        {item.badge}
                      </div>
                    )}
                  </Link>
                )}
                {renderSubItems(item)}
              </div>
            ))}
          </div>
        </nav>

        <div className="mt-6 px-3 mb-2 text-xs font-medium text-muted-foreground uppercase">Analytics</div>
        <nav className="px-2 py-2">
          <div className="space-y-1">
            <Link
              to="/reports"
              className="flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            >
              <Grid size={18} />
              <span>Reports</span>
            </Link>
            <Link
              to="/traffic"
              className="flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            >
              <Users size={18} />
              <span>Traffic</span>
            </Link>
            <Link
              to="/conversions"
              className="flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            >
              <FileText size={18} />
              <span>Conversions</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ModernSidebar;
