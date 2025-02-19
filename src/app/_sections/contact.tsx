import ContactForm from '@/components/contact-form';
import Link from 'next/link';
import Image from 'next/image';

export const defaultSocials = [
  {
    text: 'Facebook',
    logo: '/svg/fb.svg',
    href: 'https://www.facebook.com/RYNE.DEV'
  },
  {
    text: 'X (Twitter)',
    logo: '/svg/x.svg',
    href: 'https://x.com/rynedevph'
  }
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen w-full"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto flex flex-col justify-evenly gap-10 p-8 xl:w-[1100px]">
        <header className="flex w-full flex-col gap-4 text-center">
          <h2 id="contact-heading" className="text-4xl font-semibold">
            Contact Me
          </h2>
          <p className="mt-4 text-neutral-500">
            Send me an email, or message me directly on my socials!
          </p>

          <nav aria-label="Social media links">
            <ul className="mx-auto flex w-fit gap-16">
              {defaultSocials.map((social, index) => (
                <li key={index} className="list-none">
                  <Link
                    className="focus:ring-primary block rounded-md border p-4 focus:ring-2 focus:ring-offset-2"
                    href={social.href}
                    aria-label={`Visit my ${social.text} profile`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={social.logo}
                      alt={`${social.text} icon`}
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <ContactForm />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Nicolo Ryne Porter',
            url: 'https://www.ryne.dev',
            sameAs: ['https://www.facebook.com/RYNE.DEV', 'https://x.com/rynedevph']
          })
        }}
      />
    </section>
  );
}
