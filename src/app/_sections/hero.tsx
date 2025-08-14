import Button3D from '@/components/button-3d';
import HeroAnimatedWord from '@/components/hero-animated-word';
import MotionComponent from '@/components/motion-component';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] w-full items-center"
      itemScope
      itemType="https://schema.org/Person"
      aria-labelledby="hero-heading"
      aria-describedby="hero-description"
    >
      <meta itemProp="name" content="Ryne" />
      <meta itemProp="jobTitle" content="Full-Stack Web Developer" />
      <meta
        itemProp="description"
        content="A full-stack web developer, and creampuff enthusiast. Passionate on creating visually stunning and high-performing websites."
      />
      <meta itemProp="url" content="https://ryne.dev" />
      <meta itemProp="image" content="/img/ryne-dark.png" />

      <div
        className="absolute -z-10 h-full w-full bg-[url('/svg/honeycomb-pattern.svg')] opacity-5 [background-size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        role="presentation"
        aria-hidden="true"
      />

      <MotionComponent
        type="div"
        className="mx-auto flex flex-col items-center justify-evenly gap-16 p-8 xl:w-[1100px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut', type: 'spring' }}
      >
        <header className="flex w-full flex-col gap-8 md:gap-16" role="banner">
          <div className="flex w-full items-center gap-4">
            <MotionComponent
              type="div"
              animate={{ rotate: [5, -5, 5], scale: [1, 1.05, 1], skewX: [0, 2, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/img/ryne-dark.png"
                alt="Ryne's Developer Logo - A Bee Icon"
                width={256}
                height={256}
                loading="lazy"
                className="h-auto w-10"
                itemProp="image"
                aria-hidden="true"
              />
            </MotionComponent>
            <span className="text-2xl md:text-4xl" itemProp="name">
              Hey there, I'm <span className="font-semibold">Ryne!</span>
            </span>
          </div>

          <h1 className="text-3xl md:text-6xl" id="hero-heading" itemProp="jobTitle">
            A full-stack web developer & creampuff enthusiast.
          </h1>

          <h2 className="text-3xl md:text-6xl" id="hero-description">
            Passionate on building websites that <br /> <HeroAnimatedWord />
          </h2>
        </header>

        <div className="flex w-full flex-col gap-4 md:flex-row md:gap-12">
          <Button3D href={'#websites'} text={'My Websites'} aria-label="View my websites" />
          <Button3D href={'#about'} text={'About Me'} aria-label="Learn more about me" />
          <Button3D href={'#contact'} text={`Let's Talk!`} aria-label="Contact me" />{' '}
        </div>
      </MotionComponent>
    </section>
  );
}
