import { Squash } from 'hamburger-react';
import { Dispatch, SetStateAction } from 'react';

interface HamburgerProps {
    toggled: boolean;

    toggle: Dispatch<SetStateAction<boolean>>;
}
export default function Hamburger({ toggled, toggle }: HamburgerProps) {
    return (
        <div
            className="flex
                justify-center    
                rounded-full 
                border 
                border-solid border-background-6 
                bg-background-80"
        >
            <Squash toggled={toggled} size={20} color="white" toggle={toggle} />
        </div>
    );
}
