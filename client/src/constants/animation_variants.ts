export const animateTyphograpyVariants = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
};

export const animateTyphograpyLeft = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
};

export const verticalAnimate = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
}

export const viewPort = {
  once: true,
  amount: 0.2,
};

export const transition = {
  duration: 0.3,
  delay: 0.5,
  ease: "linear",
};

export const transitionWithoutDelay = {
  duration: 0.3,
  ease: "linear",
};
