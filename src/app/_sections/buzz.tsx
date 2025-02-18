'use client';
import Image from 'next/image';
import MotionComponent from '@/components/motion-component';
import { useScroll, useSpring, useTransform } from 'framer-motion';

export default function BuzzIntro() {
  const { scrollYProgress } = useScroll();

  const yUp = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const smoothY = useSpring(yUp, { stiffness: 100, damping: 30 });

  return (
    <section id="buzz" className="relative h-[140vh] w-full items-center overflow-hidden pt-20">
      <div className="absolute -z-20 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto flex h-full flex-col items-center justify-evenly gap-16 p-8 xl:w-[1100px]">
        <div className="flex w-full flex-col gap-6 text-center">
          <h1 className="text-4xl font-semibold">
            Let's <span className="text-honey">Buzz</span> Around!
          </h1>
          <p className="mx-auto max-w-96 text-justify text-neutral-500">
            Every task is a canvas to innovate, push boundaries, and ensure that my work reflects my
            best. Just like a bee buzzing with purpose, I strive to do my duties—and do them well.
            From the initial project mockup to the final deployment or revision, I am dedicated to
            keep learning, building, and buzzing forward!
          </p>
        </div>

        <MotionComponent
          type="div"
          style={{ y: smoothY }}
          className="absolute -right-20 top-20 rounded-xl bg-neutral-50 p-2 2xl:-right-80 2xl:w-fit"
        >
          <Image
            src="/img/wbs-cel.webp"
            alt="CESAFI Esports League Website Preview"
            className="h-auto w-full rounded-lg"
            width={500}
            height={500}
          />
        </MotionComponent>

        <MotionComponent
          type="div"
          style={{ y: smoothY }}
          className="absolute -left-20 bottom-20 w-96 rounded-xl bg-neutral-50 p-2 2xl:-right-80 2xl:w-fit"
        >
          <Image
            src="/img/wbs-noted.webp"
            alt="Noted Website Preview"
            className="h-auto w-full rounded-lg"
            width={500}
            height={500}
          />
        </MotionComponent>

        <MotionComponent
          type="div"
          className="absolute left-60 top-80"
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 30, -30, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative">
            <div className="absolute -z-10 h-16 w-16 rounded-full" />
            <Image src="/img/ryne-dark.png" alt="Bee 1" width={50} height={50} />
          </div>
        </MotionComponent>

        <MotionComponent
          type="div"
          className="absolute bottom-60 right-60"
          animate={{
            y: [0, 15, -15, 0],
            x: [0, -40, 40, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative">
            <div className="absolute -z-10 h-16 w-16 rounded-full" />
            <Image src="/img/ryne-dark.png" alt="Bee 2" width={50} height={50} />
          </div>
        </MotionComponent>
      </div>
    </section>
  );
}
