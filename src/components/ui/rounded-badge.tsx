
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const roundedBadgeVariants = cva(
  "inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "text-foreground border border-input",
        success: "bg-green-500/10 text-green-600 dark:bg-green-900/30 dark:text-green-400",
        warning: "bg-yellow-500/10 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
        danger: "bg-red-500/10 text-red-600 dark:bg-red-900/30 dark:text-red-400",
        info: "bg-blue-500/10 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface RoundedBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof roundedBadgeVariants> {}

function RoundedBadge({ className, variant, ...props }: RoundedBadgeProps) {
  return (
    <div className={cn(roundedBadgeVariants({ variant }), className)} {...props} />
  );
}

export { RoundedBadge, roundedBadgeVariants };
