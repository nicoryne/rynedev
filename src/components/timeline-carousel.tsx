'use client';

import { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import TimelineCard, { TimelineCardProps } from './timeline-card';
import MotionComponent from './motion-component';

interface TimelineCarouselProps {
  title: string;
  subtitle: string;
  items: TimelineCardProps[];
  accentColor?: 'honey' | 'thunder';
}

export default function TimelineCarousel({
  title,
  subtitle,
  items,
  accentColor = 'honey'
}: TimelineCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const bgClass = accentColor === 'honey' ? 'bg-honey' : 'bg-thunder';
  const textClass = accentColor === 'honey' ? 'text-thunder' : 'text-white';

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const getYear = (dateStr: string) => {
        if (dateStr.toLowerCase().includes('present') || dateStr.toLowerCase().includes('expected')) return 9999;
        const match = dateStr.match(/\d{4}/);
        return match ? parseInt(match[0]) : 0;
      };
      
      return getYear(b.date) - getYear(a.date);
    });
  }, [items]);

  return (
    <MotionComponent
      type="div"
      className="mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
        {/* Category label card */}
        <MotionComponent
          type="div"
          className={`flex shrink-0 flex-col justify-center rounded-2xl ${bgClass} p-8 lg:w-56`}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-bold ${textClass}`}>{title}</h3>
          <p className={`mt-2 text-sm ${textClass} opacity-70`}>{subtitle}</p>
          <p className={`mt-4 text-xs font-medium ${textClass} opacity-50`}>
            {sortedItems.length} {sortedItems.length === 1 ? 'item' : 'items'} — drag to explore
          </p>
        </MotionComponent>

        {/* Carousel constraint wrapper */}
        <div className="min-w-0 flex-1 overflow-hidden" ref={carouselRef}>
          <motion.div
            className="flex w-max cursor-grab gap-4 py-2 active:cursor-grabbing pr-8"
            drag="x"
            dragConstraints={carouselRef}
            dragElastic={0.1}
            dragMomentum
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          >
            {sortedItems.map((item, index) => (
              <MotionComponent
                key={index}
                type="div"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <TimelineCard {...item} />
              </MotionComponent>
            ))}
          </motion.div>
        </div>
      </div>
    </MotionComponent>
  );
}
