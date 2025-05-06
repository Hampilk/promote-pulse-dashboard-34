
import React from "react";
import { Grid, Home, Package, ShoppingBag, Users, FileText, Calendar } from "lucide-react";

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

// Create icons outside of the array definition
const homeIcon = <Home size={18} />;
const dashboardIcon = <Grid size={18} />;
const productsIcon = <Package size={18} />;
const customersIcon = <Users size={18} />;
const shopIcon = <ShoppingBag size={18} />;
const incomeIcon = <FileText size={18} />;
const promoteIcon = <Calendar size={18} />;

// Define the nav items
export const navItems: NavItemType[] = [
  {
    icon: homeIcon,
    label: "Home",
    path: "/",
  },
  {
    icon: dashboardIcon,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: productsIcon,
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
    icon: customersIcon,
    label: "Customers",
    path: "/customers",
    subItems: [
      { label: "Overview", path: "/customers/overview" },
      { label: "Customer List", path: "/customers/list" },
    ]
  },
  {
    icon: shopIcon,
    label: "Shop",
    path: "/shop",
  },
  {
    icon: incomeIcon,
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
    icon: promoteIcon,
    label: "Promote",
    path: "/promote",
  },
];

// Define analytics items icons
const reportsIcon = <Grid size={18} />;
const trafficIcon = <Users size={18} />;
const conversionsIcon = <FileText size={18} />;

// Define the analytics items
export const analyticsItems: NavItemType[] = [
  {
    icon: reportsIcon,
    label: "Reports",
    path: "/reports",
  },
  {
    icon: trafficIcon,
    label: "Traffic",
    path: "/traffic",
  },
  {
    icon: conversionsIcon,
    label: "Conversions",
    path: "/conversions",
  },
];
