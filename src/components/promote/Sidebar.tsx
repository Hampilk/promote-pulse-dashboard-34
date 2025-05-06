
import React from "react";
import { Calendar, ChevronDown, FileText, Grid, Home, Package, ShoppingBag, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasDropdown?: boolean;
  to?: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false, hasDropdown = false, to = "#" }) => {
  const content = (
    <>
      <span className={active ? "text-primary" : "text-muted-foreground"}>{icon}</span>
      <span>{label}</span>
      {hasDropdown && <ChevronDown size={16} className="ml-auto text-muted-foreground" />}
    </>
  );

  return (
    <Link 
      to={to}
      className={`flex items-center space-x-3 rounded-md px-3 py-2.5 transition-colors ${
        active
          ? "bg-primary/10 text-primary font-medium"
          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground cursor-pointer"
      }`}
    >
      {content}
    </Link>
  );
};

const Sidebar: React.FC = () => {
  // Determine if we're on the dashboard page
  const pathname = window.location.pathname;
  const isDashboardPage = pathname === "/dashboard";

  return (
    <div className="hidden md:block w-64 border-r bg-card h-screen sticky top-0">
      <div className="p-4 border-b">
        <div className="h-10 w-10 bg-primary/10 text-primary flex items-center justify-center rounded-md">
          <span className="font-bold">C2</span>
        </div>
      </div>

      <div className="py-4">
        <div className="px-3 mb-2 text-xs font-medium text-muted-foreground">MENU</div>
        <nav className="px-2 py-2">
          <div className="space-y-1">
            <NavItem icon={<Home size={18} />} label="Home" to="/" active={pathname === "/"} />
            <NavItem icon={<Grid size={18} />} label="Dashboard" to="/dashboard" active={isDashboardPage} />
            <NavItem icon={<Package size={18} />} label="Products" hasDropdown />
            <NavItem icon={<Users size={18} />} label="Customers" hasDropdown />
            <NavItem icon={<ShoppingBag size={18} />} label="Shop" />
            <NavItem icon={<FileText size={18} />} label="Income" hasDropdown />
            <NavItem icon={<Calendar size={18} />} label="Promote" />
          </div>
        </nav>

        <div className="mt-6 px-3 mb-2 text-xs font-medium text-muted-foreground">ANALYTICS</div>
        <nav className="px-2 py-2">
          <div className="space-y-1">
            <NavItem icon={<Grid size={18} />} label="Reports" />
            <NavItem icon={<Users size={18} />} label="Traffic" />
            <NavItem icon={<FileText size={18} />} label="Conversions" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
