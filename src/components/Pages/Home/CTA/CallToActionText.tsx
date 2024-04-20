import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const ContactSectionBUtton: React.FC = () => {
  const t = useTranslations("ContactSection");

  return (
    <div className="relative z-50 flex flex-col items-center gap-5">
      <div className="flex h-full flex-col items-center justify-center gap-10">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t("heading")}
          <br />
        </h2>

        <Link
          target="__blank"
          href="https://cal.com/matheus-developer?redirect=false"
        >
          <Button variant={"secondary"}>{t("TalkMe")}</Button>
        </Link>
      </div>
    </div>
  );
};

export default ContactSectionBUtton;
