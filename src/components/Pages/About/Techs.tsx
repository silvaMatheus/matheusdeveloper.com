import { SquareIcon } from "@/components/Common/Icons";
import InfiniteCarousel from "@/components/ui/infinite-carousel";
import { Techs } from "@/data/about";
import { TechsProps } from "@/types/Techs.types";

interface TechsCarouselProps {
  size: {
    h: string;
    w: string;
  };
  lines: number;
}

export default function TechsCarousel({ size, lines }: TechsCarouselProps) {
  const divideArrayIntoLines = (array: TechsProps[]) => {
    const chunkSize = Math.ceil(array.length / lines);
    const dividedArray: TechsProps[][] = [];

    for (let i = 0; i < array.length; i += chunkSize) {
      dividedArray.push(array.slice(i, i + chunkSize));
    }

    return dividedArray;
  };

  const techsDividedIntoLines = divideArrayIntoLines(Techs);

  const defaultStyle = "bg-gradient-to-b from-zinc-900 to-transparent";

  return (
    <div className="flex max-w-full  z-44 flex-col gap-5 overflow-hidden">
      {techsDividedIntoLines.map((line, index) => (
        <div key={index}>
          <InfiniteCarousel
            items={line.map((item) => {
              const className = `${defaultStyle} hover:to-techs-${item.techName} hover:neon-${item.techName}`;
              return (
                <SquareIcon
                  className={className}
                  enableGrayScale
                  size={size}
                  principalColor={item.techName}
                  src={`/assets/icons/techs/${item.iconName}`}
                  key={item.techName}
                />
              );
            })}
            direction={index % 2 === 0 ? "left" : "right"} // Alternar direção do carrossel
            speed="slow"
          />
        </div>
      ))}
    </div>
  );
}
