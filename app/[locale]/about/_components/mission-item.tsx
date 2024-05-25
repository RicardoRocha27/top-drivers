'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type MissionItemProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  delayTime: number;
};

export const MissionItem = ({
  title,
  description,
  icon,
  delayTime,
}: MissionItemProps) => {
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
      className="flex items-start gap-2"
    >
      <span className="text-accent">{icon}</span>
      <p className="text-sm text-foreground/80">
        <span className="font-bold text-foreground">{title}.</span>{' '}
        {description}
      </p>
    </motion.div>
  );
};
