import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

export default function MyLife() {
    return (
        <div className="h-full w-full bg-blue-300">
            <Carousel className="h-full w-full bg-yellow-500">
                <CarouselContent className="bg-green h-full">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem className="h-full w-full" key={index}>
                            <div className="h-full w-full bg-green-500 font-semibold">
                                {index + 1}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>
        </div>
    );
}
