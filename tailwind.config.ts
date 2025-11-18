import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./node_modules/@heroui/theme/dist/components/(button|card|chip|divider|form|input|link|ripple|spinner).js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
