import Navbar from '@/components/navbar';

import HeroSection from './_sections/hero';
import WebsiteSection from './_sections/websites';
import BuzzIntro from './_sections/buzz';
import AboutSection from './_sections/about';
import ContactSection from './_sections/contact';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto mt-24">
        {/* Hero */}
        <HeroSection />

        {/* Buzz */}
        <BuzzIntro />

        {/* Websites */}
        <WebsiteSection />

        {/* About */}
        <AboutSection />

        {/* Contact */}
        <ContactSection />
      </main>
    </>
  );
}
