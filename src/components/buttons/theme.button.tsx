"use client";

import { Button } from "@heroui/button";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
      isIconOnly
      variant="light"
    >
      <Sun />
    </Button>
  );
}
