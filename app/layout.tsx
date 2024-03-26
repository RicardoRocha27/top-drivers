import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/shared/navbar/navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "400", "700"] });

export const metadata: Metadata = {
  title: "Top Drivers",
  description:
    "Top Drivers offers exquisite quality and comfort tailored to meet your unique needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
