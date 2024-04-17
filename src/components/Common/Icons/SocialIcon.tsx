import { SocialNetworks } from '@/data/about';
import { IconProps } from '@/types/Components/Icons.types';
import Image from 'next/image';
import Link from 'next/link';
import { CircularIcon } from '.';

export default function SocialIcon({ isRound, socialName, width = 30, height = 30 }: IconProps) {
    const network = SocialNetworks.find((n) => n.name === socialName);

    const pathToIcon = socialName.toLowerCase();

    return isRound ? (
        <Link href={network ? network.href : '/'} target="_blank">
            <CircularIcon>
                <Image
                    src={`/assets/static/${pathToIcon}.svg`}
                    alt={socialName}
                    width={width}
                    height={height}
                />
            </CircularIcon>
        </Link>
    ) : (
        <Image
            src={`/assets/static/${pathToIcon}.svg`}
            alt={socialName}
            width={width}
            height={height}
        />
    );
}
