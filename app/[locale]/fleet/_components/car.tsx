'use client';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { BriefcaseBusiness, Users } from 'lucide-react';
import Image from 'next/image';
import { CarCarousel } from './car-carousel';
import { useTranslations } from 'next-intl';
import { Fleet } from '@/types';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const Car = ({
  imageUrl,
  carName,
  carDescriptionLabel,
  availablePlaces,
  availableBags,
  images,
}: Fleet) => {
  const t = useTranslations('fleet.cars.modalText');
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const isMobile: boolean = window.innerWidth < 1024;

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: isMobile ? '10%' : '30%' }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <Dialog>
        <DialogTrigger>
          <div className="relative w-full  cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out">
            <Image
              width={500}
              height={500}
              src={imageUrl}
              placeholder="blur"
              alt="car"
              className="object-center object-cover w-full rounded-lg"
            />
            <div className="flex justify-between mt-4">
              <h1 className="font-semibold text-lg">{carName}</h1>
              <div className="flex items-center gap-2">
                <div className="flex items-center p-2 space-x-2 bg-primary rounded-md">
                  <Users size={12} />
                  <p className="font-bold text-sm">{availablePlaces}</p>
                </div>
                <div className="flex items-center p-2 space-x-2 bg-primary rounded-md">
                  <BriefcaseBusiness size={12} />
                  <p className="font-bold text-sm">{availableBags}</p>
                </div>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>
          <div>
            <h1 className="font-semibold text-lg">{carName}</h1>
            <p className="max-w-2xl text-foreground/80 text-sm">
              {/* @ts-ignore */}
              {t(carDescriptionLabel)}
            </p>
          </div>
          <CarCarousel images={images} />
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};
