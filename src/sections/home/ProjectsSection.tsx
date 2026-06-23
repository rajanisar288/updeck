// src/components/ProjectsSection.tsx

import { content } from '@/data/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Box } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const { projectsSection } = content;
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const topLeftRef = useRef<HTMLDivElement>(null);
  const topRightRef = useRef<HTMLDivElement>(null);
  const bottomLeftRef = useRef<HTMLDivElement>(null);
  const bottomRightRef = useRef<HTMLDivElement>(null);

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
        labelRef.current,
        {
          y: 30,
          opacity: 0,
          filter: 'blur(5px)',
        },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.8,
        }
      )
        .fromTo(
          headingRef.current?.querySelectorAll('.heading-line') || [],
          {
            y: 60,
            opacity: 0,
            clipPath: 'inset(100% 0 0 0)',
          },
          {
            y: 0,
            opacity: 1,
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.2,
            stagger: 0.15,
          },
          '-=0.6'
        )
        .fromTo(
          [descRef.current, buttonRef.current],
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
          },
          '-=0.8'
        )
        .fromTo(
          topLeftRef.current,
          {
            x: -100,
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
          },
          '-=0.4'
        )
        .fromTo(
          topRightRef.current,
          {
            x: 100,
            opacity: 0,
            scale: 0.9,
            clipPath: 'inset(0 0 0 100%)',
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            clipPath: 'inset(0 0% 0 0)',
            duration: 1.4,
          },
          '<'
        )
        .fromTo(
          bottomLeftRef.current,
          {
            x: -100,
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
          },
          '-=1'
        )
        .fromTo(
          bottomRightRef.current,
          {
            x: 100,
            opacity: 0,
            scale: 0.9,
            clipPath: 'inset(0 0 0 100%)',
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            clipPath: 'inset(0 0% 0 0)',
            duration: 1.4,
          },
          '<'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cardRefs = [topLeftRef, topRightRef, bottomLeftRef, bottomRightRef];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--color-base)] dark:bg-[#0a1a18] px-4 py-24 sm:px-6 lg:px-12 xl:px-20"
    >
      <div className="mx-auto max-w-[1340px]">
        {/* Header */}
        <div className="mb-12 grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.1fr_0.75fr_0.42fr]">
          <div>
            <div
              ref={labelRef}
              className="mb-7 inline-flex items-center gap-3 rounded-[3px] border border-dashed border-[#c8d2d2] dark:border-[#2a3f3d] bg-transparent px-4 py-2 opacity-0"
            >
              <Box className="h-4 w-4 fill-[#188b88] dark:fill-[#4ecdc4] text-[#188b88] dark:text-[#4ecdc4]" />
              <span className="text-[13px] font-bold uppercase tracking-[0.22em] text-[#071515] dark:text-[#e8edee]">
                {projectsSection.badgeText}
              </span>
            </div>

            <h2
              ref={headingRef}
              className="overflow-hidden text-[38px] font-normal leading-[1.12] tracking-[-0.04em] text-[#071515] dark:text-[#e8edee] sm:text-[48px] lg:text-[56px]"
            >
              <span className="heading-line block">{projectsSection.headingLine1}</span>
              <span className="heading-line block">
                {projectsSection.headingLine2}{' '}
                <em className="not-italic text-[#188b88] dark:text-[#4ecdc4]">
                  {projectsSection.highlightedText}
                </em>
              </span>
            </h2>
          </div>

          <p
            ref={descRef}
            className="max-w-[360px] text-[16px] leading-[1.65] tracking-[-0.02em] text-[#455050] dark:text-[#9daaaa] opacity-0 lg:pb-4"
          >
            {projectsSection.description}
          </p>

          <Link
            ref={buttonRef}
            to={projectsSection.ctaLink}
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#188b88] dark:bg-[#4ecdc4] py-2.5 pl-6 pr-2 text-[14px] font-bold text-white dark:text-[#0a1a18] opacity-0 lg:justify-self-end lg:self-center"
          >
            {projectsSection.ctaText}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#071515] dark:bg-[#0a1a18] text-white dark:text-[#e8edee] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projectsSection.projects.map((project, index) => {
            const isLarge = project.size === 'large-left' || project.size === 'large-right';

            return (
              <div
                key={index}
                ref={cardRefs[index]}
                className={[
                  'project-card group relative h-[330px] cursor-pointer overflow-hidden rounded-[8px] opacity-0 lg:h-[355px]',
                  isLarge ? 'md:col-span-2' : 'md:col-span-1',
                ].join(' ')}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[#061f20]/28 dark:bg-[#0a1f1d]/35 transition-colors duration-500 group-hover:bg-[#061f20]/42 dark:group-hover:bg-[#0a1f1d]/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061f20]/85 dark:from-[#0a1f1d]/85 via-[#061f20]/25 dark:via-[#0a1f1d]/25 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-8">
                  <span className="mb-3 inline-flex rounded-[4px] bg-white/25 dark:bg-white/20 px-2.5 py-1.5 text-[12px] font-semibold leading-none text-white backdrop-blur-sm">
                    {project.category}
                  </span>

                  <h3 className="max-w-[340px] text-[24px] font-bold leading-[1.18] tracking-[-0.05em] text-white lg:text-[26px]">
                    {project.title}
                  </h3>

                  <Link
                    to={`/case-studies/${project.slug}`}
                    className="mt-4 flex translate-y-3 items-center gap-2 text-[15px] font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <span>{projectsSection.viewProjectText}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="absolute right-6 top-6 flex h-11 w-11 scale-75 items-center justify-center rounded-full bg-white/20 dark:bg-white/15 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
