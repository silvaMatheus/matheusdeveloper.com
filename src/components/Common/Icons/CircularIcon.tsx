import { CircleProps } from '@/types/Components/Icons.types';

export default function CircularIcon({ children }: CircleProps) {
    return (
        <div
            className="
                bg-background-0
                flex    
                justify-center 
                rounded-full 
                border 
                border-solid 
                border-[#222229]
                p-3"
        >
            {children}
        </div>
    );
}
