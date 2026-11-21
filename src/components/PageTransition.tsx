import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function PageTransition({ children }: Props) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: shouldReduce ? 1 : 0, y: shouldReduce ? 0 : 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: shouldReduce ? 1 : 0, y: shouldReduce ? 0 : -8 }}
      transition={{ duration: shouldReduce ? 0 : 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
