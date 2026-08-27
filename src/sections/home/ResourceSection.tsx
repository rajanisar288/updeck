// src/components/ResourceSection.tsx

import { useEffect, useRef } from 'react';
import { ArrowUpRight, Box } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { content } from '@/data/content';

gsap.registerPlugin(ScrollTrigger);

export default function ResourceSection() {
    const { resourceSection } = content;
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.resource-animate',
                {
                    y: 42,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.85,
                    stagger: 0.12,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[var(--color-base)] px-4 py-24 dark:bg-[#0a1a18] sm:px-6 lg:px-12 xl:px-20"
        >
            <div className="mx-auto max-w-[1320px]">
                {/* Header */}
                <div className="mb-16 flex flex-col items-center text-center">
                    <div className="resource-animate mb-8 inline-flex items-center gap-2 rounded-[2px] border border-dashed border-[#c0cccc] bg-transparent px-4 py-2 dark:border-[#2a3f3d]">
                        <Box className="h-4 w-4 fill-[#188b88] text-[#188b88] dark:fill-[#4ecdc4] dark:text-[#4ecdc4]" />
                        <span className="text-[14px] font-bold uppercase leading-none tracking-[0.18em] text-[#071515] dark:text-[#e8edee]">
                            {resourceSection.badgeText}
                        </span>
                    </div>

                    <h2 className="resource-animate text-[46px] font-normal leading-[1.08] tracking-[-0.055em] text-[#071515] dark:text-[#e8edee] sm:text-[58px] lg:text-[66px]">
                        {resourceSection.headingLine1}{' '}
                        <span className="text-[#188b88] dark:text-[#4ecdc4]">
                            {resourceSection.highlightedText}
                        </span>
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {resourceSection.resources.map((item, index) => (
                        <article
                            key={index}
                            className="resource-animate overflow-hidden rounded-[8px] bg-white opacity-0 dark:bg-[#0f1f1d]"
                        >
                            {/* Image */}
                            <div className="relative h-[280px] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-[#061f20]/35 dark:bg-[#061f20]/45" />

                                {/* Date Box */}
                                <div className="absolute left-6 top-6 flex h-[98px] w-[82px] flex-col items-center justify-center rounded-[4px] bg-white/12 text-white backdrop-blur-[10px]">
                                    <span className="text-[34px] font-bold leading-none tracking-[-0.04em]">
                                        {item.date}
                                    </span>
                                    <span className="mt-3 text-[14px] font-bold uppercase leading-none tracking-[0.12em]">
                                        {item.month}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-8 pb-9 pt-7">
                                <div className="mb-7 flex flex-wrap items-center gap-3">
                                    <span className="rounded-[3px] border border-[#aebbbb] px-2.5 py-1 text-[16px] font-medium leading-none tracking-[-0.03em] text-[#071515] dark:border-[#2a3f3d] dark:text-[#e8edee]">
                                        {item.category}
                                    </span>

                                    <span className="text-[15px] font-medium leading-none text-[#657171] dark:text-[#9daaaa]">
                                        {resourceSection.authorPrefix} {item.author}
                                    </span>
                                </div>

                                <h3 className="mb-8 min-h-[72px] text-[25px] font-bold leading-[1.24] tracking-[-0.05em] text-[#071515] dark:text-[#e8edee]">
                                    {item.title}
                                </h3>

                                <a
                                    href={item.link}
                                    className="group inline-flex items-center gap-3 text-[16px] font-bold leading-none text-[#071515] dark:text-[#e8edee]"
                                >
                                    {resourceSection.ctaText}

                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#071515] text-white transition-transform duration-300 group-hover:rotate-45 dark:bg-[#4ecdc4] dark:text-[#0a1a18]">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}