import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { Navbar } from '@/components/shared/navbar/navbar';
import Footer from '@/components/shared/footer/footer';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '400', '700'] });

export const metadata: Metadata = {
  title: 'Top Drivers',
  description:
    'Top Drivers offers exquisite quality and comfort tailored to meet your unique needs.',
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
        <div className="pb-8">
          <Footer />
        </div>
      </body>
    </html>
  );
}
