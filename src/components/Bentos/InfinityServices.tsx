import { Specialties } from "@/data/about";
import Image from "next/image";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function InfinityServices() {
  const services = Specialties.map((service: string, index) => {
    return (
      <div key={index} className="flex h-full items-center text-nowrap ">
        <Image
          className="mx-5"
          src="/assets/logos/logo.svg"
          alt="myLogo"
          height={20}
          width={20}
        />
        {service}
      </div>
    );
  });

  return (
    <div className="h-full w-full overflow-auto rounded-xl p-5">
      <div className="h-full w-full ">
        <InfiniteMovingCards
          items={services}
          direction="right"
          speed="normal"
        />
      </div>
    </div>
  );
}
