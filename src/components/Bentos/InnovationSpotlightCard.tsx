import { useTranslations } from "next-intl";
import { TextRevealCard } from "../ui/text-reveal-card";

export default function InnovationSpotlightCard() {
  const t = useTranslations("TextRevealCard");
  const text = t("text");
  const revealText = t("revealText");
  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl  
        border border-[#222229]  "
    >
      <div className=" ">
        <TextRevealCard text={text} revealText={revealText} />
      </div>
    </div>
  );
}
