"use client";

import Logo from "@/components/Common/Icons/CircularLogo";
import DesktopNavigation from "@/components/Layout/Navigation/DesktopNavigation";
import { useCommandBar } from "@/context/CommandBarContext";
import { usePathname } from "next/navigation";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
export default function Header() {
  let pathname = usePathname() || "/";
  const { toggleCommandBar, isOpen } = useCommandBar();

  const pathSegments = pathname.split("/");

  return (
    <nav className="bg-black fixed z-[99999] flex w-full items-center justify-center  px-5 md:h-16 md:backdrop-blur-[2px]">
      <div className="mt-2 h-full w-full sm:mt-5">
        <Logo />
      </div>

      <div className="hidden w-full items-center justify-center md:flex">
        <DesktopNavigation />
      </div>

      <div className="flex w-full justify-end">
        <MdOutlineKeyboardCommandKey
          onClick={toggleCommandBar}
          className="h-7 w-7 cursor-pointer text-white"
        />
      </div>
    </nav>
  );
}
