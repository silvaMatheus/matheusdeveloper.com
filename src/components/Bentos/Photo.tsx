'use client';
import Image from 'next/image';

export default function Photo() {
    return (
        <div className="relative inline-block h-[30rem] w-full sm:h-full ">
            <div className="relative h-full w-full">
                <Image
                    src="/assets/photos/me.JPG"
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
            </div>
        </div>
    );
}
