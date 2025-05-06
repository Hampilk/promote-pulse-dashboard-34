
import React from "react";
import ModernSidebar from "@/components/dashboard/ModernSidebar";
import MobileSidebar from "@/components/dashboard/MobileSidebar";
import Header from "@/components/dashboard/Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <ModernSidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header>
          <MobileSidebar />
        </Header>

        {/* Dashboard content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
