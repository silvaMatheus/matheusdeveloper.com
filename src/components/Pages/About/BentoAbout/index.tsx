import AboutMe from "@/components/Bentos/AboutMe";
import Expertise from "@/components/Bentos/Expertise";
import Head from "@/components/Bentos/Head";
import MyPhotos from "@/components/Bentos/MyPhotos";
import MyNetwork from "@/components/Bentos/MySocialNetwork";
import WorkExperience from "@/components/Bentos/WorkExperience";
import { ReactNode } from "react";

export default function BentoAbout() {
  interface BentosProps {
    component: ReactNode;
    col: string;
    row: string;
    order: string;
  }
  const bentos: BentosProps[] = [
    {
      component: <Head />,
      row: "sm:row-span-4 ",
      col: "col-span-4 sm:col-span-6",
      order: "max-sm:order-1",
    },
    {
      component: <MyPhotos />,
      row: "sm:row-span-4 ",
      col: "col-span-4 sm:col-span-3",
      order: "max-sm:order-3",
    },
    {
      component: <MyNetwork />,
      row: "sm:row-span-4 h-48",
      col: "col-span-4 sm:col-span-3",
      order: "max-sm:order-3",
    },
    {
      component: <AboutMe />,
      row: "sm:row-span-11",
      col: "col-span-4 sm:col-span-6",
      order: "max-sm:order-2",
    },
    {
      component: <Expertise />,
      row: "sm:row-span-4",
      col: "col-span-4 sm:col-span-6",
      order: "max-sm:order-4",
    },
    {
      component: <WorkExperience />,
      row: "sm:row-span-7",
      col: "col-span-4 sm:col-span-6",
      order: "max-sm:order-6",
    },
  ];

  return (
    <div className="flex w-full flex-col sm:gap-20 p-5 sm:w-9/12">
      <div
        className={`grid h-auto w-full grid-cols-4 gap-10 sm:gap-5 text-white sm:h-screen sm:grid-cols-12 sm:grid-rows-12`}
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
