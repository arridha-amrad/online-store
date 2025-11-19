import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./node_modules/@heroui/theme/dist/components/(button|card|chip|divider|dropdown|form|input|link|listbox|modal|navbar|radio|select|popover|user|ripple|spinner|menu|scroll-shadow|avatar).js"
],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
