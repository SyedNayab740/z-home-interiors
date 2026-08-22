import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <span className="font-display text-gold text-sm uppercase tracking-[0.3em]">
        404
      </span>
      <h1 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </Container>
  );
}
