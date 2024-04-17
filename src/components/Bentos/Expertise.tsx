import { Describable } from "@/types/Describable.types";
import { EmblaOptionsType } from "embla-carousel";
import { useTranslations } from "next-intl";
import EmblaCarousel from "../ui/carrousel/carousel";
import AboutBentContainer from "./AboutBentoContainer";

export default function Expertise() {
  const t = useTranslations("SoftSkills");

  const SoftSkills: Describable[] = [
    {
      title: t("TechnicalLeadership"),
      description: t("TechnicalLeadershipDescription"),
    },
    {
      title: t("InnovativeProblemSolving"),
      description: t("InnovativeProblemSolvingDescription"),
    },
    {
      title: t("CustomerCentricApproach"),
      description: t("CustomerCentricApproachDescription"),
    },
    {
      title: t("CollaborativeTeamwork"),
      description: t("CollaborativeTeamworkDescription"),
    },
    {
      title: t("EffectiveCommunication"),
      description: t("EffectiveCommunicationDescription"),
    },
    {
      title: t("Adaptability"),
      description: t("AdaptabilityDescription"),
    },
    {
      title: t("StrategicThinking"),
      description: t("StrategicThinkingDescription"),
    },
    {
      title: t("ContinuousLearning"),
      description: t("ContinuousLearningDescription"),
    },
    {
      title: t("Empathy"),
      description: t("EmpathyDescription"),
    },
    {
      title: t("TimeManagement"),
      description: t("TimeManagementDescription"),
    },
    {
      title: t("EmotionalIntelligence"),
      description: t("EmotionalIntelligenceDescription"),
    },
  ];

  const OPTIONS: EmblaOptionsType = { align: "start", loop: true };

  const softSkills = SoftSkills.map((item, index) => (
    <div className="w-full" key={index}>
      <div className="flex w-full flex-col gap-5">
        <h3 className="text-xl text-[#666666]">{item.title}</h3>
        <h4 className="text-sm text-[#CCCCCC]">{item.description}</h4>
      </div>
    </div>
  ));

  return (
    <AboutBentContainer>
      <h2 className="text-2xl text-[#CCCCCC]">What I do best?</h2>
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-[#242424]" />
        </div>
      </div>
      <EmblaCarousel dotButton slides={softSkills} options={OPTIONS} />
    </AboutBentContainer>
  );
}
