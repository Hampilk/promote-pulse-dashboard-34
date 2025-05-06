
import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import SidebarDemo from "@/components/sidebar-demo";

const ProductsOverview = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <h2 className="text-h2">Products Overview with Sidebar Component</h2>
        <SidebarDemo />
      </div>
    </DashboardLayout>
  );
};

export default ProductsOverview;
