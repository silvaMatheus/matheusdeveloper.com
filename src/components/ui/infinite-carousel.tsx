'use client';
import { InfiniteCarouselProps } from '@/types/Components/Carousel.types';
import { useEffect, useRef } from 'react';

export default function InfiniteCarousel({
    items,
    direction = 'left',
    speed = 'fast',
    pauseOnHover = true,
    className,
}: InfiniteCarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollerRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === 'left') {
                containerRef.current.style.setProperty('--animation-direction', 'forwards');
            } else {
                containerRef.current.style.setProperty('--animation-direction', 'reverse');
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === 'fast') {
                containerRef.current.style.setProperty('--animation-duration', '20s');
            } else if (speed === 'normal') {
                containerRef.current.style.setProperty('--animation-duration', '40s');
            } else {
                containerRef.current.style.setProperty('--animation-duration', '80s');
            }
        }
    };

    return (
        <div ref={containerRef}>
            <ul
                ref={scrollerRef}
                className={`flex h-full w-max shrink-0 animate-scroll flex-nowrap gap-8 overflow-hidden  hover:[animation-play-state:paused]`}
            >
                {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
