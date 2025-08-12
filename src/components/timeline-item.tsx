'use client';

import MotionComponent from './motion-component';

export interface TimelineItemProps {
  type: 'education' | 'experience' | 'certification' | 'award';
  title: string;
  organization: string;
  date: string;
  description?: string;
  location?: string;
  skills?: string[];
  isLast?: boolean;
}

const typeConfig = {
  education: {
    icon: '🎓',
    bgColor: 'bg-thunder',
    textColor: 'text-thunder',
    bgLight: 'bg-neutral-50'
  },
  experience: {
    icon: '💼',
    bgColor: 'bg-honey',
    textColor: 'text-honey',
    bgLight: 'bg-honey/5'
  },
  certification: {
    icon: '📜',
    bgColor: 'bg-neutral-600',
    textColor: 'text-neutral-600',
    bgLight: 'bg-neutral-50'
  },
  award: {
    icon: '🏆',
    bgColor: 'bg-honey',
    textColor: 'text-honey',
    bgLight: 'bg-honey/10'
  }
};

export default function TimelineItem({
  type,
  title,
  organization,
  date,
  description,
  location,
  skills = [],
  isLast = false
}: TimelineItemProps) {
  const config = typeConfig[type];

  return (
    <MotionComponent
      type="div"
      className="relative flex gap-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Timeline Line & Icon */}
      <div className="flex flex-col items-center">
        <MotionComponent
          type="div"
          className={`flex h-12 w-12 items-center justify-center rounded-full ${config.bgColor} text-white shadow-lg`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-lg">{config.icon}</span>
        </MotionComponent>
        
        {!isLast && (
          <div className="mt-2 h-16 w-0.5 bg-gradient-to-b from-neutral-300 to-transparent" />
        )}
      </div>

      {/* Content */}
      <MotionComponent
        type="div"
        className={`flex-1 rounded-xl ${config.bgLight} p-6 shadow-sm`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -2 }}
      >
        <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-bold text-thunder">{title}</h3>
          <span className="text-sm font-medium text-neutral-500">{date}</span>
        </div>
        
        <div className="mb-3 flex flex-col gap-1">
          <p className={`font-semibold ${config.textColor}`}>{organization}</p>
          {location && (
            <p className="text-sm text-neutral-500">📍 {location}</p>
          )}
        </div>

        {description && (
          <p className="mb-4 text-neutral-600 leading-relaxed">{description}</p>
        )}

        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-full bg-white px-3 py-1 text-xs font-medium text-thunder shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </MotionComponent>
    </MotionComponent>
  );
}