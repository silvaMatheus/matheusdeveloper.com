"use client";
import { Variants, motion } from "framer-motion";

export default function HeroAnimationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const heroVariants: Variants = {
    hidden: { y: "80%", opacity: 0 },
    visible: {
      y: "40%",
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 3.5,
      },
    },
  };

  return (
    <motion.div
      className="absolute top-1/2 flex w-full flex-col items-center justify-center gap-5"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      {children}
    </motion.div>
  );
}
