import { useEffect, useRef } from 'react';
import { ArrowUpRight, ChevronDown, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(
        textRef.current?.querySelectorAll('.animate-item') || [],
        {
          y: 55,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.16,
        }
      )
        .fromTo(
          imageRef.current,
          {
            opacity: 0,
            scale: 1.08,
            x: 50,
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 1.15,
          },
          '-=0.7'
        )
        .fromTo(
          cardRef.current,
          {
            y: 40,
            opacity: 0,
            scale: 0.94,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
          },
          '-=0.45'
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
      className="relative mt-[80px] w-full min-h-screen bg-[#f4f6f4] px-3 py-3 overflow-hidden"
    >
      <div className="grid min-h-[calc(100vh-24px)] grid-cols-1 gap-3 lg:grid-cols-[0.98fr_1fr]">
        {/* Left Dark Box */}
        <div
          ref={textRef}
          className="relative overflow-hidden rounded-[10px] bg-[#061f20] px-6 py-12 text-white sm:px-10 md:px-16 lg:px-20 xl:px-28 flex items-center"
        >
          {/* diagonal pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
            <div className="absolute -left-32 top-10 h-[120%] w-[80%] rotate-[-28deg] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.16)_0px,rgba(255,255,255,0.16)_1px,transparent_1px,transparent_13px)]" />
            <div className="absolute right-0 top-0 h-full w-[48%] bg-[repeating-linear-gradient(75deg,rgba(255,255,255,0.13)_0px,rgba(255,255,255,0.13)_1px,transparent_1px,transparent_13px)]" />
          </div>

          {/* Scroll Down */}
          <div className="animate-item absolute bottom-16 left-8 hidden items-center gap-3 text-[#9aa8a6] lg:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
              <ChevronDown className="h-5 w-5 animate-bounce" />
            </div>
            <span className="-rotate-90 text-[13px] font-semibold tracking-wide">
              Scroll Down
            </span>
          </div>

          <div className="relative z-10 w-full max-w-[680px]">
            <div className="animate-item inline-flex items-center gap-3 rounded-[2px] border border-dashed border-white/15 bg-white/[0.02] px-4 py-2">
              <BadgeCheck className="h-5 w-5 text-[#15928c]" />
              <span className="text-[13px] font-bold uppercase tracking-[0.18em] text-white">
                Recognized For Excellence
              </span>
            </div>

            <h1 className="mt-10 text-[44px] font-normal leading-[1.12] tracking-[-0.04em] text-white sm:text-[64px] lg:text-[66px] xl:text-[74px]">
              <span className="animate-item block">Driving Excellence</span>
              <span className="animate-item block">Through Evolution</span>
              <span className="animate-item block">
                and{' '}
                <em className="not-italic text-[#15928c]">
                  Trust.
                </em>
              </span>
            </h1>

            <div className="animate-item mt-14 max-w-[540px] border-y border-dashed border-white/15 py-7">
              <div className="grid grid-cols-[110px_1px_1fr] items-center gap-8">
                <Link
                  to="/about-us"
                  className="group flex h-[72px] w-[72px] items-center justify-center text-white transition-all duration-300 hover:text-[#15928c]"
                >
                  <ArrowUpRight className="h-[72px] w-[72px] stroke-[1.1] transition-transform duration-300 group-hover:rotate-45" />
                </Link>

                <div className="h-[86px] w-px border-l border-dashed border-white/15" />

                <p className="max-w-[330px] text-[17px] leading-[1.55] tracking-[-0.02em] text-[#aab9b7]">
                  Represents growth, expansion, and modern business solution
                  present growth, expansion.
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

          <div className="absolute inset-0 bg-[#061f20]/20" />

          {/* Floating Stats Card */}
          <div
            ref={cardRef}
            className="absolute bottom-0 left-0 w-[265px] translate-y-0 rounded-tr-[10px] bg-[#f4f6f4] p-4 sm:w-[300px] sm:p-6 lg:-left-0 lg:bottom-0"
          >
            <div className="rounded-[10px] bg-white px-6 py-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="mb-8 flex items-center">
                <div className="flex -space-x-3">
                  {[11, 12, 13].map((img) => (
                    <div
                      key={img}
                      className="h-12 w-12 overflow-hidden rounded-full border-[3px] border-white bg-gray-200"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${img}`}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="-ml-2 flex h-14 w-14 items-center justify-center rounded-full bg-[#15928c] text-white">
                  <span className="text-2xl font-light leading-none">+</span>
                </div>
              </div>

              <div
                ref={countRef}
                className="font-mono text-[52px] font-semibold leading-none tracking-[0.08em] text-[#061f20]"
              >
                0k
              </div>

              <p className="mt-4 max-w-[185px] text-[15px] leading-[1.5] text-[#52605f]">
                Happy customer we have world-wide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}