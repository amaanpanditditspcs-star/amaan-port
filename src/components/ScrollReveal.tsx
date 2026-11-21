import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: shouldReduce ? 1 : 0,
        y: shouldReduce ? 0 : 12,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: shouldReduce ? 1 : 0, y: shouldReduce ? 0 : 12 }
      }
      transition={{
        duration: shouldReduce ? 0 : 0.5,
        delay: shouldReduce ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
