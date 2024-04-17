import { useTranslations } from "next-intl";
import { GlowingStarsBackgroundCard } from "../ui/glowing-stars";

export default function InternationalExperience() {
  const t = useTranslations("InternationalExperience");

  return (
    <GlowingStarsBackgroundCard className="h-full w-full">
      <div className="sm:-p-5 z-10 flex h-full w-full flex-col gap-5 p-5 sm:absolute sm:justify-center sm:pl-5">
        <h4
          className=" bg-gradient-to-r from-white to-[#9898A3] 
                bg-clip-text text-2xl font-bold uppercase text-transparent  sm:text-3xl"
        >
          {t("title")}
        </h4>

        <h4 className="w-8/12 text-xl font-extralight ">{t("description")}</h4>
      </div>
    </GlowingStarsBackgroundCard>
  );
}
