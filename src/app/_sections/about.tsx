import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen w-full items-center">
      {/* Background pattern */}
      <div className="absolute -z-20 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto mt-24 flex flex-col items-center justify-evenly gap-16 p-8 xl:w-[1100px]">
        <header className="flex w-full flex-col gap-4 text-center">
          <h1 className="text-4xl font-semibold">About Me – Web Developer & IT Student</h1>
          <p className="text-neutral-600">
            Get to know more about my journey, skills, and passion for web development.
          </p>
        </header>

        <div className="flex w-full flex-col gap-8 md:flex-row">
          <Image
            src="/img/nicolo-1.webp"
            alt="Ryne.dev standing at Changi Airport, Singapore"
            width={1728}
            height={2048}
            className="h-auto w-96 rounded-lg shadow-xl"
            priority
          />
          <div className="flex w-full flex-col gap-8 rounded-lg bg-white p-8">
            <p className="text-left text-lg md:text-justify md:text-2xl">
              I'm a third-year IT student working towards my Bachelor's degree, with a passion for
              web and mobile development. I'm a full-stack developer, specializing in front-end
              development and user experience design, aiming to build accessible and
              high-performance websites.
            </p>

            <p className="text-left text-lg md:text-justify md:text-2xl">
              If you’re looking for a web developer for your next project or need help with your
              business website, feel free to reach out!
            </p>

            <address className="flex items-center gap-4 not-italic">
              <Image
                src="/svg/location-pin.svg"
                alt="Location icon"
                className="h-auto w-8"
                width={64}
                height={64}
              />
              <span aria-label="Location: Cebu City, Philippines">Cebu City, Philippines</span>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
