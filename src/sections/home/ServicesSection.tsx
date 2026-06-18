// src/components/ServicesSection.tsx

import { useEffect, useRef } from 'react';
import {
  Lightbulb,
  Award,
  Headphones,
  Box,
  type LucideIcon,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { content } from '@/data/content';

gsap.registerPlugin(ScrollTrigger);

// Icon mapping for dynamic rendering
const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Award,
  Headphones,
  Box,
};

export default function ServicesSection() {
  const { servicesSection } = content;
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 72%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        labelRef.current,
        {
          y: 26,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
        }
      )
        .fromTo(
          headingRef.current?.querySelectorAll('.heading-line') || [],
          {
            y: 45,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.12,
          },
          '-=0.2'
        )
        .fromTo(
          cardsRef.current?.querySelectorAll('.service-card-item') || [],
          {
            x: 34,
            y: -34,
            opacity: 0,
            scale: 0.96,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.16,
          },
          '-=0.2'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Get the appropriate icon component
  const getIcon = (iconName: string): LucideIcon => {
    return iconMap[iconName] || Box;
  };

  // Get the badge icon
  const BadgeIcon = getIcon(servicesSection.badgeIcon);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--color-base)] dark:bg-[#0a1a18] px-4 py-24 sm:px-6 lg:px-12 xl:px-20"
    >
      <div className="mx-auto max-w-[1340px]">
        {/* Top Heading */}
        <div className="mb-16 text-center">
          <div
            ref={labelRef}
            className="mx-auto mb-7 inline-flex items-center gap-3 rounded-[3px] border border-dashed border-[#c8d2d2] dark:border-[#2a3f3d] bg-transparent px-4 py-2"
          >
            <BadgeIcon className="h-4 w-4 fill-[#188b88] dark:fill-[#4ecdc4] text-[#188b88] dark:text-[#4ecdc4]" />
            <span className="text-[13px] font-bold uppercase tracking-[0.22em] text-[#071515] dark:text-[#e8edee]">
              {servicesSection.badgeText}
            </span>
          </div>

          <h2
            ref={headingRef}
            className="overflow-hidden text-[38px] font-normal leading-[1.12] tracking-[-0.04em] text-[#071515] dark:text-[#e8edee] sm:text-[48px] lg:text-[56px]"
          >
            <span className="heading-line block">{servicesSection.headingLine1}</span>
            <span className="heading-line block">
              {servicesSection.headingLine2}{' '}
              <em className="not-italic text-[#188b88] dark:text-[#4ecdc4]">
                {servicesSection.highlightedText}
              </em>
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {servicesSection.services.map((service, index) => {
            const Icon = getIcon(service.icon);

            return (
              <div
                key={index}
                className="service-card-item service-card group min-h-[350px] rounded-[8px] bg-white dark:bg-[#0f1f1d] px-8 py-12 text-left shadow-[0_4px_20px_rgba(7,21,21,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-500 hover:bg-[#188b88] dark:hover:bg-[#4ecdc4] sm:px-10"
              >
                <div className="service-icon-bubble mb-14 inline-flex h-[72px] w-[72px] origin-center items-center justify-center">
                  <Icon
                    className="h-[68px] w-[68px] text-[#188b88] dark:text-[#4ecdc4] transition-colors duration-500 group-hover:text-white dark:group-hover:text-[#0a1a18]"
                    strokeWidth={1.25}
                  />
                </div>

                <h3 className="mb-6 text-[22px] font-bold leading-tight tracking-[-0.04em] text-[#071515] dark:text-[#e8edee] transition-colors duration-500 group-hover:text-white dark:group-hover:text-[#0a1a18] lg:text-[24px]">
                  {service.title}
                </h3>

                <p className="max-w-[360px] text-[16px] leading-[1.65] tracking-[-0.02em] text-[#455050] dark:text-[#9daaaa] transition-colors duration-500 group-hover:text-white/95 dark:group-hover:text-[#0a1a18]/95">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}