import { cn } from "@/lib/utils";
import type React from "react";

interface StyledIconProps {
  children: React.ReactNode;
  className?: string;
}

export function StyledIcon({ children, className }: StyledIconProps) {
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gradient-start/70 to-gradient-mid/70 text-white opacity-80",
        className
      )}
    >
      {children}
    </div>
  );
}
