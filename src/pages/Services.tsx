// src/pages/Services.tsx

import PageTitle from '@/components/shared/PageTitle';
import { content } from '@/data/content';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  BarChart3,
  Box,
  ChevronRight,
  GraduationCap,
  Home,
  Leaf,
  Megaphone,
  Monitor,
  Users,
} from 'lucide-react';
import { useEffect, useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

// Icon mapping for dynamic rendering
const iconMap: Record<string, any> = {
  BarChart3,
  Users,
  Leaf,
  GraduationCap,
  Monitor,
  Megaphone,
};

function SectionBadge({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-[2px] border border-dashed px-4 py-2 ${
        dark
          ? 'border-white/15 text-white'
          : 'border-[#c3cece] text-[#071515] dark:border-[#2a3f3d] dark:text-white'
      }`}
    >
      <Box
        className={`h-4 w-4 ${
          dark
            ? 'fill-[#4ecdc4] text-[#4ecdc4]'
            : 'fill-[#188b88] text-[#188b88] dark:fill-[#4ecdc4] dark:text-[#4ecdc4]'
        }`}
      />

      <span className="text-[13px] font-bold uppercase leading-none tracking-[0.2em]">
        {children}
      </span>
    </div>
  );
}

function ServicesHero() {
  const { servicesPage } = content;

  return (
    <section className="px-3 pb-3 pt-[100px]">
      <div className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-[#061f20]">
        <img
          src={servicesPage.heroImage}
          alt="Services"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
        />

        <div className="absolute inset-0 bg-[#061f20]/70" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
          <div className="absolute -left-24 top-0 h-full w-[34%] rotate-[-22deg] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.2)_0px,rgba(255,255,255,0.2)_1px,transparent_1px,transparent_13px)]" />
          <div className="absolute right-0 top-0 h-full w-[34%] bg-[repeating-linear-gradient(75deg,rgba(255,255,255,0.18)_0px,rgba(255,255,255,0.18)_1px,transparent_1px,transparent_13px)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-[1320px] flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-12">
          <motion.h1
            initial={{ y: 34, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="text-[60px] font-normal leading-none tracking-[-0.055em] text-white sm:text-[82px] lg:text-[92px]"
          >
            {servicesPage.heroTitle}
          </motion.h1>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.75, ease: 'easeOut' }}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-[14px] font-semibold text-white/75 backdrop-blur-md"
          >
            <Home className="h-4 w-4 fill-[#188b88] text-[#188b88] dark:fill-[#4ecdc4] dark:text-[#4ecdc4]" />

            <Link to="/" className="transition-colors duration-300 hover:text-[#4ecdc4]">
              Home
            </Link>

            <ChevronRight className="h-4 w-4 text-white/45" />

            <span className="text-white">{servicesPage.breadcrumbText}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: any }) {
  const Icon = iconMap[service.icon] || BarChart3;

  return (
    <motion.article
      className="service-reveal group rounded-[8px] bg-white p-10 text-[#071515] transition-all duration-500 hover:bg-[#188b88] hover:text-white hover:shadow-[0_24px_70px_rgba(24,139,136,0.22)] dark:bg-[#0f1f1d] dark:text-white dark:hover:bg-[#4ecdc4] dark:hover:text-[#0a1a18] sm:p-12 lg:min-h-[390px]"
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <div className="mb-10 flex h-[86px] w-[86px] items-center justify-center rounded-full border border-[#cbdada] bg-[#e9f1f1] text-[#188b88] transition-all duration-500 group-hover:border-white/25 group-hover:bg-white group-hover:text-[#188b88] dark:border-[#2a3f3d] dark:bg-[#152624] dark:text-[#4ecdc4] dark:group-hover:bg-[#0a1a18] dark:group-hover:text-[#4ecdc4]">
        <Icon className="h-11 w-11 stroke-[1.7]" />
      </div>

      <h3 className="mb-6 max-w-[330px] text-[28px] font-bold leading-[1.22] tracking-[-0.055em] text-[#071515] transition-colors duration-500 group-hover:text-white dark:text-white dark:group-hover:text-[#0a1a18]">
        {service.title}
      </h3>

      {service.purpose && (
        <p className="mb-6 max-w-[360px] text-[17px] font-medium leading-[1.55] tracking-[-0.03em] text-[#435151] transition-colors duration-500 group-hover:text-white/90 dark:text-[#9daaaa] dark:group-hover:text-[#0a1a18]/85">
          {service.purpose}
        </p>
      )}

      {/* Bullet Points */}
      {service.points && service.points.length > 0 && (
        <ul className="mb-10 space-y-2.5 max-w-[380px]">
          {service.points.map((point: string, idx: number) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-[15px] font-medium leading-[1.4] text-[#435151] transition-colors duration-500 group-hover:text-white/90 dark:text-[#9daaaa] dark:group-hover:text-[#0a1a18]/85"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#188b88] transition-colors duration-500 group-hover:bg-white dark:bg-[#4ecdc4] dark:group-hover:bg-[#0a1a18]" />
              {point}
            </li>
          ))}
        </ul>
      )}

      {/* <Link
        to={servicesPage.ctaLink}
        className="inline-flex items-center gap-3 text-[16px] font-bold leading-none text-[#071515] transition-colors duration-500 group-hover:text-white dark:text-white dark:group-hover:text-[#0a1a18]"
      >
        {servicesPage.ctaText}

        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#071515] text-white transition-all duration-500 group-hover:bg-white group-hover:text-[#071515] group-hover:rotate-45 dark:bg-[#4ecdc4] dark:text-[#0a1a18] dark:group-hover:bg-[#0a1a18] dark:group-hover:text-white">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </Link> */}
    </motion.article>
  );
}

function ServicesGridSection() {
  const { servicesPage } = content;
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-reveal',
        {
          y: 48,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-12 xl:px-20">
      <div ref={sectionRef} className="mx-auto max-w-[1320px]">
        <div className="mb-14 text-center">
          <div className="service-reveal mb-6">
            <SectionBadge>{servicesPage.badgeText}</SectionBadge>
          </div>

          <h2 className="service-reveal text-[44px] font-normal leading-[1.08] tracking-[-0.055em] text-[#071515] dark:text-white sm:text-[56px] lg:text-[64px]">
            {servicesPage.headingLine1}{' '}
            <span className="text-[#188b88] dark:text-[#4ecdc4]">
              {servicesPage.headingHighlight}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {servicesPage.services.map((service: any) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <PageTitle title="Contact Us" description="Welcome to Updeck - Your trusted partner" />
      <main className="overflow-hidden bg-[var(--color-base)] dark:bg-[#0a1a18]">
        <ServicesHero />
        <ServicesGridSection />
      </main>
    </>
  );
}
