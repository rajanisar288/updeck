// src/components/StatsSection.tsx

import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { content } from '@/data/content';

gsap.registerPlugin(ScrollTrigger);

interface StatItemProps {
  value: string;
  label: string;
  suffix?: string;
}

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  image: string;
}

function AnimatedStat({ value, label, suffix = '' }: StatItemProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statRef.current || hasAnimated) return;

    const trigger = ScrollTrigger.create({
      trigger: statRef.current,
      start: 'top 85%',
      onEnter: () => {
        if (hasAnimated) return;

        setHasAnimated(true);

        const numericValue = parseFloat(value);
        const isDecimal = value.includes('.');
        const obj = { val: 0 };

        gsap.to(obj, {
          val: numericValue,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            if (isDecimal) {
              setDisplayValue(obj.val.toFixed(1));
            } else {
              setDisplayValue(Math.round(obj.val).toString());
            }
          },
        });
      },
    });

    return () => trigger.kill();
  }, [value, hasAnimated]);

  return (
    <div
      ref={statRef}
      className="relative flex min-h-[120px] flex-col items-center justify-center text-center"
    >
      <div className="text-[56px] font-normal leading-none tracking-[-0.055em] text-white sm:text-[68px] lg:text-[78px] xl:text-[82px]">
        {displayValue}
        <span>{suffix}</span>
      </div>

      <p className="mt-5 text-[16px] font-medium leading-none tracking-[-0.03em] text-white/90">
        {label}
      </p>
    </div>
  );
}

