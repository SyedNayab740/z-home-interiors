import { ReactNode } from "react";

/**
 * Kept as a stable wrapper so the root layout API does not change.
 * Route-transition animation was removed from the global layout because it
 * forced a large client-side animation runtime onto every page.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
