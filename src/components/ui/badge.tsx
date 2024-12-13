import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Status, TaskType } from "@/config/types"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        [Status.ToDo]: "border-transparent bg-gray-200 text-gray-700",
        [Status.InProgress]: "border-transparent bg-amber-500 text-gray-700",
        [Status.Approved]: "border-transparent bg-lime-400 text-gray-700",
        [Status.Reject]: "border-transparent bg-red-500 text-white",
        [TaskType.Research]: "border-transparent bg-lime-400",
        [TaskType.Design]: "border-transparent bg-red-500",
        [TaskType.Feedback]: "border-transparent bg-blue-500",
        [TaskType.Interface]: "border-transparent bg-black",
        [TaskType.UXResearch]: "border-transparent bg-amber-500",
        [TaskType.Other]: "border-transparent bg-gray-200"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
