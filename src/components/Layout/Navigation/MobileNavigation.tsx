'use client';
import { navItems } from '@/data/about';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
interface MobileNavigationProps {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNavigation({ isOpen, setOpen }: MobileNavigationProps) {
    let pathname = usePathname() || '/';

    const pathSegments = pathname.split('/');

    if (['en', 'pt'].includes(pathSegments[1])) {
        pathname = '/' + pathSegments.slice(2).join('/');
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex w-full flex-col gap-10 bg-black p-10 text-white"
                >
                    <div className="flex flex-col gap-3 ">
                        <div className="font-bold">Navegue</div>

                        <div className="flex flex-col gap-2">
                            {navItems.map((item, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        onClick={() => setOpen((prev) => !prev)}
                                        className="font-regular text-text-2"
                                        href={item.path}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* <div className="flex flex-col gap-3">
                        <div className="font-bold">Contato</div>
                        <div className="flex gap-2">
                            <SocialIcon socialName="whatsapp" isRound />
                            <SocialIcon socialName="email" isRound />
                        </div>
                    </div> */}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
