'use client';

import Image from 'next/image';
import MotionComponent from '@/components/motion-component';

export default function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen w-full items-center py-16 sm:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -z-20 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="from-honey/8 absolute -right-32 top-20 h-64 w-64 rounded-full bg-gradient-to-bl to-transparent" />
        <div className="from-thunder/8 absolute -left-24 bottom-32 h-48 w-48 rounded-full bg-gradient-to-tr to-transparent" />
        <div className="from-honey/5 absolute left-1/4 top-1/2 h-32 w-32 rounded-full bg-gradient-to-br to-transparent" />
      </div>

      {/* Animated Bees */}
      <MotionComponent
        type="div"
        className="absolute left-16 top-24 md:left-32 md:top-40"
        aria-hidden="true"
        animate={{
          y: [0, -22, 0, 18, 0],
          x: [0, 32, -18, 0],
          rotate: [0, 8, -12, 0]
        }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <Image
          src="/img/ryne-dark.png"
          alt="Animated bee"
          width={36}
          height={36}
          className="opacity-50"
        />
      </MotionComponent>

      <MotionComponent
        type="div"
        className="absolute bottom-24 right-20 md:bottom-40 md:right-36"
        aria-hidden="true"
        animate={{
          y: [0, 16, -12, 0],
          x: [0, -25, 20, 0],
          rotate: [0, -10, 14, 0]
        }}
        transition={{ duration: 8.2, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
      >
        <Image
          src="/img/ryne-dark.png"
          alt="Animated bee"
          width={40}
          height={40}
          className="opacity-45"
        />
      </MotionComponent>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-evenly gap-8 px-4 sm:mt-16 sm:gap-12 sm:px-6 lg:mt-24 lg:gap-16 lg:px-8">
        <MotionComponent
          type="header"
          className="flex w-full flex-col gap-3 text-center sm:gap-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl xl:text-5xl">
            About Me – Web Developer & IT Student
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-neutral-600 sm:text-base lg:text-lg">
            Get to know more about my journey, skills, and passion for web development.
          </p>
        </MotionComponent>

        <div className="flex w-full flex-col gap-6 sm:gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* Image Container */}
          <MotionComponent
            type="div"
            className="flex justify-center lg:flex-shrink-0 lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <Image
              src="/img/nicolo-1.webp"
              alt="Ryne.dev standing at Changi Airport, Singapore"
              width={1728}
              height={2048}
              className="h-auto w-64 rounded-lg shadow-xl sm:w-80 lg:w-96"
              priority
            />
          </MotionComponent>

          {/* Content Container */}
          <MotionComponent
            type="div"
            className="flex w-full flex-col gap-4 rounded-lg bg-white p-4 shadow-sm sm:gap-6 sm:p-6 lg:gap-8 lg:p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-left text-sm leading-relaxed sm:text-base lg:text-justify lg:text-lg xl:text-xl">
              I'm a fourth-year IT student working towards my Bachelor's degree, with a passion for
              web and mobile development. I'm a full-stack developer, specializing in front-end
              development and user experience design, aiming to build accessible and
              high-performance websites.
            </p>

            <p className="text-left text-sm leading-relaxed sm:text-base lg:text-justify lg:text-lg xl:text-xl">
              If you're looking for a web developer for your next project or need help with your
              business website, feel free to reach out!
            </p>

            <address className="mt-2 flex items-center gap-3 not-italic sm:mt-4 sm:gap-4">
              <Image
                src="/svg/location-pin.svg"
                alt="Location icon"
                className="h-auto w-6 flex-shrink-0 sm:w-8"
                width={64}
                height={64}
              />
              <span
                aria-label="Location: Cebu City, Philippines"
                className="text-sm text-neutral-700 sm:text-base lg:text-lg"
              >
                Cebu City, Philippines
              </span>
            </address>
          </MotionComponent>
        </div>
      </div>
    </section>
  );
}
