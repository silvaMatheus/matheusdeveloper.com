import CareerMilestones from "@/components/Common/CareerMilestones";
import { WorkExperienceProps } from "@/types/WorkExperience.types";
import { useTranslations } from "next-intl";
import AboutBentContainer from "./AboutBentoContainer";

export default function WorkExperience() {
  const t = useTranslations("WorkExperience");

  const WorkExperiences: WorkExperienceProps[] = [
    {
      company: t("companies.AmericasTechnology"),
      role: t("companies.roles.TechLeadFrontEnd"),
      logo: "/assets/logos/logo.svg",
    },
    {
      company: t("companies.WoohooPlus"),
      role: t("companies.roles.TechLeadFrontEnd"),
      logo: "/assets/logos/logo.svg",
    },
    {
      company: t("companies.Freelancer"),
      role: t("companies.roles.FullStackDeveloper"),
      logo: "/assets/logos/logo.svg",
    },
    {
      company: t("companies.MOL"),
      role: t("companies.roles.SeniorFrontendDeveloper"),
      logo: "/assets/logos/logo.svg",
    },
    {
      company: t("companies.Intellective"),
      role: t("companies.roles.FullStackDeveloper"),
      logo: "/assets/logos/logo.svg",
    },
    {
      company: t("companies.AccentureBrasil"),
      role: t("companies.roles.SoftwareEngineering"),
      logo: "/assets/logos/logo.svg",
    },
    {
      company: t("companies.OrganizeCloudLabs"),
      role: t("companies.roles.SoftwareEngineer"),
      logo: "/assets/logos/logo.svg",
    },
    {
      company: t("companies.IcomonTecnologiaLtda"),
      role: t("companies.roles.FrontEndJunior"),
      logo: "/assets/logos/logo.svg",
    },
  ];

  return (
    <AboutBentContainer>
      <div className="text-2xl text-[#CCCCCC]">{t("title")}</div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-[#242424]" />
        </div>
      </div>
      <div className="no-scrollbar flex h-full flex-col gap-10 overflow-x-hidden ">
        {WorkExperiences.map((experience, index) => (
          <CareerMilestones
            key={index}
            company={experience.company}
            logo={experience.logo}
            role={experience.role}
          />
        ))}
      </div>
    </AboutBentContainer>
  );
}
