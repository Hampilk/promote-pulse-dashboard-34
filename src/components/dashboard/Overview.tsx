
import React, { useState } from "react";
import { Package, Users } from "lucide-react";
import MetricCard from "@/components/dashboard/MetricCard";
import CustomersList from "@/components/dashboard/CustomersList";
import BalanceChart from "@/components/dashboard/BalanceChart";

const Overview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'customers' | 'balance'>('balance');
  
  // Sample data for the chart
  const chartData = [
    { name: "Apr", value: 0 },
    { name: "May", value: 32000 },
    { name: "Jun", value: 2000 },
    { name: "Jul", value: 20000 },
    { name: "Aug", value: 60000 },
    { name: "Sep", value: 15000 },
  ];

  return (
    <div className="bg-card border rounded-lg shadow-sm overflow-hidden">
      <div className="flex items-center h-12 px-5 max-lg:px-3">
        <div className="mr-auto text-lg font-medium">Overview</div>
        <div className="min-w-40 max-md:min-w-34">
          <button className="group flex justify-between items-center w-full h-12 pl-4.5 pr-3 border rounded-3xl text-sm text-foreground transition-all hover:border-primary hover:text-primary">
            <div className="truncate">Last 7 days</div>
            <svg className="inline-flex size-6 shrink-0 ml-2 fill-muted-foreground transition-transform group-hover:fill-primary" width="24" height="24" viewBox="0 0 24 24">
              <path d="M7.47 9.88a.75.75 0 0 1 1.061 0l2.586 2.586a1.25 1.25 0 0 0 1.768 0L15.47 9.88a.75.75 0 1 1 1.061 1.061l-2.586 2.586a2.75 2.75 0 0 1-3.889 0L7.47 10.94a.75.75 0 0 1 0-1.061z"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="pt-3">
        <div className="pt-1">
          <div className="flex mb-4 p-1.5 border rounded-3xl bg-muted/50">
            {/* Customers Tab */}
            <MetricCard 
              icon={<Users className="h-5 w-5" />}
              title="Customers"
              value="1,293"
              change={-36.8}
              isActive={activeTab === 'customers'}
              onClick={() => setActiveTab('customers')}
            />
            
            {/* Balance Tab */}
            <MetricCard
              icon={<Package className="h-5 w-5" />}
              title="Balance"
              value="$256k"
              change={36.8}
              isActive={activeTab === 'balance'}
              onClick={() => setActiveTab('balance')}
            />
          </div>
        </div>
        
        {activeTab === 'customers' ? (
          <CustomersList />
        ) : (
          <BalanceChart chartData={chartData} />
        )}
      </div>
    </div>
  );
};

export default Overview;
