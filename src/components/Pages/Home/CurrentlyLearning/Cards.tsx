"use client";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { AnimatePresence } from "framer-motion";
import IconCurrentLearning from "./Icon";

export default function Cards({
  title,
  description,
  icon,
  color,
  children,
}: {
  title: string;
  color: number[][];
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="group/canvas-card  relative flex h-3/6 w-6/12   items-center justify-center    p-4">
      <IconCurrentLearning className="absolute -left-3 -top-3 h-6 w-6  text-white" />
      <IconCurrentLearning className="absolute -bottom-3 -left-3 h-6 w-6  text-white" />
      <IconCurrentLearning className="absolute -right-3 -top-3 h-6 w-6  text-white" />
      <IconCurrentLearning className="absolute -bottom-3 -right-3 h-6 w-6  text-white" />
      <AnimatePresence>
        <div className="absolute inset-0 h-full w-full">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={color}
            dotSize={2}
          />
        </div>
      </AnimatePresence>
      <div className="relative z-20">
        <div className="mx-auto flex w-full items-center justify-center text-center  transition duration-200 group-hover/canvas-card:-translate-y-4 ">
          {icon}
        </div>
        <h1 className="relative z-10 mt-4 text-sm font-bold   text-white opacity-0  transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white  group-hover/canvas-card:opacity-100">
          {title}
        </h1>
      </div>
    </div>
  );
}
