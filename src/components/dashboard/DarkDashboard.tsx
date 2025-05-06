
import React from "react";
import { ArrowDown, ArrowUp, ChevronRight, Code, FileText, Folder, Package, Search, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import MetricCard from "@/components/dashboard/MetricCard";
import Comments from "@/components/dashboard/Comments";
import PopularProducts from "@/components/dashboard/PopularProducts";

// Create new component for refund requests
const RefundRequests = () => {
  return (
    <div className="bg-card border border-border rounded-lg p-5 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-medium text-lg">Refund Requests</h2>
        <button className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors">
          View all
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-amber-500/10 flex items-center justify-center">
            <FileText className="h-5 w-5 text-amber-500" />
          </div>
          <div>
            <span className="font-medium">Pending</span>
            <p className="text-sm text-muted-foreground">12 requests</p>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">Today</div>
      </div>
    </div>
  );
};

// Create component for activity steps
const ActivityStep = ({ icon, color, title, description }: { icon: React.ReactNode, color: string, title: string, description: string }) => {
  return (
    <div className="flex items-start gap-3">
      <div className={`flex items-center justify-center h-10 w-10 rounded-full ${color}`}>
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );
};

// Create component for revenue section
const RevenueSection = () => {
  return (
    <Card className="border border-border bg-card">
      <CardContent className="pt-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold">$10.2M</h3>
            <div className="flex items-center gap-1 text-sm text-green-400 mt-1">
              <ArrowUp size={14} />
              <span>5.3%</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-md">1D</button>
            <button className="text-sm px-3 py-1 rounded-md text-muted-foreground">1W</button>
            <button className="text-sm px-3 py-1 rounded-md text-muted-foreground">1M</button>
            <button className="text-sm px-3 py-1 rounded-md text-muted-foreground">3M</button>
            <button className="text-sm px-3 py-1 rounded-md text-muted-foreground">1Y</button>
          </div>
        </div>
        <div className="h-[180px] w-full">
          {/* This would be replaced with an actual chart component */}
          <div className="h-full w-full flex items-end">
            {[40, 60, 35, 85, 30, 55, 45, 70, 50, 65].map((height, i) => (
              <div key={i} className="flex-1 mx-0.5">
                <div 
                  className="bg-gradient-to-t from-green-500/20 to-green-500/60 rounded-sm"
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const DarkDashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Left section - Main dashboard content */}
      <div className="col-span-12 lg:col-span-8 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-2">
            <button className="text-sm bg-transparent hover:bg-secondary text-muted-foreground px-3 py-1 rounded-md border border-border">
              <Search className="h-4 w-4 inline mr-1" />
              Search
            </button>
            <button className="text-sm bg-primary text-primary-foreground px-3 py-1 rounded-md">+ Create New</button>
          </div>
        </div>

        {/* Metrics cards */}
        <div className="flex mb-4 p-1.5 border rounded-2xl bg-card">
          <MetricCard 
            icon={<Users className="h-5 w-5" />}
            title="Customers"
            value="1,293"
            change={-36.8}
            isActive={false}
            onClick={() => {}}
          />
          
          <MetricCard
            icon={<Package className="h-5 w-5" />}
            title="Balance"
            value="$256k"
            change={36.8}
            isActive={true}
            onClick={() => {}}
          />
        </div>

        {/* Revenue Section */}
        <RevenueSection />

        {/* Activity overview */}
        <Card className="border border-border bg-card">
          <CardContent className="pt-6">
            <h2 className="font-medium text-lg mb-4">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ActivityStep 
                icon={<Code className="h-5 w-5 text-white" />}
                color="bg-indigo-500/80"
                title="Early Access"
                description="Get early access to new features and improvements"
              />
              <ActivityStep 
                icon={<Folder className="h-5 w-5 text-white" />}
                color="bg-pink-500/80"
                title="Guide Guidelines"
                description="Read our comprehensive guides and documentation"
              />
              <ActivityStep 
                icon={<Shield className="h-5 w-5 text-white" />}
                color="bg-amber-500/80"
                title="Exclusive Downloads"
                description="Access premium resources and templates"
              />
              <ActivityStep 
                icon={<Search className="h-5 w-5 text-white" />}
                color="bg-emerald-500/80"
                title="Advanced Search"
                description="Find exactly what you're looking for quickly"
              />
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Right section - Popular products, Comments, Refund requests */}
      <div className="col-span-12 lg:col-span-4">
        <PopularProducts />
        <div className="mt-6">
          <RefundRequests />
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default DarkDashboard;
