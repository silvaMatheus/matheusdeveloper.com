import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
    return (
        <div className="relative inline-block h-10 w-5">
            <div className="relative h-full w-full">
                <Link href={'/'}>
                    <Image
                        src="/assets/logos/logo.svg"
                        alt="my picture"
                        fill={true}
                        className="rounded-2xl"
                        quality={100}
                        priority
                        loading="eager"
                        unoptimized={true}
                        placeholder="blur"
                        blurDataURL="d"
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                </Link>
            </div>
        </div>
    );
}
