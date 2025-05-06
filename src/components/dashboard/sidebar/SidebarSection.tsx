
import React from "react";
import { Link } from "react-router-dom";

interface SidebarSectionProps {
  title: string;
  items: Array<{
    icon: React.ReactNode;
    label: string;
    path: string;
  }>;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items }) => {
  return (
    <>
      <div className="px-3 mb-2 text-xs font-medium text-muted-foreground uppercase">{title}</div>
      <nav className="px-2 py-2">
        <div className="space-y-1">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default SidebarSection;
