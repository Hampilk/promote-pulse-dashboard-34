
import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { RoundedBadge } from "@/components/ui/rounded-badge";

const ProductsDrafts: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-h2">Product Drafts</h2>
          <RoundedBadge variant="info">2 Drafts</RoundedBadge>
        </div>
        
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <p className="text-muted-foreground">
            This is the product drafts page. Your draft products will appear here.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProductsDrafts;
