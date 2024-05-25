'use client';

import { Container } from '@/components/shared/container';
import { ServicesDesktop } from './services-desktop';
import { ServicesTablet } from './services-tablet';
import { ServicesMobile } from './services-mobile';
import { useLocale } from 'next-intl';
import { LocaleProps } from '@/types';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export type ServicesProps = {
  locale: LocaleProps;
};

export const Services = () => {
  const locale = useLocale() as LocaleProps;
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const isMobile: boolean =
    typeof window !== 'undefined' ? window?.innerWidth < 1024 : false;

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <Container>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: isMobile ? '10%' : '30%' }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <ServicesDesktop locale={locale} />
        <ServicesTablet locale={locale} />
        <ServicesMobile locale={locale} />
      </motion.div>
    </Container>
  );
};
