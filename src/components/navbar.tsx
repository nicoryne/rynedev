import Link from 'next/link';
import Image from 'next/image';
import BurgerMenu from './burger-menu';
import { navigationLinks } from '@/lib/navigation-links';

export default function Navbar() {
  return (
    <nav className="fixed inset-0 top-0 z-50 h-24 w-full bg-white">
      <div className="mx-auto p-8 xl:w-[1100px]">
        <div className="flex justify-between">
          <Link href="#" className="flex items-center gap-1">
            <span className="font-semibold">RYNE</span>
            <span className="text-honey font-bold">.</span> <span>DEV</span>
          </Link>

          <div className="block md:hidden">
            <BurgerMenu />
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-6">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-thunder hover:text-honey text-base transition-colors duration-200 ease-in"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
