'use client';

import { cn } from '@/lib/utils';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type ServiceItemProps = {
  firstImageUrl: StaticImport;
  secondImageUrl: StaticImport;
  title: string;
  subtitle: string;
  firstDescriptionTitle: string;
  firstDescription: string;
  secondDescriptionTitle: string;
  secondDescription: string;
  thirdDescriptionTitle?: string;
  thirdDescription?: string[];
  id: string;
  isReversed?: boolean;
  hasExtra?: boolean;
};

export const ServiceItem = ({
  firstImageUrl,
  secondImageUrl,
  title,
  subtitle,
  firstDescriptionTitle,
  firstDescription,
  secondDescriptionTitle,
  secondDescription,
  thirdDescriptionTitle,
  thirdDescription,
  id,
  isReversed,
  hasExtra,
}: ServiceItemProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const effectiveDescription = thirdDescription || [];
  const isMobile: boolean =
    typeof window !== 'undefined' ? window?.innerWidth < 1024 : false;

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % effectiveDescription.length
        );
        setFade(true);
      }, 500); // duration of fade-out effect
    }, 2000);

    return () => clearInterval(interval);
  }, [effectiveDescription.length]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: isMobile ? '10%' : '30%' }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <div
        className={cn(
          'flex flex-col lg:flex-row text-center lg:text-start items-center gap-32 lg:gap-8 overflow-hidden lg:overflow-visible',
          isReversed && 'lg:flex-row-reverse'
        )}
        id={id}
      >
        <div className="h-full flex justify-center items-center ml-16 lg:ml-0">
          <div className="relative w-[150px] h-[250px] sm:w-[250px] sm:h-[350px]">
            <Image
              src={firstImageUrl}
              alt={firstDescriptionTitle}
              placeholder="blur"
              fill
              className="object-cover object-center rounded-lg"
            />
          </div>
          <div className="relative w-[150px] h-[250px] sm:w-[250px] sm:h-[350px]">
            <Image
              src={secondImageUrl}
              alt={secondDescriptionTitle}
              placeholder="blur"
              fill
              className="object-cover object-center rounded-lg mt-16 -ml-16 shadow-md"
            />
          </div>
        </div>
        <div className="lg:-mb-16">
          <h3 className="text-accent font-semibold uppercase tracking-wide mb-2">
            {title}
          </h3>
          <h1 className="font-bold text-2xl mb-6">{subtitle}</h1>
          <div>
            <h5 className="font-semibold mb-2">{firstDescriptionTitle}</h5>
            <p className="text-foreground/80 text-sm">{firstDescription}</p>
          </div>
          <br />
          <div>
            <h5 className="font-semibold mb-2">{secondDescriptionTitle}</h5>
            <p className="text-foreground/80 text-sm">{secondDescription}</p>
          </div>
          {hasExtra && (
            <>
              <br />
              <div>
                <h5 className="font-semibold mb-2">{thirdDescriptionTitle}</h5>
                <p
                  className={`text-foreground/80 text-sm transition-opacity duration-500 ${
                    fade ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {effectiveDescription[currentIndex]}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};
