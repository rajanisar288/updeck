// src/components/AboutSection.tsx

import { useEffect, useRef } from 'react';
import { Star, Quote, ArrowUpRight, Play, Box } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { content } from '@/data/content';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const { aboutSection } = content;
  const sectionRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightTopRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        leftImageRef.current,
        {
          x: -55,
          opacity: 0,
          scale: 0.97,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
        }
      )
        .fromTo(
          rightTopRef.current,
          {
            x: 55,
            opacity: 0,
            scale: 0.97,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
          },
          '-=0.72'
        )
        .fromTo(
          rightTopRef.current?.querySelectorAll('.about-text-reveal') || [],
          {
            y: 38,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.72,
            stagger: 0.1,
          },
          '-=0.35'
        )
        .fromTo(
          experienceRef.current,
          {
            y: 45,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
          },
          '-=0.25'
        )
        .fromTo(
          [testimonialRef.current, videoRef.current],
          {
            y: 55,
            opacity: 0,
            scale: 0.96,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.78,
            stagger: 0.14,
          },
          '-=0.38'
        );

      const counter = {
        value: 0,
      };

      const targetCount = parseInt(aboutSection.experienceCount) || 13;

      gsap.to(counter, {
        value: targetCount,
        duration: 1.6,
        delay: 0.65,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = `${Math.floor(counter.value)}+`;
          }
        },
        onComplete: () => {
          if (countRef.current) {
            countRef.current.textContent = `${targetCount}+`;
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [aboutSection.experienceCount]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--color-base)] dark:bg-[#0a1a18] px-4 pt-8 pb-20 sm:px-6 lg:px-12 xl:px-20"
    >
      <div className="mx-auto grid max-w-[1296px] grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr]">
        {/* Left Image Area */}
        <div ref={leftImageRef} className="relative min-h-[560px] opacity-0 lg:min-h-[660px]">
          <div className="absolute inset-0 overflow-hidden rounded-[10px]">
            <img
              src={aboutSection.imageSrc}
              alt={aboutSection.imageAlt}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#061f20]/20 dark:bg-[#0a1f1d]/30" />
          </div>

          {/* Experience Card */}
          <div
            ref={experienceRef}
            className="absolute bottom-0 left-0 w-[226px] rounded-tr-[10px] bg-white dark:bg-[#0f1f1d] px-6 py-8 opacity-0 sm:w-[242px] shadow-[0_4px_20px_rgba(7,21,21,0.06)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            <p className="mb-11 text-[15px] font-medium tracking-[-0.02em] text-[#188b88] dark:text-[#4ecdc4]">
              {aboutSection.experienceLabel}
            </p>

            <div
              ref={countRef}
              className="font-mono text-[56px] font-bold leading-none tracking-[-0.08em] text-[#071515] dark:text-white"
            >
              0+
            </div>

            <p className="mt-4 max-w-[190px] text-[16px] leading-[1.5] tracking-[-0.03em] text-[#455050] dark:text-[#9daaaa]">
              {aboutSection.experienceDescription}
            </p>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="grid grid-rows-[auto_auto] gap-5">
          {/* Top White Text Card */}
          <div
            ref={rightTopRef}
            className="flex min-h-[400px] flex-col rounded-[10px] bg-white dark:bg-[#0f1f1d] px-8 py-8 opacity-0 shadow-[0_4px_20px_rgba(7,21,21,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          >
            <div className="about-text-reveal mb-7 inline-flex w-fit items-center gap-3 rounded-[3px] border border-dashed border-[#c8d2d2] dark:border-[#2a3f3d] bg-transparent px-4 py-2">
              <Box className="h-4 w-4 fill-[#188b88] dark:fill-[#4ecdc4] text-[#188b88] dark:text-[#4ecdc4]" />
              <span className="text-[13px] font-bold uppercase tracking-[0.22em] text-[#071515] dark:text-[#e8edee]">
                {aboutSection.badgeText}
              </span>
            </div>

            <h2 className="mb-auto overflow-hidden text-[38px] font-normal leading-[1.15] tracking-[-0.055em] text-[#071515] dark:text-[#e8edee] sm:text-[46px] lg:text-[50px] xl:text-[52px]">
              <span className="about-text-reveal block">
                {aboutSection.headingLine1}
              </span>
              <span className="about-text-reveal block">
                {aboutSection.headingLine2}
              </span>
              <span className="about-text-reveal block">
                {aboutSection.headingLine3}{' '}
                <em className="not-italic text-[#188b88] dark:text-[#4ecdc4]">
                  {aboutSection.highlightedText}
                </em>
              </span>
            </h2>

            <a
              href={aboutSection.ctaLink}
              className="about-text-reveal group mt-10 inline-flex w-fit items-center gap-3 text-[15px] font-bold text-[#071515] dark:text-[#e8edee]"
            >
              {aboutSection.ctaText}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#071515] dark:bg-[#4ecdc4] text-white dark:text-[#0a1a18] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.45fr_0.82fr]">
            {/* Testimonial */}
            <div
              ref={testimonialRef}
              className="relative min-h-[238px] overflow-hidden rounded-[8px] bg-[#188b88] dark:bg-[#4ecdc4] px-8 py-8 text-white dark:text-[#0a1a18] opacity-0"
            >
              <div className="mb-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-white dark:fill-[#0a1a18] text-white dark:text-[#0a1a18]"
                    strokeWidth={1}
                  />
                ))}
              </div>

              <p className="max-w-[390px] text-[16px] font-semibold leading-[1.55] tracking-[-0.03em] text-white dark:text-[#0a1a18]">
                {aboutSection.testimonialText}
              </p>

              <div className="mt-9">
                <p className="text-[18px] font-bold leading-none tracking-[-0.04em]">
                  {aboutSection.testimonialName}
                </p>
                <p className="mt-2 text-[14px] text-white/75 dark:text-[#0a1a18]/75">
                  {aboutSection.testimonialRole}
                </p>
              </div>

              <Quote
                className="absolute bottom-7 right-8 h-20 w-20 rotate-180 text-white dark:text-[#0a1a18]"
                strokeWidth={0}
                fill="currentColor"
              />
            </div>

            {/* Video Card */}
            <div
              ref={videoRef}
              className="relative min-h-[238px] overflow-hidden rounded-[8px] opacity-0"
            >
              <img
                src={aboutSection.videoImageSrc}
                alt={aboutSection.videoImageAlt}
                className="h-full min-h-[238px] w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#061f20]/35 dark:bg-[#0a1f1d]/40" />

              <button
                type="button"
                className="absolute left-1/2 top-1/2 flex h-[62px] w-[62px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#071515]/85 dark:bg-[#4ecdc4]/90 text-white dark:text-[#0a1a18] shadow-[0_18px_50px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-110"
                aria-label="Play video"
              >
                <Play className="ml-1 h-5 w-5 fill-white dark:fill-[#0a1a18] text-white dark:text-[#0a1a18]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}