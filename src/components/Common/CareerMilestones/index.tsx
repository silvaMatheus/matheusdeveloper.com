import type { WorkExperienceProps } from "@/types/WorkExperience.types";
import Image from "next/image";

export default function CareerMilestones({
  company,
  role,
  logo,
}: WorkExperienceProps) {
  return (
    <div className="flex items-center justify-between gap-3 ">
      <div className="bg-background-3 relative h-10 w-10 rounded-lg grayscale">
        <Image fill src={logo} alt="logo" />
      </div>

      <div className="flex w-full justify-between gap-5 sm:pr-5 ">
        <div className="text-sm font-bold">{company}</div>
        <div className="text-sm whitespace-nowrap	text-end">{role}</div>
      </div>
    </div>
  );
}
