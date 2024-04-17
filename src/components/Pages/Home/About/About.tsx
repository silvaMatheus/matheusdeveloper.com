import InfinityServices from "@/components/Bentos/InfinityServices";
import { ReactNode } from "react";
import InnovationSpotlightCard from "../../../Bentos/InnovationSpotlightCard";
import InternationalExperience from "../../../Bentos/InternationalExperience";
import MeetupPlanner from "../../../Bentos/MeetupPlanner";
import MyStack from "../../../Bentos/MyStack/MyStack";
import Photo from "../../../Bentos/Photo";
import GlowingArticles from "../../../ui/glow-card/glow";

interface BentosProps {
  component: ReactNode;
  col: string;
  row: string;
  order: string;
}

export default function About() {
  const bentos: BentosProps[] = [
    {
      component: <InternationalExperience />,
      row: "row-span-4 sm:row-span-4",
      col: "col-span-1 sm:col-span-8",
      order: "max-sm:order-3",
    },
    {
      component: <Photo />,
      row: "row-span-4 sm:row-span-5",
      col: "col-span-1 sm:col-span-4",
      order: "max-sm:order-1",
    },
    {
      component: <InfinityServices />,
      row: "row-span-1",
      col: "col-span-1 sm:col-span-8",
      order: "max-sm:order-2",
    },
    {
      component: <MeetupPlanner />,
      row: "row-span-2 sm:row-span-4",
      col: "col-span-1 sm:col-span-3",
      order: "max-sm:order-8",
    },
    {
      component: (
        <GlowingArticles>
          <MyStack />
        </GlowingArticles>
      ),
      row: "row-span-3 sm:row-span-4",
      col: "col-span-1 sm:col-span-6",
      order: "max-sm:order-9",
    },
    {
      component: <InnovationSpotlightCard />,
      row: "row-span-2 sm:row-span-4",
      col: "col-span-1 sm:col-span-3",
      order: "max-sm:hidden",
    },
  ];

  return (
    <div className="flex h-full w-full flex-col">
      <div
        className={`grid h-full w-full auto-rows-fr grid-cols-1 gap-5  text-white sm:grid-cols-12 sm:grid-rows-9`}
      >
        {bentos.map((bento, index) => {
          return (
            <div
              key={index}
              className={`${bento.order} ${bento.col} ${bento.row}`}
            >
              {bento.component}
            </div>
          );
        })}
      </div>
    </div>
  );
}
