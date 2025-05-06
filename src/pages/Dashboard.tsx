
import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import SidebarDemo from "@/components/sidebar-demo";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <h2 className="text-h2">Sidebar Component Demo</h2>
        <SidebarDemo />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