function TestimonialCard({
  item,
  active,
}: {
  item: TestimonialItem;
  active?: boolean;
}) {
  return (
    <div
      className={`flex min-h-[390px] flex-col rounded-[8px] bg-white px-8 py-10 transition-all duration-300 dark:bg-[#0f1f1d] xl:min-h-[420px] ${active
        ? 'border border-[#188b88] dark:border-[#4ecdc4]'
        : 'border border-transparent'
        }`}
    >
      <Quote
        className="mb-8 h-16 w-16 rotate-180 text-[#188b88] dark:text-[#4ecdc4]"
        strokeWidth={0}
        fill="currentColor"
      />

      <p className="text-[16px] font-medium leading-[1.62] tracking-[-0.03em] text-[#293838] dark:text-[#aebbbb]">
        {item.quote}
      </p>

      <div className="mt-auto border-t border-dashed border-[#cfdada] pt-7 dark:border-[#2a3f3d]">
        <div className="flex items-center gap-4">
          <img
            src={item.image}
            alt={item.name}
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <h3 className="text-[22px] font-bold leading-none tracking-[-0.04em] text-[#071515] dark:text-white">
              {item.name}
            </h3>
            <p className="mt-2 text-[13px] font-medium leading-none text-[#657171] dark:text-[#9daaaa]">
              {item.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const { statsSection } = content;
  const sectionRef = useRef<HTMLElement>(null);
  const statsBoxRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const visibleTestimonials = useMemo(() => {
    return [0, 1, 2].map((offset) => {
      const index = (activeIndex + offset) % statsSection.testimonials.length;
      return statsSection.testimonials[index];
    });
  }, [activeIndex, statsSection.testimonials]);

  const totalSlides = statsSection.testimonials.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        statsBoxRef.current,
        {
          y: -36,
          scale: 0.96,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        contentRef.current?.querySelectorAll('.feedback-animate') || [],
        {
          y: 42,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!cardsRef.current) return;

    gsap.fromTo(
      cardsRef.current.children,
      {
        x: 35,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.45,
        stagger: 0.08,
        ease: 'power2.out',
      }
    );
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--color-base)] dark:bg-[#0a1a18] px-4 pb-20 pt-[82px] sm:px-6 lg:px-12 xl:px-20"
    >
      {/* background light band */}
      <div className="absolute left-0 right-0 top-[198px] h-[calc(100%-198px)] bg-[#dfe9e9] dark:bg-[#081d1b]" />

      {/* left diagonal pattern */}
      <div className="pointer-events-none absolute left-0 top-[198px] h-[480px] w-[28%] opacity-[0.2] dark:opacity-[0.12]">
        <div className="absolute -left-28 top-0 h-full w-full rotate-[-18deg] bg-[repeating-linear-gradient(90deg,rgba(7,21,21,0.28)_0px,rgba(7,21,21,0.28)_1px,transparent_1px,transparent_12px)]" />
      </div>

      {/* right diagonal pattern */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[390px] w-[28%] opacity-[0.2] dark:opacity-[0.12]">
        <div className="absolute -right-28 bottom-0 h-full w-full rotate-[-18deg] bg-[repeating-linear-gradient(90deg,rgba(7,21,21,0.28)_0px,rgba(7,21,21,0.28)_1px,transparent_1px,transparent_12px)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px]">
        {/* Stats Bar - same width as cards */}
        <div
          ref={statsBoxRef}
          className="w-full rounded-[8px] bg-[#188b88] px-8 py-12 opacity-0 dark:bg-[#4ecdc4] sm:px-12 lg:px-16 xl:px-20"
        >
          <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-y-0">
            {statsSection.stats.map((stat, index) => (
              <div key={index} className="relative">
                <AnimatedStat
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                />

                {index !== statsSection.stats.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-[88px] w-px -translate-y-1/2 border-r border-dashed border-white/28 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="pt-[110px]">
          <div className="mb-11 flex items-end justify-between gap-6">
            <div>
              <div className="feedback-animate mb-6 inline-flex items-center gap-2 rounded-[2px] border border-dashed border-[#c0cccc] bg-transparent px-3 py-2 dark:border-[#2a3f3d]">
                <Box className="h-3.5 w-3.5 fill-[#188b88] text-[#188b88] dark:fill-[#4ecdc4] dark:text-[#4ecdc4]" />
                <span className="text-[12px] font-bold uppercase leading-none tracking-[0.16em] text-[#071515] dark:text-[#e8edee]">
                  {statsSection.badgeText}
                </span>
              </div>

              <h2 className="feedback-animate max-w-[560px] text-[48px] font-normal leading-[1.12] tracking-[-0.055em] text-[#071515] dark:text-[#e8edee] sm:text-[56px] lg:text-[64px]">
                {statsSection.headingLine1}{' '}
                <span className="text-[#188b88] dark:text-[#4ecdc4]">
                  {statsSection.highlightedText}
                </span>{' '}
                {statsSection.headingLine2}
                <br />
                {statsSection.headingLine3}
              </h2>
            </div>

            <div className="feedback-animate hidden items-center gap-3 sm:flex">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#cbd6d6] text-[#071515] transition-colors duration-300 hover:bg-white dark:border-[#2a3f3d] dark:text-white dark:hover:bg-[#0f1f1d]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#cbd6d6] text-[#071515] transition-colors duration-300 hover:bg-white dark:border-[#2a3f3d] dark:text-white dark:hover:bg-[#0f1f1d]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Cards Slider - same width as stats */}
          <div ref={cardsRef} className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {visibleTestimonials.map((item, index) => (
              <div key={`${item.name}-${activeIndex}`} className="feedback-animate">
                <TestimonialCard item={item} active={index === 1} />
              </div>
            ))}
          </div>

          {/* Mobile Arrows */}
          <div className="feedback-animate mt-8 flex items-center justify-center gap-3 sm:hidden">
            <button
              type="button"
              onClick={handlePrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#cbd6d6] text-[#071515] transition-colors duration-300 hover:bg-white dark:border-[#2a3f3d] dark:text-white dark:hover:bg-[#0f1f1d]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#cbd6d6] text-[#071515] transition-colors duration-300 hover:bg-white dark:border-[#2a3f3d] dark:text-white dark:hover:bg-[#0f1f1d]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Pagination */}
          <div className="feedback-animate mt-11 flex items-center justify-center gap-2">
            {statsSection.testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleDotClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${activeIndex === index
                  ? 'w-12 bg-[#188b88] dark:bg-[#4ecdc4]'
                  : 'w-3 bg-[#b9d2d2] dark:bg-[#28413f]'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}