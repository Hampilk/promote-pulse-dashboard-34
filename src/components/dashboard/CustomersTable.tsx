
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Search, ChevronDown } from "lucide-react";

interface Customer {
  id: number;
  name: string;
  email: string;
  status: string;
  lastOrder: string;
  totalSpent: number;
}

const CustomersTable: React.FC = () => {
  const [page, setPage] = useState(1);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

  const toggleFilterMenu = () => {
    setFilterMenuOpen(!filterMenuOpen);
  };

  const customers: Customer[] = [
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

  return (
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
  );
};

export default CustomersTable;
