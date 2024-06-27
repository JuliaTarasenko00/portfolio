import { motion } from 'framer-motion';
import { FC } from 'react';

interface LoadingComponentProps {
  style?: string;
}

export const LoadingComponent: FC<LoadingComponentProps> = ({ style }) => {
  return (
    <motion.span
      className={`block min-h-[30px] min-w-[150px] animate-pulse rounded-md bg-gray-300 ${style}`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 0.8 }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        repeatType: 'loop',
        repeatDelay: 1,
      }}
    />
  );
};
