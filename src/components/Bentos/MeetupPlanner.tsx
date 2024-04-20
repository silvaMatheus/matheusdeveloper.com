import { useTranslations } from "next-intl";
import Link from "next/link";
import { Calendar } from "../ui/calendar";

export default function MeetupPlanner() {
  const t = useTranslations("MeetupPlanner");
  const TCommon = useTranslations("Commons");
  return (
    <div
      className="group/bento relative flex h-full w-full flex-col justify-end overflow-hidden rounded-xl border  
        border-[#222229] sm:items-center sm:justify-center "
    >
      <Calendar
        selected={new Date()}
        className="absolute left-5 top-5  origin-top   rounded-md border  border-[#9898A3] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover/bento:scale-105"
        mode="single"
      />

      <div className="absolute bottom-5 hidden  flex-col items-start justify-between gap-5 pl-5 transition-all group-hover/bento:-translate-y-10 sm:flex">
        <h1 className="font-bold text-white group-hover/bento:opacity-0">
          {t("title")}
        </h1>
        <div className="text-sm text-[#9898A3]">{t("description")}</div>
      </div>

      <div
        className="pointer-events-none absolute
                bottom-0 hidden w-full translate-y-12  transform-gpu 
                flex-row items-center p-5 transition-all
                duration-300 group-hover/bento:translate-y-2 
                group-hover/bento:opacity-100 sm:flex"
      >
        <Link
          href="https://cal.com/matheus-developer?redirect=false"
          target="__blank"
          className="focus-visible:ring-ring 
                    hover:text-accent-foreground pointer-events-auto
                     inline-flex h-8 items-center justify-center
                      rounded-md  text-xs font-medium transition-colors
                     focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
        >
          {TCommon("contactMe")}
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>

      <div className="flex flex-col pl-5 sm:hidden">
        <div className="  flex flex-col items-start justify-between  transition-all">
          <h1 className="font-bold text-white "> {t("title")}</h1>
          <div className="text-sm text-[#9898A3]">{t("description")}</div>
        </div>

        <div className="flex w-full flex-row items-center ">
          <Link
            href="https://cal.com/matheus-developer?redirect=false"
            target="__blank"
            className="pointer-events-auto relative
                        z-10 inline-flex h-14 items-center
                        justify-center  rounded-md text-xs  font-medium
                     "
          >
            {TCommon("contactMe")}
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
