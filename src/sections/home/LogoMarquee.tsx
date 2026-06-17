import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const logos = [
  { name: 'Core', text: 'core', style: 'font-semibold tracking-[0.22em]' },
  { name: 'Cloudac', text: 'cloudac™', style: 'font-semibold tracking-[-0.04em]' },
  { name: 'Flomodia', text: 'flomodia™', style: 'font-serif italic tracking-[-0.05em]' },
  { name: 'Weglot', text: 'WEGLOT', style: 'font-bold tracking-[0.1em]' },
  { name: 'Updeck', text: 'Updeck', style: 'font-semibold tracking-[-0.03em]' },
  { name: 'TSE', text: 'tse', style: 'font-bold tracking-[-0.06em]' },
  { name: 'Monceau', text: 'monceau', style: 'font-light tracking-[0.12em]' },
];

export default function LogoMarquee() {
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

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--color-base)] py-16"
    >
      {/* left smoke fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-[24%] bg-gradient-to-r from-[var(--color-base)] via-[var(--color-base)]/95 to-transparent" />

      {/* right smoke fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-[24%] bg-gradient-to-l from-[var(--color-base)] via-[var(--color-base)]/95 to-transparent" />

      {/* main wrapper */}
      <div className="relative h-[250px]">
        {/* soft center smoke */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-[8] h-[125px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-[34px]" />

        {/* teal/blue glow effect */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-[9] h-[85px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#188b88]/20 blur-[38px]" />

        {/* Marquee Track */}
        <div
          ref={trackRef}
          className="absolute left-0 top-1/2 z-10 flex w-max -translate-y-1/2 animate-marquee gap-8 whitespace-nowrap opacity-0"
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex h-[118px] w-[285px] flex-shrink-0 items-center justify-center rounded-[6px] bg-white/85 px-10"
            >
              <span
                className={`text-[28px] leading-none text-[#071515]/28 grayscale ${logo.style}`}
              >
                {logo.text}
              </span>
            </div>
          ))}
        </div>

        {/* Center Circle Badge */}
        <div
          ref={badgeRef}
          className="absolute left-1/2 top-1/2 z-40 flex h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-dashed border-[#c6d0d0] opacity-0"
        >
          {/* white blur behind text */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[115px] w-[275px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-[24px]" />

          {/* teal blur behind 1000 */}
          <div className="absolute left-1/2 top-[42%] -z-10 h-[55px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#188b88]/25 blur-[25px]" />

          <p className="text-center text-[21px] font-semibold leading-[1.35] tracking-[-0.04em] text-[#071515]">
            Join Over{' '}
            <span className="inline-flex rounded-full bg-[#188b88] px-2.5 py-[1px] text-white">
              1000+
            </span>
            <br />
            Companies with
            <br />
            <span className="relative inline-block font-bold text-[#071515]">
              Updeck
              <span className="absolute -bottom-[2px] left-0 h-px w-full bg-[#071515]/45" />
            </span>{' '}
            Here
          </p>
        </div>
      </div>
    </section>
  );
}