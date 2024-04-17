import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useTranslations } from "next-intl";
import { LLMs, Multitenancy, OpenAi, SAAS } from "../../../ui/Icons/icons";
import Cards from "./Cards";

export default function CurrentlyLearning() {
  const t = useTranslations("CurrentlyLearning");

  const studies = [
    {
      title: t("titleLargeLanguageModels"),
      description: t("descriptionLargeLanguageModels"),
      icon: <LLMs />,
      colors: [[99, 187, 57]],
    },
    {
      title: t("titleOpenAiAPI"),
      description: t("descriptionOpenAiAPI"),
      icon: <OpenAi />,
      colors: [[152, 152, 163]],
    },
    {
      title: t("titleMultitenancy"),
      description: t("descriptionMultitenancy"),
      icon: <Multitenancy />,
      colors: [[82, 126, 249]],
    },
    {
      title: t("titleSAAS"),
      description: t("descriptionSAAS"),
      icon: <SAAS />,
      colors: [[242, 111, 82]],
    },
  ];

  const words = t("introWords");

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 rounded-xl">
      <div className="flex w-full flex-col items-center justify-center gap-10 sm:w-10/12">
        <h1 className="text-sm font-bold text-white sm:text-xl">
          {t("alwaysEvolving")}
        </h1>
        <TextGenerateEffect words={words} />
      </div>
      <div className="mt-5 flex h-3/6 w-full flex-wrap items-center justify-center sm:h-3/6 sm:w-10/12">
        {studies.map((item, index) => (
          <Cards
            key={index}
            title={item.title}
            color={item.colors}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
