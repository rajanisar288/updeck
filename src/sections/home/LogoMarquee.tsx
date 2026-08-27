// src/components/LogoMarquee.tsx

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { content } from '@/data/content';

gsap.registerPlugin(ScrollTrigger);

export default function LogoMarquee() {
  const { logoMarqueeSection } = content;
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        trackRef.current,
        {
          y: 48,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
        }
      ).fromTo(
        badgeRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.92,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
        },
        '-=0.45'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const { logos, badgeText, badgeNumber, badgeSubText, brandName, brandSubText } = logoMarqueeSection;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--color-base)] dark:bg-[#0a1a18] py-16"
    >
      {/* left smoke fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-[24%] bg-gradient-to-r from-[var(--color-base)] dark:from-[#0a1a18] via-[var(--color-base)]/95 dark:via-[#0a1a18]/95 to-transparent" />

      {/* right smoke fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-[24%] bg-gradient-to-l from-[var(--color-base)] dark:from-[#0a1a18] via-[var(--color-base)]/95 dark:via-[#0a1a18]/95 to-transparent" />

      {/* main wrapper */}
      <div className="relative h-[340px] overflow-visible">
        {/* stronger center white smoke */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[230px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-[#0f1f1d]/90 blur-[48px]" />

        {/* blue glow effect */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-[21] h-[145px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#188b88]/25 dark:bg-[#4ecdc4]/25 blur-[52px]" />

        {/* Marquee Track Position Wrapper */}
        <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
          <div ref={trackRef} className="opacity-0">
            <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex h-[118px] w-[285px] flex-shrink-0 items-center justify-center rounded-[6px] bg-white/85 dark:bg-[#0f1f1d]/85 px-10"
                >
                  <span
                    className={`text-[28px] leading-none text-[#071515]/28 dark:text-white/28 grayscale ${logo.style}`}
                  >
                    {logo.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Circle Position Wrapper */}
        <div className="absolute left-1/2 top-1/2 z-40 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2">
          <div
            ref={badgeRef}
            className="relative flex h-full w-full items-center justify-center rounded-full border border-dashed border-[#c6d0d0] dark:border-[#2a3f3d] opacity-0"
          >
            {/* glass blur inside circle */}
            <div className="pointer-events-none absolute inset-0 z-0 rounded-full bg-white/20 dark:bg-[#0f1f1d]/20 backdrop-blur-[14px]" />

            {/* white blur behind text */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[150px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/95 dark:bg-[#0f1f1d]/95 blur-[34px]" />

            {/* teal blur behind 1000 */}
            <div className="pointer-events-none absolute left-1/2 top-[42%] z-[2] h-[75px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#188b88]/35 dark:bg-[#4ecdc4]/35 blur-[34px]" />

            <p className="relative z-10 text-center text-[21px] font-semibold leading-[1.35] tracking-[-0.04em] text-[#071515] dark:text-[#e8edee]">
              {badgeText}{' '}
              <span className="inline-flex rounded-full bg-[#188b88] dark:bg-[#4ecdc4] px-2.5 py-[1px] text-white dark:text-[#0a1a18]">
                {badgeNumber}
              </span>
              <br />
              {badgeSubText}
              <br />
              <span className="relative inline-block font-bold text-[#071515] dark:text-[#e8edee]">
                {brandName}
                <span className="absolute -bottom-[2px] left-0 h-px w-full bg-[#071515]/45 dark:bg-white/45" />
              </span>{' '}
              {brandSubText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}