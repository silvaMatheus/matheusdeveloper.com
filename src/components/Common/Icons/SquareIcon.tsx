'use client';
import { Frame } from '@/types/Components/Icons.types';
import Image from 'next/image';

export default function SquareIcon({
    src,
    principalColor,
    className,
    enableGrayScale,
    size,
}: Frame) {
    return (
        <>
            <div
                className={`
                        ${className}
                        group/container   
                        flex
                        ${size.h}
                        ${size.w}
                        items-center
                        justify-center 
                        rounded-xl  
                        p-3
                    `}
            >
                <div
                    className={`relative flex h-full
                    w-full flex-col items-start justify-start
                     ${enableGrayScale ? 'grayscale group-hover/container:grayscale-0' : ''}`}
                >
                    <Image src={src} alt="src" fill />
                </div>
            </div>
        </>
    );
}
