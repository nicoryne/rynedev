'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export interface TimelineCardProps {
  type: 'education' | 'experience' | 'certification' | 'award';
  title: string;
  organization: string;
  date: string;
  description?: string;
  location?: string;
  skills?: string[];
}

export default function TimelineCard({
  title,
  organization,
  date,
  description,
  location,
  skills = []
}: TimelineCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsExpanded(true);
    }
  }, []);

  return (
    <motion.div
      className="relative w-64 shrink-0 cursor-pointer select-none rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md md:w-72"
      onClick={() => setIsExpanded((prev) => !prev)}
      layout
      transition={{ layout: { duration: 0.3, ease: 'easeOut' } }}
    >
      {/* Unexpanded Content */}
      <div className="flex h-44 flex-col">
        <div>
          {/* Date badge */}
          <span className="mb-3 inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500">
            {date}
          </span>

          {/* Title */}
          <h4 className="text-base font-bold leading-snug text-thunder">{title}</h4>

          {/* Organization */}
          <p className="mt-1 text-sm text-neutral-500">{organization}</p>

          {/* Location */}
          {location && <p className="mt-0.5 text-xs text-neutral-400">{location}</p>}
        </div>

        {/* Press indicator */}
        <motion.div
          className="mt-auto flex items-center gap-1 text-xs text-neutral-400"
          animate={{ opacity: isExpanded ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDownIcon className="h-3.5 w-3.5" />
          <span>Tap for details</span>
        </motion.div>
      </div>

      {/* Expandable content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            {description && (
              <p className="mt-3 border-t border-neutral-100 pt-3 text-sm leading-relaxed text-neutral-600">
                {description}
              </p>
            )}

            {skills.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-honey/10 px-2.5 py-0.5 text-[11px] font-medium text-thunder"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 rounded-b-xl bg-honey"
        initial={{ width: 0 }}
        animate={{ width: isExpanded ? '100%' : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
