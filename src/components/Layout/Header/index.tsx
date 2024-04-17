// Use client-side only rendering for this component
'use client';

import Logo from '@/components/Common/Icons/CircularLogo';
import DesktopNavigation from '@/components/Layout/Navigation/DesktopNavigation';
import { useCommandBar } from '@/context/CommandBarContext';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { MdOutlineKeyboardCommandKey } from 'react-icons/md';
export default function Header() {
    let pathname = usePathname() || '/';
    const { toggleCommandBar, isOpen } = useCommandBar();

    const pathSegments = pathname.split('/');
    const isHome = pathSegments[2] === undefined;

    const desktopNavVariants = {
        hidden: { y: isHome ? '-100vh' : '0', opacity: isHome ? 0 : 1 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 70,
                damping: 20,
                delay: 4,
                duration: 0.5,
            },
        },
    };

    return (
        <motion.nav
            className="fixed z-[99999] flex w-full items-center justify-center  px-5 md:h-16 md:backdrop-blur-[2px]"
            initial={'hidden'}
            animate="visible"
            variants={desktopNavVariants}
        >
            <div className="mt-2 h-full w-full sm:mt-5">
                <Logo />
            </div>

            <div className="hidden w-full items-center justify-center md:flex">
                <DesktopNavigation />
            </div>

            <div className="flex w-full justify-end">
                <MdOutlineKeyboardCommandKey
                    onClick={toggleCommandBar}
                    className="h-7 w-7 cursor-pointer text-white"
                />
            </div>

            {/* <div className="mt-5 flex w-full justify-between px-5 md:hidden ">
                <CircularLogo />
                <MdOutlineKeyboardCommandKey
                    onClick={toggleCommandBar}
                    className="h-7 w-7 cursor-pointer text-white"
                />
            </div> */}
        </motion.nav>
    );
}
