import { memo } from "react";
import { Card } from "@/components/ui/Card";
import { getIcon } from "@/lib/icons";
import { WhyChooseUsFeature } from "@/types";

interface FeatureCardProps {
  feature: WhyChooseUsFeature;
}

function FeatureCardComponent({ feature }: FeatureCardProps) {
  const Icon = getIcon(feature.icon);

  return (
    <Card className="h-full">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
        {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
      </span>
      <h3 className="mt-5 font-display text-lg text-foreground">{feature.title}</h3>
      <p className="mt-2 text-sm text-muted">{feature.description}</p>
    </Card>
  );
}

export const FeatureCard = memo(FeatureCardComponent);
