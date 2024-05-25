'use client';

import { Container } from '@/components/shared/container';
import { Header } from '@/components/shared/header';
import { AboutGrid } from './about-grid';
import { useTranslations } from 'next-intl';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export const About = () => {
  const t = useTranslations('home.about');
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const isMobile: boolean = window.innerWidth < 1024;

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
        <div className="max-w-6xl mx-auto space-y-12 my-32">
          <div className="gap-4 flex flex-col lg:flex-row justify-between">
            <div className="lg:max-w-md">
              <Header translationKeyword="home.about" />
            </div>
            <p className="text-sm md:text-base text-foreground/80 lg:max-w-md">
              {t('description')}
            </p>
          </div>
          <AboutGrid card1Text={t('card1Text')} />
        </div>
      </motion.div>
    </Container>
  );
};
