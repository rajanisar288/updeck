// src/components/AboutSection.tsx

import { content } from '@/data/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Box } from 'lucide-react';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const { aboutSection } = content;
  const sectionRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightTopRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power4.out',
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(
        leftImageRef.current,
        {
          x: -60,
          opacity: 0,
          scale: 0.9,
          clipPath: 'inset(0 100% 0 0)',
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.4,
        }
      )
        .fromTo(
          rightTopRef.current,
          {
            x: 60,
            opacity: 0,
            scale: 0.9,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
          },
          '-=1'
        )
        .fromTo(
          rightTopRef.current?.querySelectorAll('.about-text-reveal') || [],
          {
            y: 50,
            opacity: 0,
            filter: 'blur(5px)',
          },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1.2,
            stagger: 0.12,
          },
          '-=0.8'
        )
        .fromTo(
          experienceRef.current,
          {
            y: 60,
            opacity: 0,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'back.out(1.4)',
          },
          '-=0.8'
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
          start: 'top 70%',
          toggleActions: 'play none none none',
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
      className="
        relative
        overflow-hidden
        bg-[var(--color-base)]
        px-4
        pt-8
        pb-20
        dark:bg-[#0a1a18]
        sm:px-6
        lg:px-12
        xl:px-20
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-[1296px]
          grid-cols-1
          items-stretch
          gap-5
          lg:grid-cols-[1fr_1fr]
        "
      >
        {/* Left Image Area */}
        <div
          ref={leftImageRef}
          className="
            relative
            h-full
            min-h-[400px]
            opacity-0
            lg:min-h-[500px]
          "
        >
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
            className="
              absolute
              bottom-0
              left-0
              w-[226px]
              rounded-tr-[10px]
              bg-white
              px-6
              py-8
              opacity-0
              shadow-[0_4px_20px_rgba(7,21,21,0.06)]
              dark:bg-[#0f1f1d]
              dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]
              sm:w-[242px]
            "
          >
            <div
              ref={countRef}
              className="
                font-mono
                text-[56px]
                font-bold
                leading-none
                tracking-[-0.08em]
                text-[#071515]
                dark:text-white
              "
            >
              {aboutSection.experienceCount}
            </div>

            <p
              className="
                mt-4
                text-[15px]
                font-medium
                tracking-[-0.02em]
                text-[#188b88]
                dark:text-[#4ecdc4]
              "
            >
              {aboutSection.experienceLabel}
            </p>

            <p
              className="
                mt-4
                max-w-[190px]
                text-[16px]
                leading-[1.5]
                tracking-[-0.03em]
                text-[#455050]
                dark:text-[#9daaaa]
              "
            >
              {aboutSection.experienceDescription}
            </p>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex h-full flex-col gap-5">
          {/* Top White Text Card */}
          <div
            ref={rightTopRef}
            className="
              flex
              h-full
              flex-col
              rounded-[10px]
              bg-white
              px-8
              py-8
              opacity-0
              shadow-[0_4px_20px_rgba(7,21,21,0.04)]
              dark:bg-[#0f1f1d]
              dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]
              sm:px-9
              lg:px-10
              xl:px-11
            "
          >
            {/* Badge */}
            <div
              className="
                about-text-reveal
                mb-7
                inline-flex
                w-fit
                items-center
                gap-3
                rounded-[3px]
                border
                border-dashed
                border-[#c8d2d2]
                bg-transparent
                px-4
                py-2
                dark:border-[#2a3f3d]
              "
            >
              <Box
                className="
                  h-4
                  w-4
                  fill-[#188b88]
                  text-[#188b88]
                  dark:fill-[#4ecdc4]
                  dark:text-[#4ecdc4]
                "
              />

              <span
                className="
                  text-[13px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#071515]
                  dark:text-[#e8edee]
                "
              >
                {aboutSection.badgeText}
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                overflow-hidden
                text-[38px]
                font-normal
                leading-[1.15]
                tracking-[-0.055em]
                text-[#071515]
                dark:text-[#e8edee]
                sm:text-[46px]
                lg:text-[48px]
                xl:text-[52px]
              "
            >
              <span className="about-text-reveal block">
                {aboutSection.headingLine1}
              </span>

              <span className="about-text-reveal block">
                {aboutSection.headingLine2}
              </span>

              <span className="about-text-reveal block">
                {aboutSection.headingLine3}

                {aboutSection.highlightedText && (
                  <>
                    {' '}
                    <em className="not-italic text-[#188b88] dark:text-[#4ecdc4]">
                      {aboutSection.highlightedText}
                    </em>
                  </>
                )}
              </span>
            </h2>

            {/* Revenue + Efficiency */}
            <div
              className="
                about-text-reveal
                mt-8
                border-y
                border-dashed
                border-[#d7dfde]
                dark:border-white/10
              "
            >
              {/* Revenue */}
              <div
                className="
                  grid
                  grid-cols-1
                  gap-2
                  py-5
                  sm:grid-cols-[110px_1fr]
                  sm:gap-6
                  lg:grid-cols-[105px_1fr]
                  xl:grid-cols-[115px_1fr]
                "
              >
                <h3
                  className="
                    text-[16px]
                    font-bold
                    leading-[1.5]
                    tracking-[-0.03em]
                    text-[#071515]
                    dark:text-white
                  "
                >
                  {aboutSection.revenueTitle}
                </h3>

                <p
                  className="
                    max-w-[390px]
                    text-[14px]
                    leading-[1.55]
                    tracking-[-0.02em]
                    text-[#647170]
                    dark:text-[#9daaaa]
                    sm:text-[15px]
                  "
                >
                  {aboutSection.revenueDescription}
                </p>
              </div>

              {/* Efficiency */}
              <div
                className="
                  grid
                  grid-cols-1
                  gap-2
                  border-t
                  border-dashed
                  border-[#d7dfde]
                  py-5
                  dark:border-white/10
                  sm:grid-cols-[110px_1fr]
                  sm:gap-6
                  lg:grid-cols-[105px_1fr]
                  xl:grid-cols-[115px_1fr]
                "
              >
                <h3
                  className="
                    text-[16px]
                    font-bold
                    leading-[1.5]
                    tracking-[-0.03em]
                    text-[#071515]
                    dark:text-white
                  "
                >
                  {aboutSection.efficiencyTitle}
                </h3>

                <p
                  className="
                    max-w-[390px]
                    text-[14px]
                    leading-[1.55]
                    tracking-[-0.02em]
                    text-[#647170]
                    dark:text-[#9daaaa]
                    sm:text-[15px]
                  "
                >
                  {aboutSection.efficiencyDescription}
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href={aboutSection.ctaLink}
              className="
                about-text-reveal
                group
                mt-7
                inline-flex
                w-fit
                items-center
                gap-3
                text-[15px]
                font-bold
                text-[#071515]
                dark:text-[#e8edee]
              "
            >
              {aboutSection.ctaText}

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#071515]
                  text-white
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                  dark:bg-[#4ecdc4]
                  dark:text-[#0a1a18]
                "
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
