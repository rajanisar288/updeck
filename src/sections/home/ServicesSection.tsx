import { useEffect, useRef } from 'react';
import {
  Lightbulb,
  Award,
  Headphones,
  Box,
  type LucideIcon,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description:
      'We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace.',
  },
  {
    icon: Award,
    title: 'Award-Winning Expertise',
    description:
      'Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description:
      'Our team is always available to address your concerns, providing quick and effective solution to keep your business.',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 72%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        labelRef.current,
        {
          y: 26,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
        }
      )
        .fromTo(
          headingRef.current?.querySelectorAll('.heading-line') || [],
          {
            y: 45,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.12,
          },
          '-=0.2'
        )
        .fromTo(
          cardsRef.current?.querySelectorAll('.service-card-item') || [],
          {
            x: 34,
            y: -34,
            opacity: 0,
            scale: 0.96,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.16,
          },
          '-=0.2'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--color-base)] px-4 py-24 sm:px-6 lg:px-12 xl:px-20"
    >
      <div className="mx-auto max-w-[1340px]">
        {/* Top Heading */}
        <div className="mb-16 text-center">
          <div
            ref={labelRef}
            className="mx-auto mb-7 inline-flex items-center gap-3 rounded-[3px] border border-dashed border-[#c8d2d2] bg-transparent px-4 py-2"
          >
            <Box className="h-4 w-4 fill-[#188b88] text-[#188b88]" />
            <span className="text-[13px] font-bold uppercase tracking-[0.22em] text-[#071515]">
              Choose The Best
            </span>
          </div>

          <h2
            ref={headingRef}
            className="overflow-hidden text-[38px] font-normal leading-[1.12] tracking-[-0.04em] text-[#071515] sm:text-[48px] lg:text-[56px]"
          >
            <span className="heading-line block">Empowering Business</span>
            <span className="heading-line block">
              with{' '}
              <em className="not-italic text-[#188b88]">
                Expertise.
              </em>
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="service-card-item service-card group min-h-[350px] rounded-[8px] bg-white px-8 py-12 text-left shadow-none transition-all duration-500 hover:bg-[#188b88] sm:px-10"
              >
                <div className="service-icon-bubble mb-14 inline-flex h-[72px] w-[72px] origin-center items-center justify-center">
                  <Icon
                    className="h-[68px] w-[68px] text-[#188b88] transition-colors duration-500 group-hover:text-white"
                    strokeWidth={1.25}
                  />
                </div>

                <h3 className="mb-6 text-[22px] font-bold leading-tight tracking-[-0.04em] text-[#071515] transition-colors duration-500 group-hover:text-white lg:text-[24px]">
                  {service.title}
                </h3>

                <p className="max-w-[360px] text-[16px] leading-[1.65] tracking-[-0.02em] text-[#455050] transition-colors duration-500 group-hover:text-white/95">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}