import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import NavItem from "./sidebar/NavItem";
import SubNavItems from "./sidebar/SubNavItems";
import SidebarSection from "./sidebar/SidebarSection";
import { navItems, analyticsItems } from "./sidebar/navItems";

const ModernSidebar: React.FC = () => {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (label: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const isActive = (path: string) => {
    return location.pathname === path || 
           (path !== "/" && location.pathname.startsWith(path));
  };

  const renderSubItems = (itemLabel: string, subItems: Array<{
    label: string;
    path: string;
    badge?: number | string;
    badgeVariant?: "destructive" | "default" | "outline";
  }>) => {
    if (!expandedMenus[itemLabel]) return null;
    return <SubNavItems subItems={subItems} isActive={isActive} />;
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
                <NavItem
                  {...item}
                  isActive={isActive}
                  expanded={!!expandedMenus[item.label]}
                  toggleMenu={() => toggleMenu(item.label)}
                />
                {item.subItems && renderSubItems(item.label, item.subItems)}
              </div>
            ))}
          </div>
        </nav>

        <SidebarSection title="Analytics" items={analyticsItems} />
      </div>
    </div>
  );
};

export default ModernSidebar;
