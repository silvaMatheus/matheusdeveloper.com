import { ReactNode } from 'react';
import { CardsProps } from './Cards.type';

interface ShowcaseCarouselProps {
    cardStyle: CardsProps;
    title?: string;
    link?: {
        title: string;
        icon?: string;
        href: string;
    };
    children: ReactNode;
}

interface InfiniteCarouselProps {
    items: React.ReactNode[];
    direction?: 'left' | 'right';
    speed?: 'fast' | 'normal' | 'slow';
    pauseOnHover?: boolean;
    className?: string;
}

export type { InfiniteCarouselProps, ShowcaseCarouselProps };
