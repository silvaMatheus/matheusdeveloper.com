import type { WorkExperienceProps } from "@/types/WorkExperience.types";
import Image from "next/image";

export default function CareerMilestones({
  company,
  role,
  logo,
}: WorkExperienceProps) {
  return (
    <div className="flex items-center justify-between gap-3 ">
      <div className="bg-background-3 relative h-10 w-10 rounded-lg">
        <Image fill src={logo} alt="logo" />
      </div>

      <div className="flex w-full justify-between gap-5 pr-5 ">
        <div className="text-body3 font-bold">{company}</div>
        <div className="text-body3 text-text-2 ">{role}</div>
      </div>
    </div>
  );
}
