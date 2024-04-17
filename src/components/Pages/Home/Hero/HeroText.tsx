import { useTranslations } from "next-intl";

export default function HeroText() {
  const t = useTranslations("Hero");

  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <div className="flex justify-center text-white">
        <h1 className="text-center text-3xl font-bold sm:w-3/4 sm:text-5xl">
          {t("title")}
        </h1>
      </div>

      <div className="px-5 text-sm text-gray sm:w-3/4 sm:text-lg">
        {t("description")}
      </div>
    </div>
  );
}
