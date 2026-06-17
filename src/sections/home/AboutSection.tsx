import { useEffect, useRef } from 'react';
import { Star, Quote, ArrowUpRight, Play, Box } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
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

      gsap.to(counter, {
        value: 13,
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
            countRef.current.textContent = '13+';
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--color-base)] px-4 py-24 sm:px-6 lg:px-12 xl:px-20"
    >
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr]">
        {/* Left Image Area */}
        <div ref={leftImageRef} className="relative min-h-[560px] opacity-0 lg:min-h-[660px]">
          <div className="absolute inset-0 overflow-hidden rounded-[10px]">
            <img
              src="/images/about-professionals.jpg"
              alt="Business professionals"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#061f20]/20" />
          </div>

          {/* Experience Card */}
          <div
            ref={experienceRef}
            className="absolute bottom-0 left-0 w-[245px] rounded-tr-[10px] bg-white px-6 py-11 opacity-0 sm:w-[265px]"
          >
            <p className="mb-12 text-[15px] font-medium tracking-[-0.02em] text-[#188b88]">
              Experiences
            </p>

            <div
              ref={countRef}
              className="font-mono text-[58px] font-bold leading-none tracking-[-0.08em] text-[#071515]"
            >
              0+
            </div>

            <p className="mt-4 max-w-[190px] text-[16px] leading-[1.5] tracking-[-0.03em] text-[#455050]">
              Decades of Experience, Endless Innovation
            </p>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="grid grid-rows-[auto_auto] gap-5">
          {/* Top White Text Card */}
          <div
            ref={rightTopRef}
            className="flex min-h-[400px] flex-col rounded-[10px] bg-white px-8 py-8 opacity-0 sm:px-10 lg:px-12"
          >
            <div className="about-text-reveal mb-7 inline-flex w-fit items-center gap-3 rounded-[3px] border border-dashed border-[#c8d2d2] bg-transparent px-4 py-2">
              <Box className="h-4 w-4 fill-[#188b88] text-[#188b88]" />
              <span className="text-[13px] font-bold uppercase tracking-[0.22em] text-[#071515]">
                Get To Know Us
              </span>
            </div>

            <h2 className="mb-auto overflow-hidden text-[38px] font-normal leading-[1.15] tracking-[-0.055em] text-[#071515] sm:text-[48px] lg:text-[54px] xl:text-[58px]">
              <span className="about-text-reveal block">
                Empowering Businesses
              </span>
              <span className="about-text-reveal block">
                with Innovation, Expertise,
              </span>
              <span className="about-text-reveal block">
                and for{' '}
                <em className="not-italic text-[#188b88]">
                  Success.
                </em>
              </span>
            </h2>

            <a
              href="/about-us"
              className="about-text-reveal group mt-10 inline-flex w-fit items-center gap-3 text-[15px] font-bold text-[#071515]"
            >
              Learn More
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#071515] text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.45fr_0.82fr]">
            {/* Testimonial */}
            <div
              ref={testimonialRef}
              className="relative min-h-[238px] overflow-hidden rounded-[8px] bg-[#188b88] px-8 py-8 text-white opacity-0"
            >
              <div className="mb-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-white text-white"
                    strokeWidth={1}
                  />
                ))}
              </div>

              <p className="max-w-[390px] text-[16px] font-semibold leading-[1.55] tracking-[-0.03em] text-white">
                We believe in building lasting relationships with our clients
                through trust, innovation, and exceptional service.
              </p>

              <div className="mt-9">
                <p className="text-[18px] font-bold leading-none tracking-[-0.04em]">
                  Esther Howard
                </p>
                <p className="mt-2 text-[14px] text-white/75">
                  Co. Founder
                </p>
              </div>

              <Quote
                className="absolute bottom-7 right-8 h-20 w-20 rotate-180 text-white"
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
                src="/images/about-video.jpg"
                alt="Client video"
                className="h-full min-h-[238px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#061f20]/35" />

              <button
                type="button"
                className="absolute left-1/2 top-1/2 flex h-[62px] w-[62px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#071515]/85 text-white shadow-[0_18px_50px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-110"
                aria-label="Play video"
              >
                <Play className="ml-1 h-5 w-5 fill-white text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}