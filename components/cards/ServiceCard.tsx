import Link from "next/link";
import { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import { ImageWrapper } from "@/components/ui/ImageWrapper";
import { getIcon } from "@/lib/icons";
import { Service } from "@/types";
import { routes } from "@/config/site";

interface ServiceCardProps {
  service: Service;
}

function ServiceCardComponent({ service }: ServiceCardProps) {
  const Icon = getIcon(service.icon);

  return (
    <div>
      <Link
        href={`${routes.services}/${service.slug}`}
        className="group block overflow-hidden rounded-lg border border-gold/10 surface-gradient transition-all duration-base hover:border-gold/25 hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <ImageWrapper
            image={service.heroImage}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-slow group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent opacity-70" aria-hidden="true" />
          {Icon && (
            <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/70 text-gold backdrop-blur-glass">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-xl text-foreground">{service.title}</h3>
            <ArrowUpRight
              className="mt-1 h-5 w-5 shrink-0 text-gold transition-transform duration-base group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </div>
          <p className="mt-2 text-sm text-muted">{service.shortDescription}</p>
        </div>
      </Link>
    </div>
  );
}

export const ServiceCard = memo(ServiceCardComponent);
