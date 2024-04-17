import { useTranslations } from "next-intl";

export default function Head() {
  const t = useTranslations("Head");

  return (
    <div className="flex h-full w-full flex-col gap-3 p-5 sm:gap-5 sm:p-0">
      <div className="flex w-full items-center gap-5 text-white">
        <div className="flex h-3.5 w-3.5 animate-pulse items-center justify-center rounded-full bg-green-500" />
        <span className="text-body3 whitespace-nowrap font-bold">
          {t("status")}
        </span>
      </div>

      <div className="text-6xl font-bold text-white">{t("title")}</div>

      <div className="w-9/12 text-xl text-gray ">{t("description")}</div>
    </div>
  );
}
