import { cn } from "@/lib/utils";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

const sizeMap = {
  sm: "h-5 w-5 border-2",
  md: "h-9 w-9 border-2",
  lg: "h-14 w-14 border-[3px]",
};

/** Accessible loading spinner using the gold accent. */
export function Loader({ size = "md", className, label = "Loading" }: LoaderProps) {
  return (
    <div role="status" className={cn("inline-flex items-center justify-center", className)}>
      <span
        className={cn(
          "animate-spin rounded-full border-gold/20 border-t-gold",
          sizeMap[size],
        )}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}
