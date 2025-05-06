
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from "recharts";
import Overview from "@/components/dashboard/Overview";

// Chart Component
const ChartComponent: React.FC = () => {
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
};

const OverviewContent: React.FC = () => {
  // Top products data
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

  // Comments data
  const comments = [
    {
      id: '1',
      user: {
        name: 'Alice Cooper',
        avatar: '/placeholder.svg',
      },
      content: 'Just bought the new product! Amazing quality and fast shipping.',
      time: '5m ago'
    },
    {
      id: '2',
      user: {
        name: 'Bob Johnson',
        avatar: '/placeholder.svg',
      },
      content: 'Customer service was very helpful. Would recommend!',
      time: '10m ago'
    },
    {
      id: '3',
      user: {
        name: 'Emma Smith',
        avatar: '/placeholder.svg',
      },
      content: 'Love the new dashboard update! So much easier to use now.',
      time: '25m ago'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Metrics Cards with Toggle */}
      <Card className="border rounded-lg shadow-sm overflow-hidden">
        <h2 className="text-lg font-medium p-5 border-b">Overview</h2>
        <Overview />
      </Card>

      {/* Revenue and Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader>
            <h3 className="text-lg font-semibold">Revenue Overview</h3>
          </CardHeader>
          <CardContent className="h-80">
            <ChartComponent />
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

        {/* Comments Section */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Recent Comments</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-3 p-2 hover:bg-muted/50 rounded-md transition-colors">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                      <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-sm">{comment.user.name}</h3>
                        <span className="text-xs text-muted-foreground">{comment.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

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
    </div>
  );
};

export default OverviewContent;
