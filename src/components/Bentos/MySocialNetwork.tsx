import {
    EnvelopeOpenIcon,
    GitHubLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
} from '@radix-ui/react-icons';

export default function MyNetwork() {
    const defaultSize = {
        width: 25,
        height: 25,
    };
    const SocialNetworks = [
        {
            name: 'github',
            icon: <GitHubLogoIcon {...defaultSize} />,
            href: 'https://github.com/silvaMatheus',
        },
        {
            name: 'linkedin',
            icon: <LinkedInLogoIcon {...defaultSize} />,
            href: 'https://www.linkedin.com/in/matheus-silva-064472157',
        },
        {
            icon: <InstagramLogoIcon {...defaultSize} />,
            href: 'https://www.linkedin.com/in/matheus-silva-064472157',
        },
        {
            name: 'email',
            icon: <EnvelopeOpenIcon {...defaultSize} />,
            href: 'matheus@matheusdeveloper.com',
        },
    ];
    return (
        <div className="h-full w-full">
            <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-5  ">
                {SocialNetworks.map((social, index) => (
                    <div
                        key={index}
                        className="flex
                         h-full w-full items-center
                         justify-center
                         rounded-xl
                         bg-[#171717]
                         "
                    >
                        <div
                            className="relative flex h-full w-full
                     flex-col items-center justify-center  text-3xl grayscale"
                        >
                            {social.icon}
                        </div>

                        <div />
                    </div>
                ))}
            </div>
        </div>
    );
}
