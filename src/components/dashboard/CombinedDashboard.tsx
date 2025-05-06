
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Bell, Calendar, Download, FileText, Home, 
  Settings, BarChart3
} from "lucide-react";

// Import our refactored components
import TabButton from "@/components/dashboard/TabButton";
import StatsCard from "@/components/dashboard/StatsCard";
import CustomersTable from "@/components/dashboard/CustomersTable";
import OverviewContent from "@/components/dashboard/tabs/OverviewContent";
import AnalyticsContent from "@/components/dashboard/tabs/AnalyticsContent";
import ReportsContent from "@/components/dashboard/tabs/ReportsContent";
import NotificationsContent from "@/components/dashboard/tabs/NotificationsContent";

const CombinedDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="max-w-full mx-auto space-y-6 p-4">
      {/* Header */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your store today.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Select Date
          </Button>
          <Button size="icon" variant="outline">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Total Revenue" value="$45,231.89" change="+20.1%" trend="up" description="vs last month" />
        <StatsCard title="New Customers" value="1,257" change="-5.2%" trend="down" description="vs last month" />
        <StatsCard title="Sales" value="12,234" change="+10.3%" trend="up" description="vs last month" />
        <StatsCard title="Active Users" value="573" change="+8.4%" trend="up" description="vs last month" />
      </div>

      {/* Tabs */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex gap-4 overflow-x-auto">
            <TabButton
              active={activeTab === "overview"}
              icon={<Home className="h-4 w-4" />}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </TabButton>
            <TabButton
              active={activeTab === "analytics"}
              icon={<BarChart3 className="h-4 w-4" />}
              onClick={() => setActiveTab("analytics")}
            >
              Analytics
            </TabButton>
            <TabButton
              active={activeTab === "reports"}
              icon={<FileText className="h-4 w-4" />}
              onClick={() => setActiveTab("reports")}
            >
              Reports
            </TabButton>
            <TabButton
              active={activeTab === "notifications"}
              icon={<Bell className="h-4 w-4" />}
              badge={5}
              onClick={() => setActiveTab("notifications")}
            >
              Notifications
            </TabButton>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          {activeTab === "overview" && <OverviewContent />}
          {activeTab === "analytics" && <AnalyticsContent />}
          {activeTab === "reports" && <ReportsContent />}
          {activeTab === "notifications" && <NotificationsContent />}
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex justify-end gap-2">
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
        <Button variant="outline">
          <FileText className="mr-2 h-4 w-4" />
          Reports
        </Button>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>

      {/* Table */}
      <CustomersTable />
    </div>
  );
};

export default CombinedDashboard;
