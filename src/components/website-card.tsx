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
    <article className="w-full font-garet" itemScope itemType="https://schema.org/CreativeWork">
      <meta itemProp="url" content={href} />
      <meta itemProp="image" content={imageUrl} />
      <meta itemProp="description" content={description} />

      <Link href={href} target="_blank" rel="noopener noreferrer" itemProp="url">
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
            alt={`${title} - Website Preview`}
            width={1920}
            height={1080}
            loading="lazy"
            itemProp="image"
          />
          <h3 className="text-base font-semibold" itemProp="name">
            {title}
          </h3>
          <p className="mt-2 text-xs text-neutral-500" itemProp="description">
            {description}
          </p>
        </MotionComponent>
      </Link>
    </article>
  );
}
