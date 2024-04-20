import { useTranslations } from "next-intl";

export default function HeroAbout() {
  const t = useTranslations("HeroAboutMe");

  return (
    <section className="relative flex h-[30rem] flex-col items-center justify-center bg-black bg-grid-white/[0.2] md:w-full">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col items-center justify-center text-center">
        <p className="relative z-20 bg-gradient-to-b bg-clip-text py-8 text-4xl font-bold text-transparent text-white sm:text-7xl">
          {t("name")}
        </p>
      </div>
    </section>
  );
}
