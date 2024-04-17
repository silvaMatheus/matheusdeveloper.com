import { useTranslations } from "next-intl";
import GlowingArticles from "../ui/glow-card/glow";
import AboutBentContainer from "./AboutBentoContainer";

export default function AboutMe() {
  const t = useTranslations("AboutMe");

  return (
    <GlowingArticles>
      <AboutBentContainer>
        <h2 className="text-2xl text-[#CCCCCC]">{t("title")}</h2>

        <div className="flex flex-col gap-5">
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-[#242424]" />
            </div>
          </div>

          <span className="text-[#666666]">{t("storyTitle")}</span>
          <h3 className="text-lg text-[#CCCCCC]">{t("story")}</h3>
        </div>
      </AboutBentContainer>
    </GlowingArticles>
  );
}
