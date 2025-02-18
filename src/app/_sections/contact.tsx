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
    text: 'X',
    logo: '/svg/x.svg',
    href: 'https://x.com/rynedevph'
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative flex min-h-screen w-full">
      <div className="mx-auto flex flex-col justify-evenly gap-10 p-8 xl:w-[1100px]">
        <header className="flex w-full flex-col gap-4 text-center">
          <h1 className="text-4xl font-semibold">Contact Me</h1>
          <p className="mt-4 text-neutral-500">
            Send me an email, or message me directly on my socials!
          </p>

          <ul className="mx-auto flex gap-16">
            {defaultSocials.map((social, index) => (
              <li key={index} className="list-none">
                <Link
                  className="block rounded-md border p-4"
                  href={social.href}
                  aria-label={`Follow CESAFI Esports League on ${social.text}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={social.logo} alt={`${social.text} Logo`} className="h-6 w-6" />
                </Link>
              </li>
            ))}
          </ul>
        </header>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
