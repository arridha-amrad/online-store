import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./node_modules/@heroui/theme/dist/components/(button|card|chip|divider|dropdown|form|input|link|modal|navbar|radio|select|popover|ripple|spinner|menu|listbox|scroll-shadow).js"
],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
