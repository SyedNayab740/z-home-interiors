export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -32 },
  visible: { opacity: 1, y: 0 },
};

export const slideLeft = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0 },
};

export const slideRight = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer = {
  hidden: {},
  visible: {},
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const hoverLift = {
  rest: { y: 0 },
  hover: { y: -6 },
};

export const hoverScale = {
  rest: { scale: 1 },
  hover: { scale: 1.03 },
};

export const overlayReveal = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
};

export const pageTransition = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export const scrollRevealViewport = {
  once: true,
  margin: "-80px",
} as const;
