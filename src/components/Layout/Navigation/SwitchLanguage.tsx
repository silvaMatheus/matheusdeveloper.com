"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Language } from "@/types/Language.tyes";
import Image from "next/image";

import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import en from "../../../../public/assets/static/en.svg";
import pt from "../../../../public/assets/static/pt.svg";

interface LanguageDetails {
  icon: string;
  language: Language;
}

export function SwitchLanguage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const actualLanguage = useLocale();

  const languagesItems: LanguageDetails[] = [
    { icon: en, language: "en" },
    { icon: pt, language: "pt" },
  ];

  function onSelectChange(locale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: locale }
      );
    });
  }

  return (
    <Tabs
      className="h-full w-24"
      onValueChange={(e: string) => onSelectChange(e)}
    >
      <TabsList className="grid grid-cols-2">
        {languagesItems.map((item, index) => {
          return (
            <TabsTrigger
              key={index}
              className={`flex h-full w-full cursor-pointer items-center justify-center p-0 ${
                actualLanguage === item.language ? "grayscale-0" : "grayscale"
              }`}
              value={item.language}
            >
              <Image
                src={item.icon}
                alt={`${item.language} flag`}
                width={24}
                height={24}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
