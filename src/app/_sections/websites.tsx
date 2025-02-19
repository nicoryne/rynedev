import WebsiteCard from '@/components/website-card';
import { websites } from '@/lib/websites';

export default function WebsiteSection() {
  return (
    <section
      id="websites"
      className="relative flex min-h-screen w-full items-center"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="My Portfolio - Websites I Made" />
      <meta
        itemProp="description"
        content="A collection of websites I've designed and developed, showcasing my expertise in web development, UI/UX, and responsive design."
      />

      <div className="mx-auto mt-24 flex flex-col items-center justify-evenly gap-16 p-8 xl:w-[1100px]">
        <header className="flex w-full flex-col gap-4 text-center">
          <h2 className="text-4xl font-semibold">My Portfolio - Websites I Made</h2>
          <p className="mt-4 text-neutral-500">
            Check out these projects I built— hope you like 'em!
          </p>
        </header>
        <div className="grid gap-12">
          {websites.map((site, index) => (
            <WebsiteCard key={index} {...site} />
          ))}
        </div>
      </div>
    </section>
  );
}
