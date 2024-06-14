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
  keywords: [
    'Topdrivers',
    'Boaventours',
    'Serviço de Chauffeur',
    'Transfers Privadas',
    'Transfers Aeroporto',
    'Transporte de Luxo',
    'Serviço de Carro Executivo',
    'Tours Privados',
    'Viagem Corporativa',
    'Aluguer de Carro para Casamentos',
    'Transporte para Eventos',
    'Transporte VIP',
    'Transferências de Hotel',
    'Serviço de Limusina',
    'Tours Personalizados',
    'Transporte de Grupos',
    'Transferências para Portos de Cruzeiro',
    'Tours de Vinhos',
    'Tours Turísticos',
    'Serviço de Táxi Premium',
    'Carros com Chauffeur',
    'Tours pela Cidade',
    'Chauffeur Service',
    'Private Transfers',
    'Airport Transfers',
    'Luxury Transportation',
    'Executive Car Service',
    'Private Tours',
    'Corporate Travel',
    'Wedding Car Hire',
    'Event Transportation',
    'VIP Transport',
    'Hotel Transfers',
    'Limousine Service',
    'Personalized Tours',
    'Group Transportation',
    'Cruise Port Transfers',
    'Wine Tours',
    'Sightseeing Tours',
    'Premium Taxi Service',
    'Chauffeur Driven Cars',
    'City Tours',
  ],
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
