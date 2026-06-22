import { useEffect, useRef } from 'react';
import { ArrowUpRight, ChevronDown, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { content } from '@/data/content';

export default function HeroSection() {
  const { heroSection } = content;
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
      });

      tl.fromTo(
        textRef.current?.querySelectorAll('.animate-item') || [],
        {
          y: 70,
          opacity: 0,
          clipPath: 'inset(100% 0 0 0)',
        },
        {
          y: 0,
          opacity: 1,
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.4,
          stagger: 0.15,
        }
      )
        .fromTo(
          imageRef.current,
          {
            opacity: 0,
            scale: 1.15,
            x: 60,
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 1.6,
          },
          '-=1.2'
        )
        .fromTo(
          cardRef.current,
          {
            y: 60,
            opacity: 0,
            scale: 0.85,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
          },
          '-=0.8'
        );

      const counter = { value: 0 };

      gsap.to(counter, {
        value: 30,
        duration: 1.8,
        delay: 0.7,
        ease: 'power2.out',
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = `${Math.floor(counter.value)}k`;
          }
        },
        onComplete: () => {
          if (countRef.current) {
            countRef.current.textContent = '30k';
          }
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative dark:bg-[#051a18] mt-[100px] w-full min-h-screen px-3 py-3 overflow-hidden"
    >
      <div className="grid min-h-[calc(100vh-24px)] grid-cols-1 gap-3 lg:grid-cols-[0.98fr_1fr]">
        {/* Left Dark Box */}
        <div
          ref={textRef}
          className="relative overflow-hidden rounded-[10px] bg-[#061f20] dark:bg-[#0a1f1d] px-6 py-12 text-white sm:px-10 md:px-16 lg:px-20 xl:px-28 flex items-center"
        >
          {/* diagonal pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.18] dark:opacity-[0.10]">
            <div className="absolute -left-32 top-10 h-[120%] w-[80%] rotate-[-28deg] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.16)_0px,rgba(255,255,255,0.16)_1px,transparent_1px,transparent_13px)]" />
            <div className="absolute right-0 top-0 h-full w-[48%] bg-[repeating-linear-gradient(75deg,rgba(255,255,255,0.13)_0px,rgba(255,255,255,0.13)_1px,transparent_1px,transparent_13px)]" />
          </div>

          {/* Scroll Down */}
          {/* Scroll Down */}
          <div className="animate-item absolute bottom-16 left-8 hidden flex-col items-center gap-4 text-[#9aa8a6] dark:text-[#6a8a88] lg:flex">
            <span className="[writing-mode:vertical-rl] rotate-180 text-[13px] font-semibold tracking-wide">
              {heroSection.scrollText}
            </span>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 dark:bg-white/10">
              <ChevronDown className="h-5 w-5 animate-bounce" />
            </div>
          </div>

          <div className="relative z-10 w-full max-w-[680px]">
            <div className="animate-item inline-flex items-center gap-3 rounded-[2px] border border-dashed border-white/15 dark:border-white/10 bg-white/[0.02] dark:bg-white/[0.03] px-4 py-2">
              <BadgeCheck className="h-5 w-5 text-[#15928c] dark:text-[#4ecdc4]" />
              <span className="text-[13px] font-bold uppercase tracking-[0.18em] text-white">
                {heroSection.badgeText}
              </span>
            </div>

            <h1 className="mt-10 text-[44px] font-normal leading-[1.12] tracking-[-0.04em] text-white sm:text-[64px] lg:text-[66px] xl:text-[74px]">
              <span className="animate-item block">{heroSection.headingLine1}</span>
              <span className="animate-item block">{heroSection.headingLine2}</span>
              <span className="animate-item block">
                {heroSection.headingLine3}{' '}
                <em className="not-italic text-[#15928c] dark:text-[#4ecdc4]">
                  {heroSection.highlightedText}
                </em>
              </span>
            </h1>

            <div className="animate-item mt-14 max-w-[540px] border-y border-dashed border-white/15 dark:border-white/10 py-7">
              <div className="grid grid-cols-[110px_1px_1fr] items-start gap-8">
                <Link
                  to="/about-us"
                  className="group flex h-[72px] w-[72px] items-center justify-center text-white transition-all duration-300 hover:text-[#15928c] dark:hover:text-[#4ecdc4]"
                >
                  <ArrowUpRight className="h-[72px] w-[72px] stroke-[1.1] transition-transform duration-300 group-hover:rotate-45" />
                </Link>

                <div className="h-[86px] w-px border-l border-dashed border-white/15 dark:border-white/10" />

                <p className="max-w-[330px] pt-1 text-[17px] leading-[1.55] tracking-[-0.02em] text-[#aab9b7] dark:text-[#8aaaa8]">
                  {heroSection.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Box */}
        <div ref={imageRef} className="relative min-h-[520px] overflow-hidden rounded-[10px]">
          <img
            src="/images/hero-executive.jpg"
            alt="Professional executive"
            className="h-full min-h-[520px] w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-[#061f20]/20 dark:bg-[#0a1f1d]/40" />

          {/* Floating Stats Card - FIXED for dark mode */}
          <div
            ref={cardRef}
            className="absolute bottom-0 left-0 w-[295px] rounded-tr-[10px] bg-[#f4f6f4] dark:bg-transparent p-4 sm:w-[325px] lg:left-0 lg:bottom-0"
          >
            <div className="rounded-[10px] bg-white dark:bg-[#0f1f1d] px-7 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <div className="mb-9 flex items-center">
                <div className="flex -space-x-3">
                  {[11, 12, 13].map((img) => (
                    <div
                      key={img}
                      className="h-12 w-12 overflow-hidden rounded-full border-[3px] border-white dark:border-[#0f1f1d] bg-gray-200 dark:bg-[#1a2f2d]"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${img}`}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="-ml-2 flex h-14 w-14 items-center justify-center rounded-full bg-[#15928c] dark:bg-[#4ecdc4] text-white">
                  <span className="text-2xl font-light leading-none">+</span>
                </div>
              </div>

              <div
                ref={countRef}
                className="font-mono text-[52px] font-semibold leading-none tracking-[0.08em] text-[#061f20] dark:text-white"
              >
                0k
              </div>

              <p className="mt-4 max-w-[205px] text-[15px] leading-[1.5] text-[#52605f] dark:text-[#9daaaa]">
                {heroSection.statsTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}