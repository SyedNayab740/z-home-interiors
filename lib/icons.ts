import {
  Gem,
  Users,
  Sparkles,
  ShieldCheck,
  Clock,
  Gauge,
  HeartHandshake,
  Compass,
  PenTool,
  Layers,
  Target,
  ChefHat,
  Shirt,
  BedDouble,
  Sofa,
  PanelTop,
  Tv,
  Briefcase,
  Hammer,
  Cuboid,
  type LucideIcon,
} from "lucide-react";

/**
 * Central icon registry, keyed by the string identifiers stored in data
 * files (e.g. service.icon, WhyChooseUsFeature.icon). Any component that
 * renders an icon from a data-driven string should look it up here instead
 * of declaring its own local map.
 */
export const iconRegistry: Record<string, LucideIcon> = {
  gem: Gem,
  users: Users,
  sparkles: Sparkles,
  "shield-check": ShieldCheck,
  clock: Clock,
  gauge: Gauge,
  "heart-handshake": HeartHandshake,
  compass: Compass,
  "pen-tool": PenTool,
  layers: Layers,
  target: Target,
  "chef-hat": ChefHat,
  shirt: Shirt,
  "bed-double": BedDouble,
  sofa: Sofa,
  "panel-top": PanelTop,
  tv: Tv,
  briefcase: Briefcase,
  hammer: Hammer,
  cuboid: Cuboid,
};

export function getIcon(key: string): LucideIcon | undefined {
  return iconRegistry[key];
}
