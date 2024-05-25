'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type TimelineEventProps = {
  date: string;
  title: string;
  description: string;
  delayTime: number;
};

export const TimelineEvent = ({
  date,
  title,
  description,
  delayTime,
}: TimelineEventProps) => {
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
      transition={{ delay: 0.1 * delayTime }}
      className="flex flex-col py-4 relative"
    >
      <div className="flex space-x-2 items-center">
        <div className="w-1 h-1 bg-accent rounded-full" />
        <span className="text-sm text-accent whitespace-nowrap">{date}</span>
        <div className="h-[1px] bg-accent flex-grow" />
      </div>
      <div className="mt-1">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-foreground/80 mt-2">{description}</p>
      </div>
    </motion.div>
  );
};
