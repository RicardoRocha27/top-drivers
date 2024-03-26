import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/shared/navbar/navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "400", "700"] });

export const metadata: Metadata = {
  // TODO: Maybe change this to a more descriptive thing
  title: "Top Drivers",
  description:
    "Top Drivers offers exquisite quality and comfort tailored to meet your unique needs.",
};

export default function RootLocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={params.locale}>
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
