import { Button } from "@/components/ui/moving-border";
import { useTranslations } from "next-intl";
import React from "react";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const ContactSectionBUtton: React.FC = () => {
  const t = useTranslations("ContactSection");

  return (
    <div className="pointer-events-none relative z-50 flex h-full select-none flex-col items-center gap-5">
      <div className="after: flex h-full flex-col items-center justify-center gap-10">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t("heading")}
          <br />
        </h2>

        <Button className="w-full border-black bg-white  text-black hover:border hover:border-white hover:text-white">
          {t("button")}
        </Button>
      </div>
    </div>
  );
};

export default ContactSectionBUtton;
