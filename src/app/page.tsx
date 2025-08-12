import Navbar from '@/components/navbar';

import HeroSection from './_sections/hero';
import CreativeWebsitesSection from './_sections/creative-websites';
import TimelineSection from './_sections/timeline';
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

        {/* Creative Websites */}
        <CreativeWebsitesSection />

        {/* Timeline */}
        <TimelineSection />

        {/* About */}
        <AboutSection />

        {/* Contact */}
        <ContactSection />
      </main>
    </>
  );
}
