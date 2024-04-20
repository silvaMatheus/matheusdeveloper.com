"use client";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useCommandBar } from "@/context/CommandBarContext";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRouter } from "next/navigation";
import { MutableRefObject, useRef } from "react";
import aboutIcon from "../../../public/assets/icons/genereal/about.json";
import copyLinkIcon from "../../../public/assets/icons/genereal/copy-link.json";
import emailIcon from "../../../public/assets/icons/genereal/email.json";
import homeIcon from "../../../public/assets/icons/genereal/home.json";
import sourceIcon from "../../../public/assets/icons/genereal/source.json";

interface IconRefs {
  [key: string]: MutableRefObject<LottieRefCurrentProps | null>;
}

export function CommandBar() {
  const { toggleCommandBar, isOpen } = useCommandBar();
  const router = useRouter();

  const refs: IconRefs = {
    sourceRef: useRef(null),
    copyLinkRef: useRef(null),
    email: useRef(null),
    home: useRef(null),
    en: useRef(null),
    pt: useRef(null),
    about: useRef(null),
  };

  const iconSize = { width: 24, height: 24 };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const actions = [
    {
      id: "home",
      name: "Home",
      icon: homeIcon,
      action: () => router.push("/"),
    },
    {
      id: "about",
      name: "About",
      icon: aboutIcon,
      action: () => router.push("/en/about"),
    },
    {
      id: "en",
      name: "English",
      icon: sourceIcon,
      action: () => router.push("/en"),
    },
    {
      id: "pt",
      name: "Português",
      icon: sourceIcon,
      action: () => router.push("/pt"),
    },
  ];

  const general = [
    {
      id: "copy",
      name: "Copy Link",
      icon: copyLinkIcon,
      action: () => copyLink(),
    },
    {
      id: "linkedin",
      name: "Talk Me",
      action: () =>
        window.open(
          "https://cal.com/matheus-developer?redirect=false",
          "_blank"
        ),
      icon: emailIcon,
    },
    {
      id: "source",
      name: "View Source",
      action: () =>
        window.open(
          "https://github.com/silvaMatheus/matheusdeveloper.com",
          "_blank"
        ),
      icon: sourceIcon,
    },
  ];

  return (
    <>
      <CommandDialog open={isOpen} onOpenChange={toggleCommandBar}>
        <CommandInput placeholder="Type a command or search..." />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading={"GENERAL"}>
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

          <CommandSeparator />

          <CommandGroup heading={"GO TO"}>
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
        </CommandList>
      </CommandDialog>
    </>
  );
}
