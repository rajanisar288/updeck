// src/pages/AboutUs.tsx

import PageTitle from '@/components/shared/PageTitle';
import { content } from '@/data/content';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Box, Check, ChevronRight, Home } from 'lucide-react';
import { useEffect, useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

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
          ? 'bg-[#071515] text-white hover:bg-black'
          : 'bg-[#188b88] text-white hover:bg-[#157a76]'
      }`}
    >
      {children}

      <span
        className={`ml-4 flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${
          dark ? 'bg-white text-[#071515]' : 'bg-[#071515] text-white'
        }`}
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

function PatternBackground() {
  return (
    <>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[28%] opacity-[0.22] dark:opacity-[0.12]">
        <div className="absolute -left-28 top-0 h-full w-full rotate-[-18deg] bg-[repeating-linear-gradient(90deg,rgba(7,21,21,0.24)_0px,rgba(7,21,21,0.24)_1px,transparent_1px,transparent_12px)]" />
      </div>

      <div className="pointer-events-none absolute bottom-0 right-0 h-full w-[30%] opacity-[0.22] dark:opacity-[0.12]">
        <div className="absolute -right-28 bottom-0 h-full w-full rotate-[-18deg] bg-[repeating-linear-gradient(90deg,rgba(7,21,21,0.24)_0px,rgba(7,21,21,0.24)_1px,transparent_1px,transparent_12px)]" />
      </div>
    </>
  );
}

function FeatureCard({ item }: { item: any }) {
  const Icon = item.icon;

  return (
    <motion.div
      className="about-reveal group h-full rounded-[7px] bg-white p-10 text-[#071515] transition-all duration-500 hover:bg-[#188b88] hover:text-white hover:shadow-[0_24px_70px_rgba(24,139,136,0.22)] dark:bg-[#0f1f1d] dark:text-white dark:hover:bg-[#4ecdc4] dark:hover:text-[#0a1a18]"
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <div className="mb-10 flex h-14 w-14 items-center justify-center text-[#188b88] transition-colors duration-500 group-hover:text-white/85 dark:text-[#4ecdc4] dark:group-hover:text-[#0a1a18]/85">
        <Icon className="h-12 w-12 stroke-[1.15]" />
      </div>

      <h3 className="mb-5 text-[22px] font-bold leading-[1.15] tracking-[-0.04em] text-[#071515] transition-colors duration-500 group-hover:text-white dark:text-white dark:group-hover:text-[#0a1a18]">
        {item.title}
      </h3>

      {item.subtitle && (
        <p className="mb-5 text-[16px] font-bold leading-[1.45] tracking-[-0.03em] text-[#188b88] transition-colors duration-500 group-hover:text-white dark:text-[#4ecdc4] dark:group-hover:text-[#0a1a18]">
          {item.subtitle}
        </p>
      )}

      {item.text && (
        <p className="whitespace-pre-line text-[15px] font-medium leading-[1.62] tracking-[-0.025em] text-[#536363] transition-colors duration-500 group-hover:text-white/90 dark:text-[#9daaaa] dark:group-hover:text-[#0a1a18]/85">
          {item.text}
        </p>
      )}

      {item.sections && item.sections.length > 0 && (
        <div className="mt-2 divide-y divide-dashed divide-[#d6dfdf] transition-colors duration-500 group-hover:divide-white/25 dark:divide-[#2a3f3d] dark:group-hover:divide-[#0a1a18]/20">
          {item.sections.map(
            (
              section: {
                title: string;
                text: string;
              },
              index: number
            ) => (
              <div key={`${item.title}-${index}`} className="py-4 first:pt-0 last:pb-0">
                <h4 className="text-[14px] font-bold leading-[1.35] tracking-[-0.025em] text-[#071515] transition-colors duration-500 group-hover:text-white dark:text-white dark:group-hover:text-[#0a1a18]">
                  {section.title}
                </h4>

                <p className="mt-2 text-[13.5px] font-medium leading-[1.58] tracking-[-0.02em] text-[#647272] transition-colors duration-500 group-hover:text-white/82 dark:text-[#9daaaa] dark:group-hover:text-[#0a1a18]/75">
                  {section.text}
                </p>
              </div>
            )
          )}
        </div>
      )}

      {item.paragraphs && item.paragraphs.length > 0 && (
        <div className="space-y-3">
          {item.paragraphs.map((paragraph: string, index: number) => (
            <p
              key={`${item.title}-paragraph-${index}`}
              className="text-[14px] font-medium leading-[1.6] tracking-[-0.025em] text-[#536363] transition-colors duration-500 group-hover:text-white/88 dark:text-[#9daaaa] dark:group-hover:text-[#0a1a18]/80"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {item.closingText && (
        <p className="mt-5 border-t border-dashed border-[#d6dfdf] pt-5 text-[14px] font-semibold leading-[1.58] tracking-[-0.025em] text-[#536363] transition-colors duration-500 group-hover:border-white/25 group-hover:text-white/90 dark:border-[#2a3f3d] dark:text-[#9daaaa] dark:group-hover:border-[#0a1a18]/20 dark:group-hover:text-[#0a1a18]/85">
          {item.closingText}
        </p>
      )}
    </motion.div>
  );
}

function MissionCard({ title, text, points }: { title: string; text: string; points: string[] }) {
  return (
    <div className="rounded-[7px] bg-white p-7 dark:bg-[#0f1f1d]">
      <h4 className="mb-4 text-[18px] font-bold leading-none text-[#071515] dark:text-white">
        {title}
      </h4>

      <p className="mb-6 text-[15px] font-medium leading-[1.55] tracking-[-0.03em] text-[#536363] dark:text-[#9daaaa]">
        {text}
      </p>

      <ul className="space-y-3">
        {points.map((point) => (
          <li
            key={point}
            className="flex items-center gap-2 text-[14px] font-semibold text-[#536363] dark:text-[#9daaaa]"
          >
            <Check className="h-4 w-4 text-[#188b88] dark:text-[#4ecdc4]" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AboutHero() {
  const { aboutPage } = content;

  return (
    <section className="px-3 pb-3 pt-[100px]">
      <div className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-[#061f20]">
        <img
          src={aboutPage.heroImage}
          alt="About Us"
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
            {aboutPage.heroTitle}
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

            <span className="text-white">{aboutPage.breadcrumbText}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ChooseBestSection() {
  const { aboutPage } = content;

  return (
    <section className="about-section px-4 py-24 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="about-reveal mb-6">
              <SectionBadge>{aboutPage.chooseBestBadge}</SectionBadge>
            </div>

            <h2 className="about-reveal max-w-[820px] text-[40px] font-normal leading-[1.08] tracking-[-0.055em] text-[#071515] dark:text-white sm:text-[50px] lg:text-[56px] xl:text-[60px]">
              <span className="block">{aboutPage.chooseBestHeadingLine1}</span>

              <span className="mt-1 block">
                {aboutPage.chooseBestHeadingLine2}{' '}
                <span className="text-[#188b88] dark:text-[#4ecdc4]">
                  {aboutPage.chooseBestHighlight}.
                </span>
              </span>
            </h2>
          </div>

          <div className="about-reveal">
            <PillButton to="/contact">{aboutPage.chooseBestCta}</PillButton>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aboutPage.featureCards.map((item: any) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  const { aboutPage } = content;
  const missionSectionRef = useRef<HTMLElement>(null);
  const progressOneRef = useRef<HTMLDivElement>(null);
  const progressTwoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressOneRef.current,
        {
          width: '0%',
        },
        {
          width: '82%',
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: missionSectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        progressTwoRef.current,
        {
          width: '0%',
        },
        {
          width: '90%',
          duration: 1.4,
          delay: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: missionSectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, missionSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={missionSectionRef}
      className="about-section relative overflow-hidden bg-[#dfe9e9] px-4 py-24 dark:bg-[#081d1b] sm:px-6 lg:px-12 xl:px-20"
    >
      <PatternBackground />

      <div className="relative z-10 mx-auto grid max-w-[1320px] grid-cols-1 items-stretch gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left Image */}
        <div className="about-reveal relative min-h-[610px] h-full overflow-hidden rounded-[8px]">
          <img
            src={aboutPage.missionImage}
            alt="Business progress"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-[#061f20]/20" />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center">
          <div className="about-reveal mb-6">
            <SectionBadge>{aboutPage.missionBadge}</SectionBadge>
          </div>

          <h2 className="about-reveal mb-9 max-w-[700px] text-[44px] font-normal leading-[1.08] tracking-[-0.055em] text-[#071515] dark:text-white sm:text-[56px] lg:text-[62px]">
            {aboutPage.missionHeading}{' '}
            <span className="text-[#188b88] dark:text-[#4ecdc4]">
              {aboutPage.missionHighlight}.
            </span>
          </h2>

          <div className="about-reveal grid grid-cols-1 gap-6 sm:grid-cols-2">
            <MissionCard
              title={aboutPage.missionCardTitle}
              text={aboutPage.missionCardText}
              points={aboutPage.missionPoints}
            />

            <MissionCard
              title={aboutPage.visionCardTitle}
              text={aboutPage.visionCardText}
              points={aboutPage.visionPoints}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutUs() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.about-section').forEach((section) => {
        gsap.fromTo(
          section.querySelectorAll('.about-reveal'),
          {
            y: 42,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.82,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 72%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageTitle title="About Us" description="Welcome to Updeck - Your trusted partner" />
      <main ref={pageRef} className="overflow-hidden bg-[var(--color-base)] dark:bg-[#0a1a18]">
        <AboutHero />
        <ChooseBestSection />
        <MissionVisionSection />
      </main>
    </>
  );
}
