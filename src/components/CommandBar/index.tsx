'use client';
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@/components/ui/command';
import { useCommandBar } from '@/context/CommandBarContext';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useRouter } from 'next/navigation';
import { MutableRefObject, useRef } from 'react';
import aboutIcon from '../../../public/assets/icons/zeno/about.json';
import articlesIcon from '../../../public/assets/icons/zeno/articles.json';
import copyLinkIcon from '../../../public/assets/icons/zeno/copy-link.json';
import emailIcon from '../../../public/assets/icons/zeno/email.json';
import homeIcon from '../../../public/assets/icons/zeno/home.json';
import projectsIcon from '../../../public/assets/icons/zeno/projects.json';
import sourceIcon from '../../../public/assets/icons/zeno/source.json';
import usesIcon from '../../../public/assets/icons/zeno/uses.json';

type IconRefs = {
    copyLinkRef: MutableRefObject<LottieRefCurrentProps | null>;
    email: MutableRefObject<LottieRefCurrentProps | null>;
    home: MutableRefObject<LottieRefCurrentProps | null>;
    about: MutableRefObject<LottieRefCurrentProps | null>;
    articles: MutableRefObject<LottieRefCurrentProps | null>;
    projects: MutableRefObject<LottieRefCurrentProps | null>;
    uses: MutableRefObject<LottieRefCurrentProps | null>;
    sourceRef: MutableRefObject<LottieRefCurrentProps | null>;
};

export function CommandBar() {
    const { toggleCommandBar, isOpen } = useCommandBar();
    const router = useRouter();

    const refs: IconRefs = {
        sourceRef: useRef(null),
        copyLinkRef: useRef(null),
        email: useRef(null),
        home: useRef(null),
        about: useRef(null),
        articles: useRef(null),
        projects: useRef(null),
        uses: useRef(null),
    };

    const iconSize = { width: 24, height: 24 };

    const copyLink = () => {
        //TODO: Add notification to copy
        navigator.clipboard.writeText(window.location.href);
    };

    const actions = [
        { id: 'home', name: 'Home', icon: homeIcon, action: () => router.push('/') },
        { id: 'about', name: 'About', icon: aboutIcon, action: () => router.push('/en/about') },
        {
            id: 'articles',
            name: 'Articles',
            icon: articlesIcon,
            action: () => router.push('/articles'),
        },
        {
            id: 'projects',
            name: 'Projects',
            icon: projectsIcon,
            action: () => router.push('/projects'),
        },
        { id: 'uses', name: 'Uses', icon: usesIcon, action: () => router.push('/en/uses') },
    ];

    const general = [
        {
            id: 'copy',
            name: 'Copy Link',
            icon: copyLinkIcon,
            action: () => copyLink(),
        },
        {
            id: 'email',
            name: 'Send Email',
            action: () => router.push('/contact'),
            icon: emailIcon,
        },
        {
            id: 'source',
            name: 'View Source',
            action: () => window.open('https://github.com/zenorocha/zenorocha.com', '_blank'),
            icon: sourceIcon,
        },
    ];

    return (
        <>
            <CommandDialog open={isOpen} onOpenChange={toggleCommandBar}>
                <CommandInput placeholder="Type a command or search..." />

                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>

                    <CommandGroup heading={'GO TO'}>
                        {general.map((action, index) => (
                            <CommandItem
                                key={action.id}
                                className="flex cursor-pointer items-center gap-3"
                                onSelect={action.action}
                            >
                                <Lottie
                                    lottieRef={refs[action.id as keyof IconRefs]}
                                    style={iconSize}
                                    animationData={action.icon}
                                    loop={false}
                                    autoplay={false}
                                />
                                <span>{action.name}</span>
                            </CommandItem>
                        ))}
                    </CommandGroup>

                    <CommandSeparator />

                    <CommandGroup heading={'GENERAL'}>
                        {actions.map((action) => (
                            <div key={action.id} onClick={action.action}>
                                <CommandItem
                                    className="flex items-center gap-3"
                                    key={action.id}
                                    onSelect={action.action}
                                >
                                    <Lottie
                                        lottieRef={refs[action.id as keyof IconRefs]}
                                        style={iconSize}
                                        animationData={action.icon}
                                        loop={false}
                                        autoplay={false}
                                    />
                                    <span>{action.name}</span>
                                </CommandItem>
                            </div>
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}
