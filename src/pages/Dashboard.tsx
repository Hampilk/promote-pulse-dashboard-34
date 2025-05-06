
import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import CombinedDashboard from "@/components/dashboard/CombinedDashboard";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <CombinedDashboard />
    </DashboardLayout>
  );
};

export default Dashboard;
