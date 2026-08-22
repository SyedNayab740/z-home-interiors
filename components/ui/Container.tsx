import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  narrow?: boolean;
}

export function Container({ className, narrow, ...props }: ContainerProps) {
  return (
    <div
      className={cn(narrow ? "container-narrow" : "container-default", className)}
      {...props}
    />
  );
}
