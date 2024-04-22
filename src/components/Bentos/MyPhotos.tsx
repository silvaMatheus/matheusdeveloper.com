"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export default function MyPhotos() {
  const images = ["Cyber", "LoveFood", "MyRoom"];
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, loop: true })
  );
  return (
    <div className="h-56 w-full sm:h-full sm:p-0">
      <div
        className="flex h-full w-full flex-col rounded-xl border border-[#222229]  bg-[#171717]
     "
      >
        <Carousel
          plugins={[plugin.current]}
          className="h-full w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="h-full w-full">
            {images.map((name, index) => (
              <CarouselItem key={index} className="w-full">
                <div className="relative inline-block h-full w-full">
                  <div className="relative h-full w-full">
                    <Image
                      src={`/assets/photos/${name}.jpg`}
                      alt={name}
                      fill={true}
                      className="rounded-2xl"
                      quality={100}
                      priority
                      loading="eager"
                      unoptimized={true}
                      placeholder="blur"
                      blurDataURL="d"
                      style={{
                        objectFit: "cover",
                        // width: "100%",
                        // height: "auto",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
