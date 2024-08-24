import "@/css/index.css";
import { poppins } from "@/css/fonts";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce",
  description:
    "In this website you can buy all the stuff that you can imagine!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
