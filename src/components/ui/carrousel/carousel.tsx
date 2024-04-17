"use client";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { ReactNode } from "react";
import { DotButton, useDotButton } from "./carouselDotButton";

type PropType = {
  slides: ReactNode[];
  options?: EmblaOptionsType;
  dotButton?: boolean;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, dotButton } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

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

      {dotButton && (
        <div className="mt-5 flex w-full items-center justify-center ">
          <div className="w-8/12 rounded-md bg-[#1f1f1f]">
            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={"embla__dot".concat(
                    index === selectedIndex ? " embla__dot--selected" : ""
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EmblaCarousel;
