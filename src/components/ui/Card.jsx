// src/components/ui/Card.jsx
import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Card = ({ children, className, hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
      className={clsx(
        'glass-card p-6 md:p-8',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;