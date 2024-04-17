import { ReactNode } from 'react';

type Frame = {
    src: string;
    className?: string;
    size: { h: string; w: string };
    principalColor?: string;
    enableGrayScale?: boolean;
};

interface CircleProps {
    children: ReactNode;
}

interface IconProps {
    isRound?: boolean;
    socialName: string;
    width?: number;
    height?: number;
}

export type { CircleProps, Frame, IconProps };
