import {
  CalendarIcon,
  EnvelopeOpenIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function MyNetwork() {
  const defaultSize = {
    width: 25,
    height: 25,
  };
  const SocialNetworks = [
    {
      name: "github",
      icon: <GitHubLogoIcon {...defaultSize} />,
      href: "https://github.com/silvaMatheus",
    },
    {
      name: "linkedin",
      icon: <LinkedInLogoIcon {...defaultSize} />,
      href: "https://www.linkedin.com/in/matheus-silva-064472157",
    },
    {
      icon: <CalendarIcon {...defaultSize} />,
      href: "https://cal.com/matheus-developer?redirect=false",
    },
    {
      name: "email",
      icon: <EnvelopeOpenIcon {...defaultSize} />,
      href: "matheus@matheusdeveloper.com",
    },
  ];
  return (
    <div className="h-full w-full ">
      <div className="grid h-full w-full grid-cols-2 grid-rows-2 sm:gap-5 gap-2">
        {SocialNetworks.map((social, index) => (
          <Link
            key={index}
            href={social.href}
            target="__blank"
            className="flex
                        cursor-pointer
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
          </Link>
        ))}
      </div>
    </div>
  );
}

{
  /* <Link
target="__blank"
href="https://cal.com/matheus-developer?redirect=false"
>
<Button variant={"secondary"}>{t("TalkMe")}</Button>
</Link> */
}
