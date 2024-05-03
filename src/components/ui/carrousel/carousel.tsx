"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { ReactNode } from "react";

type PropType = {
  slides: ReactNode[];
  dotButton?: boolean;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, dotButton } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true },
    [Autoplay()]
  );

  return (
    <section className="embla flex h-full w-full flex-col gap-5">
      <div className="embla__viewport h-full w-full" ref={emblaRef}>
        <div className="embla__container h-full w-full">
          {slides.map((item, index) => (
            <div
              className="embla__slide flex h-full w-full min-w-0"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
