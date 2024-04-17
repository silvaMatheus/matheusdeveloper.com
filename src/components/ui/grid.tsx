'use client';
import { cn } from '@/lib/utils';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';

type CellProps = {
    rowIdx: number;
    colIdx: number;
    clickedCell: [number, number] | null;
    setClickedCell: React.Dispatch<React.SetStateAction<[number, number] | null>>;
    cellClassName?: string;
};

const Cell: React.FC<CellProps> = ({
    rowIdx,
    colIdx,
    clickedCell,
    setClickedCell,
    cellClassName,
}) => {
    const controls = useAnimation();

    useEffect(() => {
        if (clickedCell) {
            const distance = Math.sqrt(
                Math.pow(clickedCell[0] - rowIdx, 2) + Math.pow(clickedCell[1] - colIdx, 2)
            );
            controls.start({
                opacity: [0, 1 - distance * 0.1, 0],
                transition: { duration: distance * 0.2 },
            });
        }
    }, [clickedCell, controls, rowIdx, colIdx]);

    return (
        <div
            className={`border-b border-l border-neutral-600 bg-transparent ${cellClassName}`}
            onClick={() => setClickedCell([rowIdx, colIdx])}
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: [0, 1, 0.5] }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                animate={controls}
                className="h-12 w-12 bg-[#F26F52]"
            />
        </div>
    );
};

type PatternProps = {
    className?: string;
    cellClassName?: string;
};

const Pattern: React.FC<PatternProps> = ({ className, cellClassName }) => {
    const x = new Array(47).fill(0);
    const y = new Array(30).fill(0);
    const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
    const [clickedCell, setClickedCell] = useState<[number, number] | null>(null);

    return (
        <div className={cn('relative z-30 flex flex-row', className)}>
            {matrix.map((row, rowIdx) => (
                <div key={`matrix-row-${rowIdx}`} className="relative z-20 flex flex-col border-b">
                    {row.map((_, colIdx) => (
                        <Cell
                            key={`matrix-col-${colIdx}`}
                            rowIdx={rowIdx}
                            colIdx={colIdx}
                            clickedCell={clickedCell}
                            setClickedCell={setClickedCell}
                            cellClassName={cellClassName}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Pattern;
