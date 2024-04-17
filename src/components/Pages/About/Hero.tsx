'use client';
import { useRef } from 'react';
import GridLines from '../../Common/SVGs/Grids';
import './styles/styles.css';

export default function HeroAbout() {
    const refGrid = useRef<HTMLDivElement>(null);
    const width = Number(refGrid.current?.offsetWidth) || 0;
    const height = Number(refGrid.current?.offsetHeight) || 0;
    return (
        <div className="w-full">
            <div
                ref={refGrid}
                className="mask absolute 
                    inset-0 
                    -z-10 
                    -my-32 h-full w-screen  
                    stroke-gray-200 
                   "
            >
                <GridLines size={{ w: width, h: height }} />
            </div>
            <div className="flex flex-col items-center justify-center gap-5 text-center">
                <div className="text-h3 md:text-h1 font-bold">Matheus P. Silva</div>

                <div
                    className="text-body2 text-text-2 md:text-body1 
                leading-normal"
                >
                    How to think through protecting your company’s most important assets
                </div>
            </div>
        </div>
    );
}
