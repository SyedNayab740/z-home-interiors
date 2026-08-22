"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Hook up to an error-reporting service here (e.g. Sentry) in production.
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="font-display text-3xl text-foreground md:text-4xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-muted">
        We hit an unexpected error loading this page. Please try again, and
        contact us if the problem persists.
      </p>
      <Button className="mt-8" onClick={reset}>
        Try Again
      </Button>
    </Container>
  );
}
