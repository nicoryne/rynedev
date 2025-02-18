import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen w-full items-center">
      <div className="absolute -z-20 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto mt-24 flex flex-col items-center justify-evenly gap-16 p-8 xl:w-[1100px]">
        <header className="flex w-full flex-col gap-4 text-center">
          <h1 className="text-4xl font-semibold">Stuff About Me</h1>

          <p className="text-neutral-500">They may or may not be interesting, but they're mine!</p>
        </header>
        <div className="flex w-full flex-col gap-8 md:flex-row">
          <Image
            src="/img/nicolo-1.webp"
            alt="Ryne.dev at Changi Airport"
            width={1728}
            height={2048}
            className="h-auto w-96 rounded-lg shadow-xl"
          />
          <div className="flex w-full flex-col gap-8 rounded-lg bg-white p-8">
            <p className="text-justify text-lg md:text-2xl">
              I'm a third-year IT student working towards my Bachelor's degree. Looking to do some
              freelance work to leverage my skills and gain more practical experience.
            </p>

            <p className="text-justify text-lg md:text-2xl">
              If you have any project ideas, or are looking for someone to do a website for your
              business, feel free to contact me!
            </p>

            <span className="flex items-center gap-4">
              <Image
                src="/svg/location-pin.svg"
                alt="Location Pin Image"
                className="h-auto w-8"
                width={64}
                height={64}
              />
              Cebu City, Philippines
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
