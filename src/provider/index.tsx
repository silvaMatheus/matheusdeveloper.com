"use client";

import { CommandBar } from "@/components/CommandBar";
import { CommandBarProvider } from "@/context/CommandBarContext";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProvider,
} from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export default function Provider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <CommandBarProvider>
          {children}
          <CommandBar />
        </CommandBarProvider>
      </ThemeProvider>
    </NextThemesProvider>
  );
}
