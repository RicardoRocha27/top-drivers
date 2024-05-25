import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { Navbar } from '@/components/shared/navbar/navbar';
import { Footer } from '@/components/shared/footer/footer';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import './globals.css';
import { ActionButtonsContainer } from '@/components/shared/action-buttons-container';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Toaster } from '@/components/ui/sonner';

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '400', '700'] });

export const metadata: Metadata = {
  title: 'TopDrivers',
  description:
    'TopDrivers offers exquisite quality and comfort tailored to meet your unique needs.',
};

export default async function RootLocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <body className={poppins.className}>
        <NextIntlClientProvider messages={messages}>
          <Toaster />
          <Navbar />
          <main>{children}</main>
          <div className="pb-8">
            <Footer />
          </div>
          <ActionButtonsContainer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
