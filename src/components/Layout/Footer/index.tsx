import { CircularLogo } from '@/components/Common';
import SocialIcon from '@/components/Common/Icons/SocialIcon';
import { SocialNetworks } from '@/data/about';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="flex w-full  flex-col items-center justify-between gap-10 overflow-hidden  sm:py-24">
                <CircularLogo />

                {/* <nav
                    className="columns-2 items-center sm:flex sm:justify-center sm:space-x-12"
                    aria-label="Footer"
                >
                    {pages.map((item, index) => (
                        <div key={item} className="pb-6">
                            <Link key={index} className="font-regular text-text-2" href={item}>
                                {item}
                            </Link>
                        </div>
                    ))}
                </nav> */}

                <div className="mt-10 flex justify-center space-x-10">
                    {SocialNetworks.map((item, index) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-gray-400 hover:text-gray-500"
                        >
                            <SocialIcon key={index} socialName={item.name} width={24} height={24} />
                        </Link>
                    ))}
                </div>

                <p className="text-center text-xs leading-5 text-gray-500">
                    &copy; {new Date().getFullYear()} Matheus Silva Desenvolvimento de Software.{' '}
                    <br /> Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
