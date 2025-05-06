
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Check } from "lucide-react";

interface Notification {
  type: string;
  message: string;
  time: string;
  unread: boolean;
}

const NotificationsContent: React.FC = () => {
  const notifications: Notification[] = [
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
};

export default NotificationsContent;
