
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const AnalyticsContent: React.FC = () => {
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
};

export default AnalyticsContent;
