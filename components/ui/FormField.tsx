import { ReactNode } from "react";

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}

/** Shared label + error wrapper for any form control (input, select, textarea). */
export function FormField({ id, label, error, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm text-muted">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

/** Shared Tailwind classes for text inputs, selects, and textareas across every form. */
export const formControlClassName =
  "w-full rounded border border-gold/20 bg-gradient-to-b from-background to-surfaceHover px-4 py-3 text-foreground placeholder:text-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";
