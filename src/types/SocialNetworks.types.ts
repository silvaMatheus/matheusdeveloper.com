import { IconProps } from '@radix-ui/react-icons/dist/types';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export interface SocialNetworksProps {
    name: string;
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
    href: string;
}
