"use client";
import Illustration from "@/components/Common/SVGs/Illustration";
import { Variants, motion } from "framer-motion";
import { useEffect } from "react";

const illustrationVariants: Variants = {
  initial: { y: "0%", opacity: 1 },
  animate: {
    y: "-30%",
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: 3,
    },
  },
};

const TechStackAnimation: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      document.body.style.overflow = "visible";
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <motion.div
      className="absolute top-1/4 flex w-full items-center justify-center"
      initial="initial"
      animate="animate"
      variants={illustrationVariants}
    >
      <Illustration />
    </motion.div>
  );
};

export default TechStackAnimation;
