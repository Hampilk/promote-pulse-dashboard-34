
import React, { useState } from "react";
import { ArrowUpRight, ArrowDownRight, MoreHorizontal, ChevronRight, Search } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

// Sample data for charts
const data = [
  { name: "Jan", value: 12400 },
  { name: "Feb", value: 9800 },
  { name: "Mar", value: 16200 },
  { name: "Apr", value: 14900 },
  { name: "May", value: 18600 },
  { name: "Jun", value: 16800 },
  { name: "Jul", value: 19200 },
];

const customerData = [
  { id: 1, name: "Sarah Johnson", avatar: "/placeholder.svg", status: "active" },
  { id: 2, name: "Michael Chen", avatar: "/placeholder.svg", status: "active" },
  { id: 3, name: "Jessica Wong", avatar: "/placeholder.svg", status: "inactive" },
  { id: 4, name: "David Miller", avatar: "/placeholder.svg", status: "active" },
  { id: 5, name: "Emma Wilson", avatar: "/placeholder.svg", status: "active" },
  { id: 6, name: "James Brown", avatar: "/placeholder.svg", status: "inactive" },
  { id: 7, name: "Linda Garcia", avatar: "/placeholder.svg", status: "active" },
];

// ModernMetricCard Component - Redesigned with modern styling
const ModernMetricCard = ({ title, value, change, icon, isPositive = true }) => {
  return (
    <div className="bg-card rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <div className="text-muted-foreground">
          {icon || <MoreHorizontal size={18} />}
        </div>
      </div>
      <div className="mt-3">
        <p className="text-2xl font-semibold">{value}</p>
        <div className="flex items-center mt-2">
          <div className={`flex items-center py-1 px-2 rounded-full text-xs font-medium ${
            isPositive ? "bg-green-500/10 text-green-600 dark:text-green-400" : "bg-red-500/10 text-red-600 dark:text-red-400"
          }`}>
            {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            <span className="ml-1">{change}</span>
          </div>
          <span className="text-xs text-muted-foreground ml-2">vs last month</span>
        </div>
      </div>
    </div>
  );
};

// ModernBalanceChart Component - Enhanced with better styling
const ModernBalanceChart = () => {
  return (
    <div className="bg-card rounded-3xl p-6 shadow-md h-80 border border-border">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Balance</h3>
        <button className="text-muted-foreground">
          <MoreHorizontal size={20} />
        </button>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00A656" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00A656" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "var(--card)", 
              border: "1px solid var(--border)", 
              borderRadius: "12px", 
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)" 
            }}
            labelStyle={{ color: "var(--foreground)" }}
            itemStyle={{ color: "#00A656" }}
            formatter={(value) => [`$${value.toLocaleString()}`, "Value"]}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#00A656" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorValue)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// ModernCustomersList Component - Redesigned with modern styling
const ModernCustomersList = () => {
  return (
    <div className="bg-card rounded-3xl p-6 shadow-md border border-border">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Recent Customers</h3>
        <Button variant="ghost" className="text-sm font-medium text-primary flex items-center gap-1">
          View all <ChevronRight size={16} />
        </Button>
      </div>
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-none">
          {customerData.map((customer) => (
            <div key={customer.id} className="flex-shrink-0">
              <div className="relative w-12 h-12 mb-2 mx-auto">
                <Avatar className="size-12">
                  <AvatarImage src={customer.avatar} alt={customer.name} />
                  <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {customer.status === "active" && (
                  <div className="absolute bottom-0 right-0 bg-green-500 w-3 h-3 rounded-full border-2 border-card"></div>
                )}
              </div>
              <p className="text-xs text-center text-muted-foreground truncate w-14">{customer.name.split(" ")[0]}</p>
            </div>
          ))}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 mb-2 mx-auto flex items-center justify-center rounded-full bg-muted">
              <ChevronRight size={16} className="text-muted-foreground" />
            </div>
            <p className="text-xs text-center text-muted-foreground w-14">View all</p>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-card to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

// ModernOverview Component - With tabs for different sections
const ModernOverview = () => {
  const [activeTab, setActiveTab] = useState("customers");

  return (
    <div className="bg-card rounded-3xl p-6 shadow-md border border-border">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Overview</h3>
        <div className="flex items-center space-x-4">
          <div className="bg-muted rounded-lg p-1">
            <Button 
              onClick={() => setActiveTab("customers")} 
              variant={activeTab === "customers" ? "secondary" : "ghost"}
              className="px-4 py-2 text-sm font-medium rounded-lg"
            >
              Customers
            </Button>
            <Button 
              onClick={() => setActiveTab("balance")} 
              variant={activeTab === "balance" ? "secondary" : "ghost"}
              className="px-4 py-2 text-sm font-medium rounded-lg"
            >
              Balance
            </Button>
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal size={20} />
          </Button>
        </div>
      </div>
      
      {activeTab === "customers" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">New Customers</h4>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">1,274</span>
                <span className="ml-2 text-sm font-medium text-green-500">+12.4%</span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Active Now</h4>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">329</span>
                <span className="ml-2 text-sm font-medium text-red-500">-2.7%</span>
              </div>
            </div>
          </div>
          <ModernCustomersList />
        </div>
      )}
      
      {activeTab === "balance" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Current Balance</h4>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">$24,156.00</span>
                <span className="ml-2 text-sm font-medium text-green-500">+2.3%</span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Pending</h4>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">$4,750.00</span>
                <span className="ml-2 text-sm font-medium text-muted-foreground">Processing</span>
              </div>
            </div>
          </div>
          <ModernBalanceChart />
        </div>
      )}
    </div>
  );
};

// ModernDashboard Component - Main dashboard layout
const ModernDashboard = () => {
  return (
    <div className="p-4 md:p-6">
      <div>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome back, here's what's happening with your business today.</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
            </div>
            <Button variant="default" size="sm">
              Add New
            </Button>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <ModernMetricCard 
            title="Total Revenue" 
            value="$45,231.89" 
            change="12.5%" 
            isPositive={true}
          />
          <ModernMetricCard 
            title="Active Customers" 
            value="2,518" 
            change="8.2%" 
            isPositive={true}
          />
          <ModernMetricCard 
            title="New Orders" 
            value="482" 
            change="3.1%" 
            isPositive={false}
          />
          <ModernMetricCard 
            title="Refund Rate" 
            value="0.8%" 
            change="0.5%" 
            isPositive={true}
          />
        </div>
        
        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ModernOverview />
          </div>
          <div>
            <ModernCustomersList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernDashboard;
