export const fade = () => {
  return {
    hidden: {
      opacity: 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: 0.1,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.0,
        delay: 0.1,
        ease: [0.45, 0.25, 0.25, 0.75],
      },
    },
  };
};
