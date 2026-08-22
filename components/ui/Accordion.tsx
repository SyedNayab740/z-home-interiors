"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/types";
import { cn } from "@/lib/utils";

interface AccordionProps {
  items: FAQItem[];
  className?: string;
}

/** Single-open accordion for FAQ content — semantic buttons, aria-expanded, smooth height animation. */
export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-gold/10 border-y border-gold/10", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `${baseId}-${item.id}-trigger`;
        const panelId = `${baseId}-${item.id}-panel`;

        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <span className="font-display text-lg text-foreground md:text-xl">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-gold transition-transform duration-base",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-10 text-muted">{item.answer}</p>
                </div>
              )}
          </div>
        );
      })}
    </div>
  );
}
