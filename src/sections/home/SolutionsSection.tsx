// src/components/SolutionsSection.tsx

import { CASE_STUDIES, content } from '@/data/content';
import gsap from 'gsap';
import { ArrowUpRight, Box } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function SolutionsSection() {
  const { solutionsSection } = content;
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // Triple the items for seamless infinite loop
  const sliderSolutions = [...CASE_STUDIES, ...CASE_STUDIES, ...CASE_STUDIES];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate total width of one set of original items
    const cards = track.querySelectorAll('.solution-card-wrapper');
    if (cards.length === 0) return;

    // Get width of original set (first third of tripled array)
    const originalCount = CASE_STUDIES.length;
    let originalWidth = 0;
    for (let i = 0; i < originalCount; i++) {
      const card = cards[i] as HTMLElement;
      originalWidth += card.offsetWidth + 28; // 28px gap
    }

    // Set initial position
    gsap.set(track, { x: 0 });

    // Create infinite scrolling tween
    tweenRef.current = gsap.to(track, {
      x: -originalWidth,
      duration: 40, // Adjust speed: lower = faster
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: number) => parseFloat(String(x)) % originalWidth),
      },
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  // Stop immediately on hover
  const handleMouseEnter = () => {
    if (tweenRef.current) {
      tweenRef.current.pause();
    }
  };

  // Resume immediately on mouse leave
  const handleMouseLeave = () => {
    if (tweenRef.current) {
      tweenRef.current.resume();
    }
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#061f20] py-20 text-white">
      {/* Left diagonal lines */}
      <div className="pointer-events-none absolute left-0 top-0 h-[310px] w-[360px] opacity-[0.13]">
        <div className="h-full w-full bg-[repeating-linear-gradient(105deg,rgba(255,255,255,0.35)_0px,rgba(255,255,255,0.35)_1px,transparent_1px,transparent_13px)]" />
      </div>

      {/* Right bottom diagonal lines */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[260px] w-[360px] opacity-[0.11]">
        <div className="h-full w-full bg-[repeating-linear-gradient(105deg,rgba(255,255,255,0.35)_0px,rgba(255,255,255,0.35)_1px,transparent_1px,transparent_13px)]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-[760px] px-4 text-center">
          <div
            ref={labelRef}
            className="mx-auto mb-7 inline-flex items-center gap-3 rounded-[3px] border border-dashed border-white/15 bg-transparent px-4 py-2"
          >
            <Box className="h-4 w-4 fill-[#188b88] text-[#188b88]" />
            <span className="text-[13px] font-bold uppercase tracking-[0.22em] text-white">
              {solutionsSection.badgeText}
            </span>
          </div>

          <h2
            ref={headingRef}
            className="overflow-hidden text-[40px] font-normal leading-[1.13] tracking-[-0.045em] text-white sm:text-[52px] lg:text-[58px]"
          >
            <span className="heading-line block">{solutionsSection.headingLine1}</span>
            <span className="heading-line block">
              {solutionsSection.headingLine2}{' '}
              <em className="not-italic text-[#188b88]">{solutionsSection.highlightedText}</em>
            </span>
          </h2>
        </div>

        {/* Slider - GSAP Marquee */}
        <div
          // ref={sliderRef}
          className="overflow-hidden pb-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={trackRef} className="flex w-max gap-7" style={{ willChange: 'transform' }}>
            {sliderSolutions.map((solution, index) => (
              <div
                key={`${solution.title}-${index}`}
                className="solution-card-wrapper h-[455px] w-[430px] max-w-[86vw] flex-shrink-0"
              >
                <div className="group relative h-full overflow-hidden rounded-[8px] border border-white/[0.03] bg-[#132b2d] transition-all duration-500 hover:border-[#188b88]/35 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="absolute inset-0 h-full w-full scale-105 object-cover transition-all duration-700 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061f20]/70 via-[#061f20]/30 via-50% to-transparent opacity-100" />
                  <div className="absolute inset-0 bg-[#061f20]/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061f20] via-[#061f20]/55 to-[#188b88]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 z-10 p-8">
                    <h3 className="max-w-[320px] text-[25px] font-bold leading-[1.2] tracking-[-0.055em] text-white">
                      {solution.title}
                    </h3>

                    <div className="grid max-h-0 opacity-0 transition-all duration-500 group-hover:mt-5 group-hover:max-h-[180px] group-hover:opacity-100">
                      <p className="max-w-[350px] text-[16px] leading-[1.55] tracking-[-0.03em] text-white/70 line-clamp-3">
                        {solution.description}
                      </p>

                      <a
                        href={'/portfolios'}
                        className="mt-7 inline-flex w-fit items-center gap-3 text-[15px] font-bold text-white"
                      >
                        {solutionsSection.ctaText || 'Learn More'}
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#188b88] text-white transition-transform duration-300 group-hover:rotate-45">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
