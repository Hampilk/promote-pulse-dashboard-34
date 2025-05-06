
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Bell, Calendar, ChevronDown, Download, FileText, Home, Search, Settings, BarChart3, Check } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from "recharts";

// Chart Components
function ChartComponents() {
  const data = [
    { name: "Jan", value: 4000 },
    { name: "Feb", value: 3000 },
    { name: "Mar", value: 5000 },
    { name: "Apr", value: 2780 },
    { name: "May", value: 1890 },
    { name: "Jun", value: 2390 },
    { name: "Jul", value: 3490 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <RechartsTooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

// Custom Tab Button Component
interface TabButtonProps {
  active: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
  badge?: number;
  onClick: () => void;
}

function TabButton({ active, icon, children, badge, onClick }: TabButtonProps) {
  return (
    <Button
      variant={active ? "default" : "ghost"}
      className="flex items-center gap-2"
      onClick={onClick}
    >
      {icon}
      {children}
      {badge && (
        <Badge variant="destructive" className="ml-2">
          {badge}
        </Badge>
      )}
    </Button>
  );
}

// Stats Card Component
interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  description: string;
}

function StatsCard({ title, value, change, trend, description }: StatsCardProps) {
  return (
    <Card>
      <CardContent className="space-y-2 pt-6">
        <p className="text-muted-foreground text-sm">{title}</p>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">{value}</h3>
          <Badge variant={trend === "up" ? "outline" : "destructive"}>
            {change}
          </Badge>
        </div>
        <p className="text-muted-foreground text-xs">{description}</p>
      </CardContent>
    </Card>
  );
}

export function NextUIDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [page, setPage] = useState(1);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

  const toggleFilterMenu = () => {
    setFilterMenuOpen(!filterMenuOpen);
  };

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
      <Card>
        <CardHeader className="flex justify-between">
          <h3 className="text-lg font-semibold">Recent Customers</h3>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input className="pl-8" placeholder="Search customers..." />
            </div>

            <div className="relative">
              <Button variant="outline" onClick={toggleFilterMenu}>
                Filter
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>

              {filterMenuOpen && (
                <div className="absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-background border z-10">
                  <div className="py-1">
                    {["All Customers", "Active", "Inactive", "Pending"].map((filter) => (
                      <button
                        key={filter}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-muted"
                        onClick={() => setFilterMenuOpen(false)}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Last Order
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Total Spent
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg" alt={customer.name} />
                          <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                          <div className="text-sm font-medium">{customer.name}</div>
                          <div className="text-sm text-muted-foreground">{customer.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <Badge
                        variant={
                          customer.status === "active"
                            ? "outline"
                            : customer.status === "inactive"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {customer.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">{customer.lastOrder}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">${customer.totalSpent.toLocaleString()}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex w-full justify-center mt-4">
            {/* Simple pagination buttons */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
              >
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Page {page} of 5
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(Math.min(5, page + 1))}
                disabled={page === 5}
              >
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Overview Content
function OverviewContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card className="lg:col-span-2">
        <CardHeader>
          <h3 className="text-lg font-semibold">Revenue Overview</h3>
        </CardHeader>
        <CardContent className="h-80">
          <ChartComponents />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Top Products</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topProducts.map((product) => (
              <div key={product.id} className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg" alt={product.name} />
                  <AvatarFallback>{product.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium">{product.name}</p>
                  <p className="text-xs text-muted-foreground">${product.price}</p>
                </div>
                <Badge variant={product.status === "Active" ? "outline" : "secondary"}>
                  {product.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" size="sm" className="mx-auto">
            View All Products
          </Button>
        </CardFooter>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <h3 className="text-lg font-semibold">Recent Activity</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Sales Goals</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <p className="text-sm">Monthly Target</p>
                <p className="text-sm font-medium">75%</p>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <p className="text-sm">Quarterly Target</p>
                <p className="text-sm font-medium">50%</p>
              </div>
              <Progress value={50} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <p className="text-sm">Annual Target</p>
                <p className="text-sm font-medium">35%</p>
              </div>
              <Progress value={35} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Analytics Content
function AnalyticsContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Traffic Sources</h3>
        </CardHeader>
        <CardContent className="h-80">
          <div className="h-full flex items-center justify-center">
            <p className="text-muted-foreground">Traffic sources chart will appear here</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">User Demographics</h3>
        </CardHeader>
        <CardContent className="h-80">
          <div className="h-full flex items-center justify-center">
            <p className="text-muted-foreground">User demographics chart will appear here</p>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <h3 className="text-lg font-semibold">Performance Metrics</h3>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-muted-foreground text-sm">Page Views</p>
              <h3 className="text-2xl font-bold mt-1">24,562</h3>
              <Badge variant="outline" className="mt-2">
                +12.5%
              </Badge>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-muted-foreground text-sm">Bounce Rate</p>
              <h3 className="text-2xl font-bold mt-1">42.3%</h3>
              <Badge variant="destructive" className="mt-2">
                +3.7%
              </Badge>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-muted-foreground text-sm">Avg. Session</p>
              <h3 className="text-2xl font-bold mt-1">3m 42s</h3>
              <Badge variant="outline" className="mt-2">
                +0.8%
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Reports Content
function ReportsContent() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Available Reports</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {reports.map((report) => (
              <div
                key={report.id}
                className="p-3 border rounded-lg hover:bg-muted transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{report.title}</p>
                      <p className="text-xs text-muted-foreground">{report.description}</p>
                    </div>
                  </div>
                  <Badge>{report.type}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="mx-auto">Generate New Report</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

// Notifications Content
function NotificationsContent() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex justify-between">
          <h3 className="text-lg font-semibold">Recent Notifications</h3>
          <Button variant="ghost" size="sm">
            Mark all as read
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  notification.unread ? "bg-primary/10" : "bg-muted"
                }`}
              >
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{notification.type.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className={`text-sm ${notification.unread ? "font-medium" : ""}`}>
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                  </div>
                  {notification.unread && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button size="sm" variant="ghost">
                            <Check className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Mark as read</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="mx-auto">
            View All Notifications
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

// Sample Data
const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "active",
    lastOrder: "2023-05-15",
    totalSpent: 1250.99,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    status: "active",
    lastOrder: "2023-05-12",
    totalSpent: 876.5,
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert@example.com",
    status: "inactive",
    lastOrder: "2023-04-28",
    totalSpent: 432.25,
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    status: "pending",
    lastOrder: "2023-05-18",
    totalSpent: 0,
  },
  {
    id: 5,
    name: "Michael Wilson",
    email: "michael@example.com",
    status: "active",
    lastOrder: "2023-05-10",
    totalSpent: 1875.75,
  },
];

const topProducts = [
  {
    id: 1,
    name: "Crypter - NFT UI Kit",
    price: "3,250.00",
    status: "Active",
  },
  {
    id: 2,
    name: "Bento Pro 2.0 Illustrations",
    price: "7,890.00",
    status: "Active",
  },
  {
    id: 3,
    name: "Fleet - travel shopping kit",
    price: "1,500.00",
    status: "Inactive",
  },
  {
    id: 4,
    name: "SimpleSocial UI Design Kit",
    price: "9,999.00",
    status: "Active",
  },
];

const activities = [
  {
    user: "John Doe",
    action: "placed a new order for $1,250.99",
    time: "Just now",
    type: "order",
  },
  {
    user: "Jane Smith",
    action: "left a comment on your product",
    time: "1 hour ago",
    type: "comment",
  },
  {
    user: "Robert Johnson",
    action: "registered as a new user",
    time: "3 hours ago",
    type: "user",
  },
  {
    user: "Emily Davis",
    action: "requested a refund",
    time: "5 hours ago",
    type: "order",
  },
];

const reports = [
  {
    id: 1,
    title: "Monthly Sales Report",
    description: "Complete sales data and trends for the current month",
    type: "Sales",
  },
  {
    id: 2,
    title: "Customer Activity Report",
    description: "User activity and engagement analysis",
    type: "Analytics",
  },
  {
    id: 3,
    title: "Product Performance Report",
    description: "Product performance and sales statistics",
    type: "Products",
  },
  {
    id: 4,
    title: "Financial Summary",
    description: "Revenue, expenses, and profit overview",
    type: "Finance",
  },
];

const notifications = [
  {
    type: "order",
    message: "Your order #12345 has been shipped",
    time: "Just now",
    unread: true,
  },
  {
    type: "user",
    message: "Joyce left a comment on your product",
    time: "1 hour ago",
    unread: true,
  },
  {
    type: "payment",
    message: "You received a payment of $1,299.00",
    time: "3 hours ago",
    unread: false,
  },
  {
    type: "system",
    message: "System maintenance scheduled for tonight",
    time: "1 day ago",
    unread: false,
  },
];
