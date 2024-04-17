"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SwitchLanguage } from "./SwitchLanguage";

export default function DesktopNavigation() {
  let pathname = usePathname() || "/";

  const [hoveredPath, setHoveredPath] = useState(pathname);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/articles", name: "Articles" },
    { path: "/uses", name: "Uses" },
  ];

  return (
    <div className="relative z-[100] flex  w-full items-center justify-start gap-2">
      {navItems.map((item, index) => {
        const isActive =
          item.path === pathname || (pathname === "" && item.path === "/");
        return (
          <Link
            key={item.path}
            className={`text-biotif relative rounded-md px-4 py-2 text-xs font-bold uppercase no-underline duration-300 ease-in lg:text-sm ${
              isActive ? "text-zinc-100" : "text-zinc-400"
            }`}
            data-active={isActive}
            href={item.path}
            onMouseOver={() => setHoveredPath(item.path)}
            onMouseLeave={() => setHoveredPath(pathname)}
          >
            <span>{item.name}</span>
            {item.path === hoveredPath && (
              <motion.div
                className="absolute bottom-0 left-0 -z-10 h-full rounded-md bg-[#282a3666]"
                layoutId="navbar"
                aria-hidden="true"
                style={{
                  width: "100%",
                }}
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  stiffness: 130,
                  damping: 9,
                  duration: 0.3,
                }}
              />
            )}
          </Link>
        );
      })}
      <SwitchLanguage />
    </div>
  );
}
