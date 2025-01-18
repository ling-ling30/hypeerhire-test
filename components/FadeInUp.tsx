'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInUpProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  y?: number; // initial y offset
}

export function FadeInUp({
  children,
  duration = 0.5,
  delay = 0,
  className = '',
  y = 20,
}: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
