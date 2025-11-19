// app/providers.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import { HeroUIProvider } from "@heroui/react";

export function UiProvider({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="system">
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
