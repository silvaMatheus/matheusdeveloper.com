import HeroAbout from "@/components/Bentos/HeroAboutMe";
import BentoAbout from "@/components/Pages/About/BentoAbout";
import TechsCarousel from "@/components/Pages/About/Techs";
import { useTranslations } from "next-intl";
type Props = {
  params: { lang: string };
};

export default function AboutPage({ params: { lang } }: Props) {
  const t = useTranslations("About");

  return (
    <div className="max-w-screen flex w-full flex-col sm:gap-44">
      <section>
        <HeroAbout />
      </section>

      <section className="flex h-auto w-full flex-col items-center justify-center">
        <BentoAbout />
      </section>

      <section className="flex w-screen flex-col gap-10">
        <div className="relative flex h-96">
          <div className="absolute flex h-full w-screen items-center justify-center">
            <TechsCarousel
              size={{
                h: "h-24",
                w: "w-24",
              }}
              lines={3}
            />
            <div
              className="absolute inset-0 h-full w-full bg-black
                 [mask-image:radial-gradient(450px_450px_at_center,transparent_20%,white)]"
            ></div>
          </div>
        </div>
        <div className="my-auto flex max-w-full flex-col items-center justify-center">
          <div className="flex w-9/12 flex-col gap-10 text-center text-white">
            <h3 className="text-xl text-[#CCCCCC]">
              {t("TechnologiesSectionTitle")}
            </h3>
            <h4 className="text-3xl text-[#666666]">
              {t("TechnologiesSectionText")}
            </h4>
          </div>
        </div>
      </section>
    </div>
  );
}
