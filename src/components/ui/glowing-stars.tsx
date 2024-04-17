"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Cobe from "./cobe/cobe";
import { Meteors } from "./meteors";

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className="h-full w-full overflow-hidden rounded-xl    
           "
    >
      <div className={cn("h-full w-full", className)}>
        <div className="relative flex h-full w-full flex-col  items-center justify-center   sm:relative ">
          {children}

          <div className="absolute h-full w-full   sm:absolute">
            <Meteors number={60} />
          </div>

          <div className="z-9 absolute h-full w-full  sm:absolute">
            <Illustration />
          </div>

          <div className="absolute z-10 h-full w-full  sm:absolute">
            <Cobe />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Illustration = () => {
  const stars = 108;

  const [glowingStars, setGlowingStars] = useState<number[]>([]);
  const [starPositions, setStarPositions] = useState<
    { x: number; y: number }[]
  >([]);

  useEffect(() => {
    const positions = Array.from({ length: stars }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setStarPositions(positions);

    const interval = setInterval(() => {
      const highlightedStars = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * stars)
      );
      setGlowingStars([...highlightedStars]);
    }, 3000);

    return () => clearInterval(interval);
  }, [stars]);
  return (
    <div
      className="relative h-full w-full p-1"
      style={{
        display: "flex",
        flexWrap: "wrap",
        position: "relative",
      }}
    >
      {starPositions.map((position, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx);
        const delay = Math.random();

        return (
          <div
            key={`star-${starIdx}`}
            className="star absolute"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
            }}
          >
            <Star isGlowing={isGlowing} delay={delay} />
            {isGlowing && <Glow delay={delay} />}
          </div>
        );
      })}
    </div>
  );
};

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
  return (
    <motion.div
      key={delay}
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
        background: isGlowing ? "#fff" : "#666",
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      className={cn("relative   h-[1px] w-[1px] rounded-full bg-[#666]")}
    ></motion.div>
  );
};

const Glow = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      exit={{
        opacity: 0,
      }}
      className="absolute  left-1/2   h-[4px] w-[4px] -translate-x-1/2 rounded-full bg-white shadow-2xl  blur-[1px]"
    />
  );
};
