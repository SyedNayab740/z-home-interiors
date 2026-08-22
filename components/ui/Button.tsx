import { ButtonHTMLAttributes, ReactElement, cloneElement, forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** When true, renders its single child element instead of a <button>, merging props/classes onto it (e.g. for wrapping a Next <Link>). */
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-surface border border-gold text-foreground hover:bg-gold hover:text-background hover:border-gold",
  outline: "border border-gold/40 text-foreground hover:border-gold hover:bg-gold/5",
  ghost: "text-foreground hover:bg-white/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 rounded font-body font-medium",
      "transition-all duration-base ease-out hover:-translate-y-0.5 hover:shadow-gold active:translate-y-0",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
      "disabled:pointer-events-none disabled:opacity-50",
      variantStyles[variant],
      sizeStyles[size],
      className,
    );

    if (asChild && children) {
      const child = children as ReactElement<{ className?: string }>;
      return cloneElement(child, {
        className: cn(classes, child.props.className),
      });
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
