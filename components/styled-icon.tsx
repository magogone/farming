import { cn } from "@/lib/utils"
import type React from "react"

interface StyledIconProps {
  children: React.ReactNode
  className?: string
}

export function StyledIcon({ children, className }: StyledIconProps) {
  return (
    <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl bg-icon-bg text-icon-fg", className)}>
      {children}
    </div>
  )
}
