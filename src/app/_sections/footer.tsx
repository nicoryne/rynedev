'use client';

import Link from 'next/link';
import { defaultSocials } from './contact';
import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer className="fixed inset-0 z-0 h-screen w-screen overflow-hidden bg-honey">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-thunder">
        {/* Main Brand Text */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-garet text-6xl font-black tracking-tight md:text-8xl lg:text-9xl">
            RYNE.DEV
          </h2>
          <p className="text-xl font-medium opacity-80 md:text-2xl">Crafting Digital Experiences</p>
        </div>

        {/* Animated Links */}
        <nav className="mb-16" aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-8 text-lg font-medium md:gap-12 md:text-xl">
            <li>
              <Link
                href="#about"
                className="transition-transform duration-300 hover:scale-110 hover:opacity-70"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#creative-websites"
                className="transition-transform duration-300 hover:scale-110 hover:opacity-70"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="#timeline"
                className="transition-transform duration-300 hover:scale-110 hover:opacity-70"
              >
                Timeline
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="transition-transform duration-300 hover:scale-110 hover:opacity-70"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Links */}
        <nav className="mb-16" aria-label="Footer social media links">
          <ul className="flex gap-8">
            {defaultSocials.map((social, index) => (
              <li key={index} className="list-none">
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.text} profile`}
                  className="bg-thunder/10 hover:bg-thunder/20 block rounded-full p-4 transition-all duration-300 hover:scale-110"
                >
                  <Image
                    src={social.logo}
                    alt={`${social.text} icon`}
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm opacity-70 md:text-base">
            © {new Date().getFullYear()} RYNE.DEV. All rights reserved.
          </p>
          <p className="mt-2 text-xs opacity-50 md:text-sm">Made with ❤️ and lots of coffee</p>
        </div>

        {/* Decorative Elements */}
        <div className="bg-thunder/20 absolute left-1/4 top-1/4 h-2 w-2 animate-pulse rounded-full"></div>
        <div className="bg-thunder/15 absolute right-1/3 top-1/3 h-3 w-3 animate-pulse rounded-full delay-1000"></div>
        <div className="bg-thunder/25 absolute bottom-1/4 left-1/3 h-1 w-1 animate-pulse rounded-full delay-500"></div>
        <div className="bg-thunder/10 delay-1500 absolute bottom-1/3 right-1/4 h-2 w-2 animate-pulse rounded-full"></div>
      </div>
    </footer>
  );
}
