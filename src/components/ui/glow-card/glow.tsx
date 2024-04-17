'use client';
import { ReactNode, useEffect } from 'react';
import './style.css';

export default function GlowingArticles({ children }: { children: ReactNode }) {
    useEffect(() => {
        const updateCSSVars = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;
            document.documentElement.style.setProperty('--x', `${x}`);
            document.documentElement.style.setProperty('--y', `${y}`);
        };

        window.addEventListener('mousemove', updateCSSVars);

        return () => {
            window.removeEventListener('mousemove', updateCSSVars);
        };
    }, []);

    return (
        <main className="z-20 h-full w-full rounded-[14px] border border-[#222229]">
            <div className="h-full w-full rounded-[14px]" data-glow>
                <div data-glow></div>
                {children}
            </div>
        </main>
    );
}
