
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Package, 
  Users, 
  BarChart, 
  Settings,
  ShoppingBag,
  FileText,
  Calendar
} from "lucide-react";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  path: string;
  badge?: number | string;
  badgeVariant?: "destructive" | "default" | "outline";
  subItems?: SubMenuItem[];
}

interface SubMenuItem {
  label: string;
  path: string;
  badge?: number | string;
  badgeVariant?: "destructive" | "default" | "outline";
}

const CustomSidebar: React.FC = () => {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});
  const [currentPath, setCurrentPath] = useState(location.pathname);
  
  // Update currentPath when location changes
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  const toggleMenu = (label: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  // Define menu items with their paths and icons
  const menuItems: MenuItem[] = [
    {
      icon: <Home size={18} />,
      label: "Home",
      path: "/",
    },
    {
      icon: <BarChart size={18} />,
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
    {
      icon: <Settings size={18} />,
      label: "Settings",
      path: "/settings",
    },
  ];

  // Check if a path is active
  const isActive = (path: string) => {
    return currentPath === path || 
           (path !== "/" && currentPath.startsWith(path));
  };

  // Check if any subitem is active
  const isSubItemActive = (item: MenuItem) => {
    if (!item.subItems) return false;
    return item.subItems.some(subItem => isActive(subItem.path));
  };

  // Render submenu items
  const renderSubItems = (item: MenuItem) => {
    if (!item.subItems || !expandedMenus[item.label]) return null;

    return (
      <div className="pl-10 space-y-1 mt-1">
        {item.subItems.map((subItem) => (
          <Link 
            key={subItem.path} 
            to={subItem.path} 
            className={cn(
              "flex items-center justify-between py-2 px-3 rounded-md text-sm transition-colors",
              isActive(subItem.path) 
                ? "text-primary font-medium" 
                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
            )}
          >
            <span>{subItem.label}</span>
            {subItem.badge && (
              <div className={cn(
                "flex justify-center items-center w-6 h-6 rounded-lg text-xs font-medium",
                subItem.badgeVariant === "destructive" ? "bg-destructive/10 text-destructive" :
                subItem.badgeVariant === "outline" ? "bg-orange-500/10 text-orange-500" :
                "bg-primary/10 text-primary"
              )}>
                {subItem.badge}
              </div>
            )}
          </Link>
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
          <div className="space-y-1.5">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.subItems ? (
                  <Button
                    onClick={() => toggleMenu(item.label)}
                    variant="ghost"
                    className={cn(
                      "w-full flex justify-between items-center h-12 px-3",
                      (isActive(item.path) || isSubItemActive(item)) && "text-primary"
                    )}
                  >
                    <div className="flex items-center gap-3 justify-start">
                      <div className={cn(
                        "p-1.5 rounded-xl",
                        (isActive(item.path) || isSubItemActive(item)) ? "bg-primary/10" : "bg-accent/50"
                      )}>
                        <span className={cn(
                          (isActive(item.path) || isSubItemActive(item)) ? "text-primary" : "text-muted-foreground"
                        )}>
                          {item.icon}
                        </span>
                      </div>
                      <span>{item.label}</span>
                    </div>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className={cn(
                        "transition-transform",
                        expandedMenus[item.label] && "transform rotate-180"
                      )}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </Button>
                ) : (
                  <Link to={item.path}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start h-12 px-3",
                        isActive(item.path) && "text-primary"
                      )}
                    >
                      <div className={cn(
                        "p-1.5 rounded-xl mr-3",
                        isActive(item.path) ? "bg-primary/10" : "bg-accent/50"
                      )}>
                        <span className={cn(
                          isActive(item.path) ? "text-primary" : "text-muted-foreground"
                        )}>
                          {item.icon}
                        </span>
                      </div>
                      {item.label}
                    </Button>
                  </Link>
                )}
                {renderSubItems(item)}
              </div>
            ))}
          </div>
        </nav>
        
        <div className="mt-6 px-3 mb-2 text-xs font-medium text-muted-foreground uppercase">Analytics</div>
        <nav className="px-2 py-2">
          <div className="space-y-1.5">
            <Link to="/reports">
              <Button
                variant="ghost"
                className="w-full justify-start h-12 px-3"
              >
                <div className="p-1.5 rounded-xl mr-3 bg-accent/50">
                  <BarChart size={18} className="text-muted-foreground" />
                </div>
                Reports
              </Button>
            </Link>
            <Link to="/traffic">
              <Button
                variant="ghost"
                className="w-full justify-start h-12 px-3"
              >
                <div className="p-1.5 rounded-xl mr-3 bg-accent/50">
                  <Users size={18} className="text-muted-foreground" />
                </div>
                Traffic
              </Button>
            </Link>
            <Link to="/conversions">
              <Button
                variant="ghost"
                className="w-full justify-start h-12 px-3"
              >
                <div className="p-1.5 rounded-xl mr-3 bg-accent/50">
                  <FileText size={18} className="text-muted-foreground" />
                </div>
                Conversions
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default CustomSidebar;
