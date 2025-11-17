import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../global.css";
import { UiProvider } from "@/providers/ui-provider";

const font = Inter({
  subsets: ["latin"],
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
    <html lang="en" className="dark">
      <body className={`${font.className} antialiased`}>
        <UiProvider>{children}</UiProvider>
      </body>
    </html>
  );
}
