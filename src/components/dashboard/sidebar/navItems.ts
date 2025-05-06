
import { Grid, Home, Package, ShoppingBag, Users, FileText, Calendar } from "lucide-react";
import React from "react";

export interface NavItemType {
  icon: React.ReactNode;
  label: string;
  path: string;
  badge?: number | string;
  badgeVariant?: "destructive" | "default" | "outline";
  subItems?: Array<{
    label: string;
    path: string;
    badge?: number | string;
    badgeVariant?: "destructive" | "default" | "outline";
  }>;
}

export const navItems: NavItemType[] = [
  {
    icon: <Home size={18} />,
    label: "Home",
    path: "/",
  },
  {
    icon: <Grid size={18} />,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <Package size={18} />,
    label: "Products",
    path: "/products",
    subItems: [
      { label: "Overview", path: "/products/overview" },
      { label: "Drafts", path: "/products/drafts", badge: 2 },
      { label: "Released", path: "/products/released" },
      { label: "Comments", path: "/products/comments" },
      { label: "Scheduled", path: "/products/scheduled", badge: 8, badgeVariant: "outline" },
    ]
  },
  {
    icon: <Users size={18} />,
    label: "Customers",
    path: "/customers",
    subItems: [
      { label: "Overview", path: "/customers/overview" },
      { label: "Customer List", path: "/customers/list" },
    ]
  },
  {
    icon: <ShoppingBag size={18} />,
    label: "Shop",
    path: "/shop",
  },
  {
    icon: <FileText size={18} />,
    label: "Income",
    path: "/income",
    subItems: [
      { label: "Earning", path: "/income/earning" },
      { label: "Refunds", path: "/income/refunds", badge: 3 },
      { label: "Payouts", path: "/income/payouts" },
      { label: "Statements", path: "/income/statements" },
    ]
  },
  {
    icon: <Calendar size={18} />,
    label: "Promote",
    path: "/promote",
  },
];

export const analyticsItems = [
  {
    icon: <Grid size={18} />,
    label: "Reports",
    path: "/reports",
  },
  {
    icon: <Users size={18} />,
    label: "Traffic",
    path: "/traffic",
  },
  {
    icon: <FileText size={18} />,
    label: "Conversions",
    path: "/conversions",
  },
];
