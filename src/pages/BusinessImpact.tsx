// src/pages/AboutUs.tsx

import PageTitle from '@/components/shared/PageTitle';
import { content } from '@/data/content';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Box, ChevronRight, Home } from 'lucide-react';
import { useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

// Define the aboutPage data (you can move this to your content file)
const aboutPage = {
  heroTitle: 'Business Impact',
  breadcrumbText: 'Business Impact',
  heroImage: '/images/about-hero.jpg', // Update with your actual image path
};

function AboutHero() {
  return (
    <section className="px-3 pb-3 pt-[100px]">
      <div className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-[#061f20] dark:bg-[#0a1f1d]">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
          alt="Business Impact"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-35 dark:opacity-30"
        />

        <div className="absolute inset-0 bg-[#061f20]/70 dark:bg-[#0a1f1d]/80" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.16] dark:opacity-[0.10]">
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
            {aboutPage.heroTitle}
          </motion.h1>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.75, ease: 'easeOut' }}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/10 dark:bg-white/5 px-5 py-2.5 text-[14px] font-semibold text-white/75 backdrop-blur-md"
          >
            <Home className="h-4 w-4 fill-[#188b88] text-[#188b88] dark:fill-[#4ecdc4] dark:text-[#4ecdc4]" />

            <Link
              to="/"
              className="transition-colors duration-300 hover:text-[#188b88] dark:hover:text-[#4ecdc4]"
            >
              Home
            </Link>

            <ChevronRight className="h-4 w-4 text-white/45" />

            <span className="text-white">{aboutPage.breadcrumbText}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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

function ChooseBestSection() {
  const { bussinessImpact } = content;

  return (
    <section className="about-section px-4 py-24 sm:px-6 lg:px-12 xl:px-20 bg-[var(--color-base)] dark:bg-[#0a1a18]">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="about-reveal mb-6">
              <SectionBadge>{bussinessImpact.chooseBestBadge}</SectionBadge>
            </div>

            <h2 className="about-reveal max-w-[650px] text-[44px] font-normal leading-[1.08] tracking-[-0.055em] text-[#071515] dark:text-[#e8edee] sm:text-[56px] lg:text-[64px]">
              {bussinessImpact.chooseBestHeading}{' '}
              <span className="text-[#188b88] dark:text-[#4ecdc4]">
                {bussinessImpact.chooseBestHighlight}.
              </span>
            </h2>
          </div>

          <div className="about-reveal">
            <PillButton to="/contact">{bussinessImpact.chooseBestCta}</PillButton>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {bussinessImpact.featureCards.map((item: any) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillButton({
  to,
  children,
  dark = false,
}: {
  to: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`group inline-flex h-[46px] items-center rounded-full pl-6 pr-1.5 text-[14px] font-bold transition-colors duration-300 ${
        dark
          ? 'bg-[#071515] text-white hover:bg-black dark:bg-[#0f1f1d] dark:hover:bg-[#1a2f2d]'
          : 'bg-[#188b88] text-white hover:bg-[#157a76] dark:bg-[#4ecdc4] dark:text-[#0a1a18] dark:hover:bg-[#3dbdb5]'
      }`}
    >
      {children}

      <span
        className={`ml-4 flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${
          dark
            ? 'bg-white text-[#071515] dark:bg-[#0a1a18] dark:text-white'
            : 'bg-[#071515] text-white dark:bg-[#0a1a18] dark:text-[#e8edee]'
        }`}
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

function FeatureCard({ item }: { item: any }) {
  const Icon = item.icon;

  return (
    <motion.div
      className="about-reveal group rounded-[7px] bg-white p-10 text-[#071515] transition-all duration-500 hover:bg-[#188b88] hover:text-white hover:shadow-[0_24px_70px_rgba(24,139,136,0.22)] dark:bg-[#0f1f1d] dark:text-[#e8edee] dark:hover:bg-[#4ecdc4] dark:hover:text-[#0a1a18] dark:hover:shadow-[0_24px_70px_rgba(78,205,196,0.22)]"
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <div className="mb-10 flex h-14 w-14 items-center justify-center text-[#188b88] transition-colors duration-500 group-hover:text-white/85 dark:text-[#4ecdc4] dark:group-hover:text-[#0a1a18]/85">
        <Icon className="h-12 w-12 stroke-[1.15]" />
      </div>

      <h3 className="mb-6 text-[22px] font-bold leading-[1.2] tracking-[-0.04em] text-[#071515] transition-colors duration-500 group-hover:text-white dark:text-[#e8edee] dark:group-hover:text-[#0a1a18]">
        {item.title}
      </h3>

      {/* Bullet Points */}
      {item.points && item.points.length > 0 && (
        <ul className="space-y-3 max-w-[330px]">
          {item.points.map((point: string, idx: number) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-[15px] font-medium leading-[1.4] text-[#536363] transition-colors duration-500 group-hover:text-white/90 dark:text-[#9daaaa] dark:group-hover:text-[#0a1a18]/85"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#188b88] transition-colors duration-500 group-hover:bg-white dark:bg-[#4ecdc4] dark:group-hover:bg-[#0a1a18]" />
              {point}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default function BusinessImpact() {
  const pageRef = useRef<HTMLElement>(null);
  return (
    <>
      <PageTitle title="Business Impact" description="Welcome to Updeck - Your trusted partner" />
      <main ref={pageRef} className="overflow-hidden bg-[var(--color-base)] dark:bg-[#0a1a18]">
        <AboutHero />
        <ChooseBestSection />
      </main>
    </>
  );
}
