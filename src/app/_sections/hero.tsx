import Button3D from '@/components/button-3d';
import HeroAnimatedWord from '@/components/hero-animated-word';
import MotionComponent from '@/components/motion-component';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-[80vh] w-full items-center">
      {/* Background */}
      <div className="absolute -z-10 h-full w-full bg-[url('/svg/honeycomb-pattern.svg')] opacity-5 [background-size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      {/* Content */}
      <div className="mx-auto flex flex-col items-center justify-evenly gap-16 p-8 xl:w-[1100px]">
        <header className="flex w-full flex-col gap-8 md:gap-16">
          <div className="flex w-full items-center gap-4">
            <MotionComponent
              type="div"
              animate={{ rotate: [5, -5, 5], scale: [1, 1.05, 1], skewX: [0, 2, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/img/ryne-dark.png"
                alt="RYNE.DEV Bee Logo"
                width={256}
                height={256}
                className="h-auto w-10"
              />
            </MotionComponent>
            <span className="text-2xl md:text-4xl">
              Hey there, I'm <span className="font-semibold">Ryne!</span>
            </span>
          </div>
          <h1 className="text-3xl md:text-6xl">
            A full-stack web developer, and creampuff enthusiast.
          </h1>
          <h2 className="text-3xl md:text-6xl">
            Passionate to create websites that <br /> <HeroAnimatedWord />
          </h2>
        </header>
        <div className="flex w-full flex-col gap-4 md:flex-row md:gap-12">
          <Button3D href={'#websites'} text={'My Websites'} />
          <Button3D href={'#about'} text={'About Me'} />
          <Button3D href={'#contact'} text={`Let's Talk!`} />
        </div>
      </div>
    </section>
  );
}
