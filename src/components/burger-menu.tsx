'use client';

import { useState } from 'react';
import { Squares2X2Icon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationLinks } from '@/lib/navigation-links';
import Link from 'next/link';

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-4">
        <motion.button
          className="rounded-full bg-white p-2"
          onClick={() => setOpen(!open)}
          animate={{ rotate: open ? 130 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Squares2X2Icon className="h-auto w-8 fill-thunder" />
        </motion.button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute inset-x-0 top-20 h-screen w-screen rounded-lg bg-white md:top-16"
            initial={{ scale: 0.97, opacity: 0.2, y: 800 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.97, opacity: 0.2, y: 800 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <ul className="flex flex-col justify-end gap-6 p-8 text-end">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-4xl text-thunder"
                    onClick={() => setOpen(!open)}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
