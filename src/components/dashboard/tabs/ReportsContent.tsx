
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { FileText } from "lucide-react";

interface Report {
  id: number;
  title: string;
  description: string;
  type: string;
}

const ReportsContent: React.FC = () => {
  const reports: Report[] = [
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
};

export default ReportsContent;
