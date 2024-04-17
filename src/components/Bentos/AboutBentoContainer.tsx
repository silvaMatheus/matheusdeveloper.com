import { ReactNode } from 'react';

export default function AboutBentContainer({ children }: { children: ReactNode }) {
    return (
        <div
            className="flex h-full w-full flex-col  gap-5 rounded-xl border  border-[#222229]
bg-[#171717] p-5"
        >
            {children}
        </div>
    );
}
