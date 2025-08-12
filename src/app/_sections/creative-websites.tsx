'use client';

import CreativeWebsiteCard from '@/components/creative-website-card';
import MotionComponent from '@/components/motion-component';
import Button3D from '@/components/button-3d';
import { websites } from '@/lib/websites';

export default function CreativeWebsitesSection() {
  return (
    <section
      id="websites"
      className="relative min-h-screen w-full py-24"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="My Portfolio - Websites I Made" />
      <meta
        itemProp="description"
        content="A collection of websites I've designed and developed, showcasing my expertise in web development, UI/UX, and responsive design."
      />

      {/* Background Elements - Same as About Section */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -z-20 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="from-honey/8 absolute -right-32 top-20 h-64 w-64 rounded-full bg-gradient-to-bl to-transparent" />
        <div className="from-thunder/8 absolute -left-24 bottom-32 h-48 w-48 rounded-full bg-gradient-to-tr to-transparent" />
        <div className="from-honey/5 absolute left-1/4 top-1/2 h-32 w-32 rounded-full bg-gradient-to-br to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-8">
        {/* Header */}
        <MotionComponent
          type="header"
          className="mb-20 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <MotionComponent
            type="div"
            className="bg-honey/10 mb-4 inline-block rounded-full px-6 py-2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-honey">Featured Work</span>
          </MotionComponent>

          <h2 className="mb-6 text-5xl font-bold text-thunder">
            Websites I've
            <MotionComponent
              type="span"
              className="ml-3 inline-block bg-gradient-to-r from-honey to-yellow-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Crafted
            </MotionComponent>
          </h2>

          <MotionComponent
            type="p"
            className="mx-auto max-w-2xl text-lg text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            From concept to deployment, here are some projects that showcase my passion for creating
            meaningful digital experiences that solve real problems.
          </MotionComponent>
        </MotionComponent>

        {/* Projects Grid */}
        <div className="space-y-24">
          {websites.map((site, index) => (
            <CreativeWebsiteCard key={index} {...site} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <MotionComponent
          type="div"
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className="mb-6 text-lg text-neutral-600">
            Like what you see? Let's build something amazing together.
          </p>
          <MotionComponent type="div" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a className="relative inline-block text-base" href="#contact">
              <div className="absolute inset-x-0 h-full rounded-lg bg-honey" />
              <div className="relative flex -translate-y-0 transform items-center gap-2 rounded-lg bg-thunder px-8 py-3 text-white transition duration-300 hover:-translate-x-2 hover:translate-y-1">
                <span>🚀</span>
                Start a Project
              </div>
            </a>
          </MotionComponent>
        </MotionComponent>
      </div>
    </section>
  );
}
