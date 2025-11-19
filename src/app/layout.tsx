import type { Metadata } from "next";
import { Geist, Lato } from "next/font/google";
import { UiProvider } from "@/providers/ui-provider";
import "../global.css";

const font = Lato({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-product",
});

const font2 = Geist({
  subsets: ["latin"],
  style: "normal",
  preload: true,
});

export const metadata: Metadata = {
  title: "Next Store",
  description: "Online store by devari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.variable} ${font2.className} antialiased`}>
        <UiProvider>{children}</UiProvider>
      </body>
    </html>
  );
}
