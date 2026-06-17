import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { ArrowUpRight, Box, Sparkles, Plus, ChevronRight, Aperture } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import 'swiper/css';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    icon: Sparkles,
    title: 'Training and Development Programs',
    description:
      'Empower your workforce with cutting-edge skills and knowledge to drive organizational excellence and growth.',
    image: '/images/project-learning.jpg',
  },
  {
    icon: Plus,
    title: 'Business Strategy Development',
    description:
      'Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized.',
    image: '/images/project-event.jpg',
  },
  {
    icon: Aperture,
    title: 'Customer Experience Solutions',
    description:
      'Developing personalized customer journeys to increase satisfaction and loyalty of our expansion to keep competitive.',
    image: '/images/project-marketing.jpg',
  },
  {
    icon: ChevronRight,
    title: 'Sustainability and ESG Consulting',
    description:
      'Provide tailored strategies that not only drive long-term value but also build trust with stakeholders, investors.',
    image: '/images/project-environmental.jpg',
  },
  {
    icon: Sparkles,
    title: 'Training and Development Programs',
    description:
      'Empower your workforce with cutting-edge skills and knowledge to drive organizational excellence and growth.',
    image: '/images/project-learning.jpg',
  },
  {
    icon: Plus,
    title: 'Business Strategy Development',
    description:
      'Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized.',
    image: '/images/project-event.jpg',
  },
];
const sliderSolutions = [...solutions, ...solutions, ...solutions];
export default function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        labelRef.current,
        {
          y: 28,
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
            y: 48,
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
          sliderRef.current,
          {
            x: 45,
            y: -35,
            opacity: 0,
            scale: 0.97,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
          },
          '-=0.15'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#061f20] py-20 text-white"
    >
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
            className="mx-auto mb-7 inline-flex items-center gap-3 rounded-[3px] border border-dashed border-white/15 bg-transparent px-4 py-2 opacity-0"
          >
            <Box className="h-4 w-4 fill-[#188b88] text-[#188b88]" />
            <span className="text-[13px] font-bold uppercase tracking-[0.22em] text-white">
              Our Solutions
            </span>
          </div>

          <h2
            ref={headingRef}
            className="overflow-hidden text-[40px] font-normal leading-[1.13] tracking-[-0.045em] text-white sm:text-[52px] lg:text-[58px]"
          >
            <span className="heading-line block">Solutions to Transform</span>
            <span className="heading-line block">
              Your{' '}
              <em className="not-italic text-[#188b88]">
                Business.
              </em>
            </span>
          </h2>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="opacity-0">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={900}
            loop={true}
            loopAdditionalSlides={12}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={28}
            watchSlidesProgress={true}
            className="solutions-swiper !overflow-visible !pb-20"
          >
            {sliderSolutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <SwiperSlide
                  key={`${solution.title}-${index}`}
                  className="!h-auto !w-[430px] max-w-[86vw]"
                >
                  <div className="solution-card group relative h-[455px] overflow-hidden rounded-[8px] border border-white/[0.03] bg-[#132b2d] transition-all duration-500 hover:border-[#188b88]/35">
                    {/* image on hover */}
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-45"
                    />

                    {/* teal overlay */}
                    <div className="absolute inset-0 bg-[#061f20]/35 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061f20] via-[#061f20]/55 to-[#188b88]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Icon */}
                    <div className="absolute left-8 top-9 z-10 flex h-[80px] w-[80px] items-center justify-center rounded-full border border-[#188b88]/20 bg-[#188b88]/10 transition-all duration-500 group-hover:translate-y-[-8px] group-hover:bg-[#188b88]/20">
                      <Icon
                        className="h-11 w-11 text-[#188b88]"
                        strokeWidth={1.4}
                        fill="currentColor"
                      />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-8">
                      <h3 className="max-w-[320px] text-[25px] font-bold leading-[1.2] tracking-[-0.055em] text-white">
                        {solution.title}
                      </h3>

                      <div className="grid max-h-0 opacity-0 transition-all duration-500 group-hover:mt-5 group-hover:max-h-[180px] group-hover:opacity-100">
                        <p className="max-w-[350px] text-[16px] leading-[1.55] tracking-[-0.03em] text-white/70">
                          {solution.description}
                        </p>

                        <a
                          href="/services"
                          className="mt-7 inline-flex w-fit items-center gap-3 text-[15px] font-bold text-white"
                        >
                          Learn More
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#188b88] text-white transition-transform duration-300 group-hover:rotate-45">
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}