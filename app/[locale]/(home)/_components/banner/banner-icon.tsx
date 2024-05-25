'use client';

import { useTranslations } from 'next-intl';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

type BannerIconProps = {
  icon: React.ReactNode;
  titleKeyword:
    | 'banner1.title'
    | 'banner2.title'
    | 'banner3.title'
    | 'banner4.title';
  descriptionKeyword:
    | 'banner1.description'
    | 'banner2.description'
    | 'banner3.description'
    | 'banner4.description';
  delayTime: number;
};

export const BannerIcon = ({
  icon,
  titleKeyword,
  descriptionKeyword,
  delayTime,
}: BannerIconProps) => {
  const t = useTranslations('home.banners');
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.2 * delayTime }}
      className="flex flex-col justify-between gap-4 "
    >
      <div className="flex items-center gap-4 h-full">
        <span>{icon}</span>
        <h1 className="font-bold">{t(titleKeyword)}</h1>
      </div>
      <p className="text-foreground/80 text-sm h-full">
        {t(descriptionKeyword)}
      </p>
    </motion.div>
  );
};
