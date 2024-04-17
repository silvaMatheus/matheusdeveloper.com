import { CardHover } from "@/components/Common/Cards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";

export default function ProjectsSelected() {
  const t = useTranslations("ProjectsSelected");

  return (
    <div className="ov h-full w-full">
      <div className="mb-5 flex items-center justify-start gap-5 px-5">
        <div className="text-xl font-bold text-white md:block">
          {t("title")}
        </div>
      </div>

      <Carousel className="min-h-full w-auto">
        <CarouselContent>
          <CarouselItem className="basis-4/5 md:basis-1/2 lg:basis-1/3">
            <CardHover img={"/assets/projects/projeto3.png"} />
          </CarouselItem>
          <CarouselItem className="basis-4/5 md:basis-1/2 lg:basis-1/3">
            <CardHover img={"/assets/projects/projeto3.png"} />
          </CarouselItem>
          <CarouselItem className=" basis-4/5  md:basis-1/2 lg:basis-1/3">
            <CardHover img={"/assets/projects/projeto3.png"} />
          </CarouselItem>
          <CarouselItem className=" basis-4/5  md:basis-1/2 lg:basis-1/3">
            <CardHover img={"/assets/projects/projeto3.png"} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
