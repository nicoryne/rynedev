'use client';

import MotionComponent from '@/components/motion-component';
import TimelineItem from '@/components/timeline-item';
import Button3D from '@/components/button-3d';
import Image from 'next/image';
import { timelineData } from '@/lib/timeline-data';

export default function TimelineSection() {
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
        <div className="absolute top-1/4 -left-20 h-40 w-40 rounded-full bg-honey/5" />
        <div className="absolute bottom-1/4 -right-20 h-60 w-60 rounded-full bg-thunder/5" />
        <div className="absolute top-1/2 -right-10 h-32 w-32 rounded-full bg-gradient-to-bl from-honey/8 to-transparent" />
        <div className="absolute top-3/4 -left-16 h-48 w-48 rounded-full bg-gradient-to-tr from-thunder/8 to-transparent" />
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
        className="absolute top-1/3 right-8 hidden lg:block"
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

      <div className="relative mx-auto max-w-4xl px-8">
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
            className="mb-4 inline-block rounded-full bg-thunder/10 px-6 py-2"
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
            Here's my journey through education, professional experience, and achievements 
            that have shaped me as a developer.
          </MotionComponent>
        </MotionComponent>

        {/* Timeline */}
        <div className="relative">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>

        {/* CV Download Section */}
        <MotionComponent
          type="div"
          className="mt-16 rounded-2xl bg-gradient-to-br from-honey/10 to-thunder/5 p-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <MotionComponent
            type="div"
            className="mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-4xl">📄</span>
          </MotionComponent>
          
          <h3 className="mb-3 text-2xl font-bold text-thunder">
            Want the Full Story?
          </h3>
          
          <p className="mb-6 text-neutral-600">
            Download my complete CV for detailed information about my experience, 
            skills, and achievements.
          </p>
          
          <MotionComponent
            type="div"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              onClick={() => {
                // You can replace this with actual CV download logic
                const link = document.createElement('a');
                link.href = '/cv/ryne-dev-cv.pdf'; // Add your CV file to public/cv/
                link.download = 'Ryne-Dev-CV.pdf';
                link.click();
              }}
              className="cursor-pointer"
            >
              <div className="relative text-base inline-block">
                <div className="bg-honey absolute inset-x-0 h-full rounded-lg" />
                <div className="bg-thunder relative -translate-y-0 transform rounded-lg px-8 py-3 text-white transition duration-300 hover:-translate-x-2 hover:translate-y-1 flex items-center gap-2">
                  <span>📥</span>
                  Download CV
                </div>
              </div>
            </div>
          </MotionComponent>
        </MotionComponent>
      </div>
    </section>
  );
}