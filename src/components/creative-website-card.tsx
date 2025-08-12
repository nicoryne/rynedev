'use client';

import Image from 'next/image';
import Link from 'next/link';
import MotionComponent from './motion-component';
import { WebsiteCardProps } from './website-card';

interface CreativeWebsiteCardProps extends WebsiteCardProps {
    index: number;
    technologies?: string[];
}

export default function CreativeWebsiteCard({
    imageUrl,
    title,
    description,
    href,
    index,
    technologies = []
}: CreativeWebsiteCardProps) {
    const isEven = index % 2 === 0;

    return (
        <article
            className="group relative"
            itemScope
            itemType="https://schema.org/CreativeWork"
        >
            <MotionComponent
                type="div"
                className={`flex flex-col gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } items-center`}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
                viewport={{ once: true }}
            >
                {/* Image Container */}
                <div className="relative w-full lg:w-1/2">
                    <MotionComponent
                        type="div"
                        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-honey/10 to-thunder/5 p-2"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative overflow-hidden rounded-xl">
                            <Image
                                src={imageUrl}
                                alt={`${title} - Website Preview`}
                                width={600}
                                height={400}
                                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                                itemProp="image"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-thunder/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Live Link Button */}
                            <Link
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-4 right-4 rounded-full bg-honey px-4 py-2 text-sm font-semibold text-thunder opacity-0 transition-all duration-300 hover:bg-honey/90 group-hover:opacity-100"
                            >
                                View Live →
                            </Link>
                        </div>
                    </MotionComponent>
                </div>

                {/* Content Container */}
                <div className={`w-full space-y-4 lg:w-1/2 ${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}>
                    <MotionComponent
                        type="div"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-thunder" itemProp="name">
                            {title}
                        </h3>

                        <p className="mt-3 text-neutral-600 leading-relaxed" itemProp="description">
                            {description}
                        </p>

                        {/* Technologies */}
                        {technologies.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                                {technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="rounded-full bg-honey/10 px-3 py-1 text-xs font-medium text-thunder"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </MotionComponent>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -z-10 h-32 w-32 rounded-full bg-honey/5 ${isEven ? '-left-16 top-8' : '-right-16 top-8'
                    }`} />
            </MotionComponent>
        </article>
    );
}