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
      logo: "https://media.licdn.com/dms/image/D4D0BAQE9vFujlbYTQA/company-logo_200_200/0/1693781511295/americas_technology_logo?e=1721865600&v=beta&t=M2tgie7q-MexzPtrNZTqF5zdxxLCmCdmVMw7MqM8nhk",
    },
    {
      company: t("companies.WoohooPlus"),
      role: t("companies.roles.TechLeadFrontEnd"),
      logo: "https://media.licdn.com/dms/image/D4D0BAQEFqh61kTra3A/company-logo_200_200/0/1693781736217/woohooplus_logo?e=1721865600&v=beta&t=K7ftiUgOIFhqjSonujKr64fhrqhoudG5REJlLcRwgcw",
    },
    {
      company: t("companies.Freelancer"),
      role: t("companies.roles.FullStackDeveloper"),
      logo: "/assets/logos/logo.svg",
    },
    {
      company: t("companies.MOL"),
      role: t("companies.roles.SeniorFrontendDeveloper"),
      logo: "https://media.licdn.com/dms/image/C4D0BAQHzSc5mIUJj9w/company-logo_200_200/0/1662387445344/mediao_online_logo?e=1721865600&v=beta&t=9dJF2GPZaJ0WeAydkVDpgjzZVfw2GM3ROHeYLsTBDHI",
    },
    {
      company: t("companies.Intellective"),
      role: t("companies.roles.FullStackDeveloper"),
      logo: "https://media.licdn.com/dms/image/C510BAQFRu9Tf8wTByg/company-logo_200_200/0/1631334027600?e=1721865600&v=beta&t=T1OnEZvVC4bDAxYkTEGwmmQfXajp9xIb7_-duKdtXJw",
    },
    {
      company: t("companies.AccentureBrasil"),
      role: t("companies.roles.SoftwareEngineer"),
      logo: "https://media.licdn.com/dms/image/D4D0BAQGLnT9haDSJcQ/company-logo_200_200/0/1685540823387/accenturebrasil_logo?e=1721865600&v=beta&t=OdruYj2TqjUlZgyTyN279s5SaxJ1mCEzTqGvC97D9ek",
    },
    {
      company: t("companies.OrganizeCloudLabs"),
      role: t("companies.roles.SoftwareEngineer"),
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_lFdeA3L3I3AL_twlLdIVFwGgy4qFPkR50tO2jM4FFFqus=s176-c-k-c0x00ffffff-no-rj",
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
