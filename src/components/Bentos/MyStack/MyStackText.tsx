import { useTranslations } from "next-intl";

export default function MyStackText() {
  const t = useTranslations("Hero");

  return (
    <div className="absolute bottom-5 flex flex-col items-start justify-between gap-5 sm:pl-5">
      <h1 className="font-bold text-white">{t("title")}</h1>
      <div className="text-sm text-[#9898A3]">{t("description")}</div>
    </div>
  );
}
