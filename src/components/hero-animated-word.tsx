'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['buzz', 'thrive', 'stick', 'fly', 'sting (in a good way)'];

export default function HeroAnimatedWord() {
  const [index, setIndex] = useState(0);

  const INTERVAL_SECONDS = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, INTERVAL_SECONDS * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={words[index]}
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.8 }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 14,
          mass: 0.8
        }}
        className="font-semibold text-honey"
      >
        {words[index]}.
      </motion.span>
    </AnimatePresence>
  );
}
