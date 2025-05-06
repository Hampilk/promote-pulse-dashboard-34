
import React from "react";
import { Package, Users, Eye } from "lucide-react";
import MetricCard from "@/components/dashboard/MetricCard";
import PopularProducts from "@/components/dashboard/PopularProducts";
import RecentActivities from "@/components/dashboard/RecentActivities";

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard 
          icon={<Users className="h-4 w-4" />}
          title="Customers"
          value="1,293"
          change={36.8}
          isActive={true}
        />
        
        <MetricCard
          icon={<Package className="h-4 w-4" />}
          title="Balance"
          value="$256k"
          change={36.8}
          isActive={false}
        />
        
        <MetricCard
          icon={<Eye className="h-4 w-4" />}
          title="Product View"
          value="$10.2M"
          change={-2.8}
          isActive={false}
        />
      </div>
      
      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2">
          <RecentActivities />
        </div>
        
        {/* Popular Products */}
        <div className="lg:col-span-1">
          <PopularProducts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
