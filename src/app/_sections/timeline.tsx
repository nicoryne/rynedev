'use client';

import { useMemo } from 'react';
import MotionComponent from '@/components/motion-component';
import TimelineCarousel from '@/components/timeline-carousel';
import TimelineCard from '@/components/timeline-card';
import Image from 'next/image';
import Link from 'next/link';
import { timelineData } from '@/lib/timeline-data';

export default function TimelineSection() {
  const groups = useMemo(() => {
    const experience = timelineData.filter((d) => d.type === 'experience');
    const education = timelineData.filter((d) => d.type === 'education');
    const certifications = timelineData.filter((d) => d.type === 'certification');
    const awards = timelineData.filter((d) => d.type === 'award');
    return { experience, education, certifications, awards };
  }, []);

  return (
    <section
      id="timeline"
      className="relative min-h-screen w-full py-24"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="My Journey - Education, Experience & Achievements" />
      <meta
        itemProp="description"
        content="A timeline of my educational background, professional experience, certifications, and achievements in web development."
      />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_70%_70%_at_70%_30%,#000_60%,transparent_100%)]" />
        <div className="bg-honey/5 absolute -left-20 top-1/4 h-40 w-40 rounded-full" />
        <div className="bg-thunder/5 absolute -right-20 bottom-1/4 h-60 w-60 rounded-full" />
        <div className="from-honey/8 absolute -right-10 top-1/2 h-32 w-32 rounded-full bg-gradient-to-bl to-transparent" />
        <div className="from-thunder/8 absolute -left-16 top-3/4 h-48 w-48 rounded-full bg-gradient-to-tr to-transparent" />
      </div>

      {/* Animated Bees */}
      <MotionComponent
        type="div"
        className="absolute right-24 top-40 md:right-48 md:top-56"
        aria-hidden="true"
        animate={{
          y: [0, -18, 0, 22, 0],
          x: [0, -35, 15, 0],
          rotate: [0, -12, 8, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <Image
          src="/img/ryne-dark.png"
          alt="Animated bee"
          width={38}
          height={38}
          className="opacity-55"
        />
      </MotionComponent>

      <MotionComponent
        type="div"
        className="absolute bottom-32 left-20 md:bottom-48 md:left-40"
        aria-hidden="true"
        animate={{
          y: [0, 12, -18, 0],
          x: [0, 28, -15, 0],
          rotate: [0, 14, -6, 0]
        }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      >
        <Image
          src="/img/ryne-dark.png"
          alt="Animated bee"
          width={42}
          height={42}
          className="opacity-45"
        />
      </MotionComponent>

      <MotionComponent
        type="div"
        className="absolute right-8 top-1/3 hidden lg:block"
        aria-hidden="true"
        animate={{
          y: [0, -20, 8, 0],
          x: [0, -18, 25, 0],
          rotate: [0, 10, -15, 0]
        }}
        transition={{ duration: 9.5, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      >
        <Image
          src="/img/ryne-dark.png"
          alt="Animated bee"
          width={32}
          height={32}
          className="opacity-35"
        />
      </MotionComponent>

      <div className="relative mx-auto max-w-6xl px-8">
        {/* Header */}
        <MotionComponent
          type="header"
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <MotionComponent
            type="div"
            className="bg-thunder/10 mb-4 inline-block rounded-full px-6 py-2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-thunder">My Journey</span>
          </MotionComponent>

          <h2 className="mb-6 text-5xl font-bold text-thunder">
            Experience &
            <MotionComponent
              type="span"
              className="ml-3 inline-block bg-gradient-to-r from-honey to-yellow-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Growth
            </MotionComponent>
          </h2>

          <MotionComponent
            type="p"
            className="mx-auto max-w-2xl text-lg text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Here's my journey through education, professional experience, and achievements that have
            shaped me as a developer.
          </MotionComponent>
        </MotionComponent>

        {/* Experience Carousel */}
        <TimelineCarousel
          title="Experience"
          subtitle="Professional roles & internships"
          items={groups.experience}
          accentColor="honey"
        />

        {/* Education — Standalone Card */}
        {groups.education.length > 0 && (
          <MotionComponent
            type="div"
            className="mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
              <MotionComponent
                type="div"
                className="flex shrink-0 flex-col justify-center rounded-2xl bg-thunder p-8 lg:w-56"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white">Education</h3>
                <p className="mt-2 text-sm text-white opacity-70">Academic background</p>
              </MotionComponent>

              <div className="flex-1">
                <div className="py-2">
                  <TimelineCard {...groups.education[0]} />
                </div>
              </div>
            </div>
          </MotionComponent>
        )}

        {/* Certifications Carousel */}
        <TimelineCarousel
          title="Certifications"
          subtitle="Professional credentials"
          items={groups.certifications}
          accentColor="honey"
        />

        {/* Awards Carousel */}
        <TimelineCarousel
          title="Awards"
          subtitle="Recognitions & hackathons"
          items={groups.awards}
          accentColor="thunder"
        />

        {/* CV Download Section */}
        <MotionComponent
          type="div"
          className="mt-16 rounded-2xl border border-neutral-200 bg-white/80 p-8 text-center shadow-sm backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h3 className="mb-3 text-2xl font-bold text-thunder">Want the Full Story?</h3>

          <p className="mb-6 text-neutral-600">
            Download my complete CV for detailed information about my experience, skills, and
            achievements.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <MotionComponent type="div" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <div
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/cv/ryne-dev-cv.pdf';
                  link.download = 'ryne-dev-cv.pdf';
                  link.click();
                }}
                className="cursor-pointer"
              >
                <div className="relative inline-block text-base">
                  <div className="absolute inset-x-0 h-full rounded-lg bg-honey" />
                  <div className="relative flex -translate-y-0 transform items-center gap-2 rounded-lg bg-thunder px-8 py-3 text-white transition duration-300 hover:-translate-x-2 hover:translate-y-1">
                    Download CV
                  </div>
                </div>
              </div>
            </MotionComponent>

            <MotionComponent type="div" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="https://github.com/nicoryne" target="_blank" rel="noopener noreferrer">
                <div className="relative inline-block text-base">
                  <div className="absolute inset-x-0 h-full rounded-lg bg-honey" />
                  <div className="relative flex -translate-y-0 transform items-center gap-2 rounded-lg bg-thunder px-8 py-3 text-white transition duration-300 hover:-translate-x-2 hover:translate-y-1">
                    View GitHub
                  </div>
                </div>
              </Link>
            </MotionComponent>

            <MotionComponent type="div" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="https://www.linkedin.com/in/nicolo-porter-4418b4218/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative inline-block text-base">
                  <div className="absolute inset-x-0 h-full rounded-lg bg-honey" />
                  <div className="relative flex -translate-y-0 transform items-center gap-2 rounded-lg bg-thunder px-8 py-3 text-white transition duration-300 hover:-translate-x-2 hover:translate-y-1">
                    View LinkedIn
                  </div>
                </div>
              </Link>
            </MotionComponent>
          </div>
        </MotionComponent>
      </div>
    </section>
  );
}
