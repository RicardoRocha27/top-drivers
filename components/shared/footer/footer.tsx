import React from 'react';
import { Container } from '../container';
import { Logo } from '../logo';
import { useTranslations } from 'next-intl';
import FooterLinks from './footer-links';
import SocialIcons from './social-icons';

export const Footer = () => {
  const t = useTranslations('footer');
  return (
    <Container>
      <footer className="rounded-lg bg-foreground text-background  lg:pt-12 py-6 lg:pb-3 px-12 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-6/12">
            <div className="px-6">
              <Logo size={50} />
              <p className="max-w-sm mt-2  ">{t('description')}</p>
              <SocialIcons />
            </div>
          </div>
          <div className="mt-4 lg:mt-0 lg:flex-1">
            <FooterLinks />
          </div>
        </div>
        <hr className="h-px my-3 bg-background/20 border-none" />
        <div>
          <p className="text-left text-sm">
            © TopDrivers 2024 - All rights reserved
          </p>
        </div>
      </footer>
    </Container>
  );
};
