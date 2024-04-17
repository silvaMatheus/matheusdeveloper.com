"use client";
import { Techs } from "@/data/about";
import { useEffect, useState } from "react";
import TechsCarousel from "../../Pages/About/Techs";
interface Tech {
  iconName: string;
  principalColor: string;
  techName: string;
}
export default function StackCarousel() {
  const [visibleTechs, setVisibleTechs] = useState<Tech[]>([]);

  useEffect(() => {
    setVisibleTechs(shuffleArray(Techs).slice(0, 10));

    const intervalId = setInterval(() => {
      setVisibleTechs((currentVisibleTechs) => {
        let newVisibleTechs = [...currentVisibleTechs];
        const techsToReplaceCount = Math.floor(Math.random() * 3) + 1;

        for (let i = 0; i < techsToReplaceCount; i++) {
          const indexToReplace = Math.floor(
            Math.random() * newVisibleTechs.length
          );
          const remainingTechs = Techs.filter(
            (tech) => !newVisibleTechs.includes(tech)
          );
          const newTech = shuffleArray(remainingTechs)[0];

          if (newTech) {
            newVisibleTechs[indexToReplace] = newTech;
          }
        }

        return newVisibleTechs;
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute flex w-full items-center justify-center  sm:h-3/6 ">
      <TechsCarousel
        size={{
          h: "h-14",
          w: "w-14",
        }}
        lines={2}
      />
    </div>
  );
}

const shuffleArray = <T,>(array: T[]): T[] => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};
