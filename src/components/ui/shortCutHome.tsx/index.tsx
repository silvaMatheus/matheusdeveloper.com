"use client";
import { useCommandBar } from "@/context/CommandBarContext";
import { FC, useEffect, useState } from "react";
import { Button } from "../button";

const ShortcutHome: FC = () => {
  const [isClient, setIsClient] = useState(false);
  const { toggleCommandBar, isOpen } = useCommandBar();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent);
  const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

  const commandKey = isMac ? "⌘" : "ctrl";

  return (
    <Button variant={"ghost"} onClick={toggleCommandBar}>
      {isMobile ? "Tap To Start" : `Press To Start ${isMac ? "⌘" : "Ctrl"}`}
    </Button>
  );
};

export default ShortcutHome;
