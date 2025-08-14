import Navbar from '@/components/navbar';

import HeroSection from './_sections/hero';
import CreativeWebsitesSection from './_sections/creative-websites';
import TimelineSection from './_sections/timeline';
import BuzzIntro from './_sections/buzz';
import AboutSection from './_sections/about';
import ContactSection from './_sections/contact';
import FooterSection from './_sections/footer';
import FooterReveal from '@/components/footer-reveal';

export default function Home() {
  return (
    <>
      <Navbar />

      <FooterReveal
        children={
          <main className="mx-auto pt-8">
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
        }
        footer={<FooterSection />}
      />
    </>
  );
}
