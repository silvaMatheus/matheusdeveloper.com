'use client';
import { cn } from '@/lib/utils';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => {
    const controls = useAnimation();

    const ref = useRef(null);
    const isInView = useInView(ref);

    let wordsArray = words.split(' ');
    useEffect(() => {
        if (isInView) {
            controls.start((i) => ({
                opacity: 1,
                transition: { delay: i * 0.2 },
            }));
        } else {
            controls.start({ opacity: 0 });
        }
    }, [controls, isInView]);
    const renderWords = () => {
        return (
            <motion.div ref={ref}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="text-[#9898A3] opacity-0"
                            custom={idx}
                            initial={{ opacity: 0 }}
                            animate={controls}
                        >
                            {word}{' '}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn('font-bold', className)}>
            <div className="w-full  text-center text-sm leading-snug tracking-wide sm:text-2xl">
                {renderWords()}
            </div>
        </div>
    );
};
