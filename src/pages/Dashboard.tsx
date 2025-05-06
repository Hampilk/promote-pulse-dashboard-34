
import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Dashboard from "@/components/dashboard/Dashboard";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <Dashboard />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
