'use client';
import Link from 'next/link';
import Image from 'next/image';
import BurgerMenu from './burger-menu';
import { navigationLinks } from '@/lib/navigation-links';
import MotionComponent from './motion-component';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-0 top-0 z-50 h-20 w-screen px-4 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-lg backdrop-blur-lg' : 'bg-transparent'}`}
    >
      <div className="mx-auto p-8 xl:w-[1100px]">
        <div className="flex justify-between">
          <Link href="#" className="flex items-center gap-1">
            <span className="font-semibold">RYNE</span>
            <span className="font-bold text-honey">.</span> <span>DEV</span>
          </Link>

          <div className="block md:hidden">
            <BurgerMenu />
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-6">
              {navigationLinks.map((link, index) => (
                <MotionComponent
                  type="li"
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: 'easeIn',
                    delay: (navigationLinks.length - 1 - index) * 0.1,
                    type: 'spring'
                  }}
                >
                  <Link
                    href={link.href}
                    className="text-base text-thunder transition-colors duration-200 ease-in hover:text-honey"
                  >
                    {link.text}
                  </Link>
                </MotionComponent>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
