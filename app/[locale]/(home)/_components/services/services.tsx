import { Container } from '@/components/shared/container';
import { ServicesDesktop } from './services-desktop';
import { ServicesTablet } from './services-tablet';
import { ServicesMobile } from './services-mobile';
import { useLocale } from 'next-intl';
import { LocaleProps } from '@/types';

export type ServicesProps = {
  locale: LocaleProps;
};

export const Services = () => {
  const locale = useLocale() as LocaleProps;

  return (
    <Container>
      <ServicesDesktop locale={locale} />
      <ServicesTablet locale={locale} />
      <ServicesMobile locale={locale} />
    </Container>
  );
};
