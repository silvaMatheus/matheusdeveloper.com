"use client";
import { motion } from "framer-motion";

export default function HelloHandEmoji() {
  const variants = {
    wave: {
      rotate: [0, 14, -8, 14, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  return (
    <div>
      <motion.span className="text-2xl" variants={variants} animate="wave">
        👋
      </motion.span>
    </div>
  );
}
