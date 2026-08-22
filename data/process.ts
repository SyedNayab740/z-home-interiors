import { TimelineEntry } from "@/types";

// Powers the "Our Process" section on the homepage via the shared Timeline component.
export const processSteps: TimelineEntry[] = [
  {
    id: "step-01",
    label: "01",
    title: "Consultation",
    description:
      "We start with an in-depth conversation about your lifestyle, taste, and goals for the space.",
  },
  {
    id: "step-02",
    label: "02",
    title: "Site Visit",
    description:
      "Our team visits your property to measure, assess conditions, and understand the natural light and flow.",
  },
  {
    id: "step-03",
    label: "03",
    title: "3D Design",
    description:
      "We develop detailed 3D renderings so you can see and approve your space before any work begins.",
  },
  {
    id: "step-04",
    label: "04",
    title: "Material Selection",
    description:
      "Every finish, fabric, and fixture is curated together with you, balancing craftsmanship and durability.",
  },
  {
    id: "step-05",
    label: "05",
    title: "Execution",
    description:
      "Our project managers coordinate every trade on site, keeping quality and timeline tightly controlled.",
  },
  {
    id: "step-06",
    label: "06",
    title: "Final Handover",
    description:
      "A final walkthrough and styling pass ensures every last detail is exactly as designed before you move in.",
  },
];
