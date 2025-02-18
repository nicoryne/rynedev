import Link from 'next/link';

interface Button3DProps {
  href: string;
  text: string;
}

export default function Button3D({ href, text }: Button3DProps) {
  return (
    <Link className="relative text-base" href={href}>
      <div className="bg-honey absolute inset-x-0 h-full rounded-lg" />
      <div className="bg-thunder active:text-honey relative -translate-y-0 transform rounded-lg px-8 py-2 text-white transition duration-300 hover:-translate-x-2 hover:translate-y-1">
        {text}
      </div>
    </Link>
  );
}
