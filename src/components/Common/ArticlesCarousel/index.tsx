import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { CardHover } from '../Cards';

export default function ArticlesCarousel() {
    return (
        <>
            <div className="text-xl font-bold text-white">Artigos selecionados</div>

            <Carousel opts={{ align: 'start' }} className="w-full">
                <CarouselContent>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CarouselItem key={index} className="w-full md:basis-1/2 lg:basis-1/3">
                            <CardHover img={'/assets/projects/projeto3.png'} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    );
}
