"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CardHover } from "../Cards";

export default function ProjectsCarousel() {
  return (
    <div className="h-full w-full">
      <div className="mb-5 flex items-center justify-start gap-5 px-5">
        <div className="text-xl font-bold text-white md:block">
          Projetos selecionados
        </div>
      </div>

      <Carousel className="min-h-full w-auto">
        <CarouselContent>
          <CarouselItem className="basis-4/5 md:basis-1/2 lg:basis-1/3">
            <CardHover img={"/assets/illustrations/inProgress.png"} />
          </CarouselItem>

          <CarouselItem className="basis-4/5 md:basis-1/2 lg:basis-1/3">
            <CardHover img={"/assets/illustrations/inProgress.png"} />
          </CarouselItem>

          <CarouselItem className="basis-4/5  md:basis-1/2 lg:basis-1/3">
            <CardHover img={"/assets/illustrations/inProgress.png"} />
          </CarouselItem>

          <CarouselItem className=" basis-4/5  md:basis-1/2 lg:basis-1/3">
            <CardHover img={"/assets/illustrations/inProgress.png"} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
