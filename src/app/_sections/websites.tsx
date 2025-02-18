import WebsiteCard from '@/components/website-card';
import { websites } from '@/lib/websites';

export default function WebsiteSection() {
  return (
    <section id="websites" className="relative flex min-h-screen w-full items-center">
      <div className="mx-auto mt-24 flex flex-col items-center justify-evenly gap-16 p-8 xl:w-[1100px]">
        <header className="flex w-full flex-col gap-4 text-center">
          <h1 className="text-4xl font-semibold">Websites I Made!</h1>
          <p className="mt-4 text-neutral-500">
            Check out these projects I built— hope you like 'em!
          </p>
        </header>
        <div className="grid gap-12">
          {websites.map(({ imageUrl, title, description, href }, index) => (
            <WebsiteCard imageUrl={imageUrl} title={title} description={description} href={href} />
          ))}
        </div>
      </div>
    </section>
  );
}
