'use client';
import Image from 'next/image';
import MotionComponent from '@/components/motion-component';
import { useScroll, useSpring, useTransform } from 'framer-motion';

export default function BuzzIntro() {
  const { scrollYProgress } = useScroll();
  const yUp = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const smoothY = useSpring(yUp, { stiffness: 100, damping: 30 });

  return (
    <section
      id="buzz"
      className="relative h-screen w-full items-center overflow-hidden pt-20"
      aria-labelledby="buzz-heading"
    >
      <div className="absolute -z-20 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto flex h-full flex-col items-center justify-evenly gap-16 p-8 xl:w-[1100px]">
        <div className="flex w-full flex-col gap-6 text-center">
          <h2 id="buzz-heading" className="text-4xl font-semibold md:text-5xl">
            Let’s <span className="text-honey">Buzz</span> Around!
          </h2>
          <p className="mx-auto max-w-96 text-justify text-lg text-neutral-500 md:text-2xl">
            Every task is a canvas to innovate, push boundaries, and ensure that my work reflects my
            best. Just like a bee buzzing with purpose, I strive to do my duties— and do them well.
            From the initial project mockup to the final deployment or revision, I am dedicated to
            keep learning, building, and buzzing forward!
          </p>
        </div>

        <MotionComponent
          type="div"
          className="absolute left-60 top-20 md:top-40"
          aria-hidden="true"
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 30, -30, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative">
            <div className="absolute -z-10 h-16 w-16 rounded-full" />
            <Image
              src="/img/ryne-dark.png"
              alt="Ryne's Developer Logo - A Bee Icon"
              width={50}
              height={50}
            />
          </div>
        </MotionComponent>

        <MotionComponent
          type="div"
          className="absolute bottom-20 right-60 md:bottom-40"
          aria-hidden="true"
          animate={{
            y: [0, 15, -15, 0],
            x: [0, -40, 40, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative">
            <div className="absolute -z-10 h-16 w-16 rounded-full" />
            <Image
              src="/img/ryne-dark.png"
              alt="Ryne's Developer Logo - A Bee Icon"
              width={50}
              height={50}
            />
          </div>
        </MotionComponent>
      </div>
    </section>
  );
}
