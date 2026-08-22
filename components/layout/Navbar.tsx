"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useIsScrolled } from "@/hooks/useIsScrolled";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { primaryNav } from "@/data/navigation";
import { company } from "@/data/company";
import { routes } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useIsScrolled(40);
  const pathname = usePathname();

  useLockBodyScroll(isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-base",
        isScrolled || isMenuOpen ? "glass shadow-soft" : "bg-transparent",
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to main content
      </a>

      <nav
        aria-label="Primary"
        className="container-default flex h-[88px] items-center justify-between"
      >
        <Link
          href={routes.home}
          onClick={closeMenu}
          aria-label={company.name}
          className="flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          <Image
            src="/images/z-home-interiors-logo.png"
            alt={company.name}
            width={205}
            height={42}
            priority
            className="h-auto w-[170px] sm:w-[190px]"
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative font-body text-sm uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold after:absolute after:-bottom-3 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-base",
                    isActive
                      ? "text-gold after:w-full"
                      : "text-foreground/80 after:w-0 hover:text-gold hover:after:w-full",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Button asChild size="sm" className="hidden lg:inline-flex">
          <Link href={routes.contact}>Book a Consultation</Link>
        </Button>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="relative z-[110] flex h-10 w-10 items-center justify-center text-foreground lg:hidden"
        >
          <span className="transition-transform duration-200" aria-hidden="true">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </span>
        </button>
      </nav>

      {isMenuOpen && (
          <div
            id="mobile-menu"
            className="overflow-hidden border-t border-gold/10 bg-background/98 lg:hidden animate-mobile-menu"
          >
            <ul className="container-default flex flex-col gap-1 py-6">
              {primaryNav.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "block rounded px-3 py-3 font-display text-2xl transition-colors hover:text-gold",
                      pathname === link.href ? "bg-surface/70 text-gold" : "text-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Button asChild size="lg" className="w-full">
                  <Link href={routes.contact} onClick={closeMenu}>
                    Book a Consultation
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        )}
    </header>
  );
}
