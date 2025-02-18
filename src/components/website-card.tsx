import Image from 'next/image';
import MotionComponent from './motion-component';
import Link from 'next/link';

export interface WebsiteCardProps {
  imageUrl: string;
  title: string;
  description: string;
  href: string;
}

export default function WebsiteCard({ imageUrl, title, description, href }: WebsiteCardProps) {
  return (
    <Link className="font-garet w-full" href={href} target="_blank" rel="noopener noreferrer">
      <MotionComponent
        type="div"
        className="relative flex flex-col gap-4 rounded-lg bg-neutral-50 p-8 shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
      >
        <Image
          className="rounded-lg"
          src={imageUrl}
          alt={`${title} Landing Page`}
          width={1920}
          height={1080}
        />
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-2 text-xs text-neutral-500">{description}</p>
      </MotionComponent>
    </Link>
  );
}
