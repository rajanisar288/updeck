import PageTitle from '@/components/shared/PageTitle';
import { CASE_STUDIES } from '@/data/content';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Box, ChevronRight, Home } from 'lucide-react';
import { useEffect, useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const images = {
  hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80',
};

// const portfolios = [
//   {
//     category: 'Business',
//     title: 'Environmental Impact Dashboard',
//     image:
//       'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80',
//   },
//   {
//     category: 'Growth',
//     title: 'Rebranding Strategy for a Growing',
//     image:
//       'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
//   },
//   {
//     category: 'Excellence',
//     title: 'Event Management Platform',
//     image:
//       'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
//   },
//   {
//     category: 'Empower',
//     title: 'Digital Marketing Campaign',
//     image:
//       'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80',
//   },
//   {
//     category: 'Branding',
//     title: 'Interactive Learning Platform',
//     image:
//       'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80',
//   },
//   {
//     category: 'Designing',
//     title: 'Integrated Marketing Campaign',
//     image:
//       'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
//   },
// ];

function SectionBadge({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-[2px] border border-dashed px-4 py-2 ${
        dark
          ? 'border-white/15 text-white'
          : 'border-[#c3cece] text-[#071515] dark:border-[#2a3f3d] dark:text-white'
      }`}
    >
      <Box
        className={`h-4 w-4 ${
          dark
            ? 'fill-[#4ecdc4] text-[#4ecdc4]'
            : 'fill-[#188b88] text-[#188b88] dark:fill-[#4ecdc4] dark:text-[#4ecdc4]'
        }`}
      />

      <span className="text-[13px] font-bold uppercase leading-none tracking-[0.2em]">
        {children}
      </span>
    </div>
  );
}

function PortfolioHero() {
  return (
    <section className="px-3 pb-3 pt-[100px]">
      <div className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-[#061f20]">
        <img
          src={images.hero}
          alt="Portfolios"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
        />

        <div className="absolute inset-0 bg-[#061f20]/70" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
          <div className="absolute -left-24 top-0 h-full w-[34%] rotate-[-22deg] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.2)_0px,rgba(255,255,255,0.2)_1px,transparent_1px,transparent_13px)]" />
          <div className="absolute right-0 top-0 h-full w-[34%] bg-[repeating-linear-gradient(75deg,rgba(255,255,255,0.18)_0px,rgba(255,255,255,0.18)_1px,transparent_1px,transparent_13px)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-[1320px] flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-12">
          <motion.h1
            initial={{ y: 34, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="text-[60px] font-normal leading-none tracking-[-0.055em] text-white sm:text-[82px] lg:text-[92px]"
          >
            Portfolio
          </motion.h1>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.75, ease: 'easeOut' }}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-[14px] font-semibold text-white/75 backdrop-blur-md"
          >
            <Home className="h-4 w-4 fill-[#188b88] text-[#188b88] dark:fill-[#4ecdc4] dark:text-[#4ecdc4]" />

            <Link to="/" className="transition-colors duration-300 hover:text-[#4ecdc4]">
              Home
            </Link>

            <ChevronRight className="h-4 w-4 text-white/45" />

            <span className="text-white">Portfolio</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// function PortfolioCard({ item }: { item: (typeof portfolios)[number] }) {
//   return (
//     <motion.article
//       className="portfolio-reveal group overflow-hidden rounded-[8px] bg-white dark:bg-[#0f1f1d]"
//       whileHover={{ y: -8 }}
//       transition={{ type: 'spring', stiffness: 260, damping: 22 }}
//     >
//       <div className="relative h-[280px] overflow-hidden">
//         <img
//           src={item.image}
//           alt={item.title}
//           className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
//         />

//         <div className="absolute inset-0 bg-[#061f20]/20 transition-colors duration-500 group-hover:bg-[#061f20]/55" />

//         <Link
//           to="/contact"
//           className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full bg-white text-[#071515] opacity-0 shadow-[0_14px_40px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
//           aria-label={`Open ${item.title}`}
//         >
//           <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:rotate-45" />
//         </Link>
//       </div>

//       <div className="px-8 pb-8 pt-6">
//         <span className="mb-5 inline-flex rounded-[3px] border border-[#b7c5c5] px-2.5 py-1 text-[13px] font-medium leading-none tracking-[-0.03em] text-[#536363] dark:border-[#2a3f3d] dark:text-[#9daaaa]">
//           {item.category}
//         </span>

//         <h3 className="max-w-[330px] text-[27px] font-bold leading-[1.18] tracking-[-0.055em] text-[#071515] transition-colors duration-300 group-hover:text-[#188b88] dark:text-white dark:group-hover:text-[#4ecdc4]">
//           {item.title}
//         </h3>
//       </div>
//     </motion.article>
//   );
// }

// function PortfolioGridSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         '.portfolio-reveal',
//         {
//           y: 48,
//           opacity: 0,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.85,
//           stagger: 0.1,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: 'top 72%',
//             toggleActions: 'play none none none',
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="px-4 py-24 sm:px-6 lg:px-12 xl:px-20">
//       <div ref={sectionRef} className="mx-auto max-w-[1320px]">
//         <div className="mb-14 text-center">
//           <div className="portfolio-reveal mb-6">
//             <SectionBadge>Latest Works</SectionBadge>
//           </div>

//           <h2 className="portfolio-reveal text-[44px] font-normal leading-[1.08] tracking-[-0.055em] text-[#071515] dark:text-white sm:text-[56px] lg:text-[64px]">
//             Explore Our <span className="text-[#188b88] dark:text-[#4ecdc4]">Portfolios.</span>
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
//           {portfolios.map((item) => (
//             <PortfolioCard key={item.title} item={item} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function CaseStudyCard({ study, index }: { study: (typeof CASE_STUDIES)[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <article className="case-study-reveal flex flex-col md:flex-row items-center gap-10 md:gap-16 py-16 border-b border-[#e5ecec] dark:border-[#1a2e2d] last:border-0">
      <div className={`w-full md:w-1/2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <div className="relative overflow-hidden rounded-[16px] bg-[#f4f7f7] dark:bg-[#152624] aspect-[4/3] group">
          <div className="absolute inset-[-15%] h-[130%] w-[130%]">
            <img
              src={study.image}
              alt={study.alt}
              className="cs-image-parallax absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="absolute inset-0 bg-[#061f20]/10 transition-colors duration-500 group-hover:bg-[#061f20]/30" />
        </div>
      </div>

      <div className={`w-full md:w-1/2 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <h3 className="mb-6 text-[32px] md:text-[40px] font-bold leading-[1.1] tracking-[-0.04em] text-[#071515] dark:text-white">
          {study.title}
        </h3>
        <p className="mb-10 text-[17px] leading-[1.6] text-[#435151] dark:text-[#9daaaa]">
          {study.description}
        </p>
        <Link
          to={`/case-studies/${study.slug}`}
          className="inline-flex items-center gap-3 rounded-full bg-[#188b88] px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#071515] hover:-translate-y-1 hover:shadow-lg dark:bg-[#4ecdc4] dark:text-[#0a1a18] dark:hover:bg-white"
        >
          View Case Study
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.case-study-reveal').forEach((element: any) => {
        // Card entrance reveal
        gsap.fromTo(
          element,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Image parallax scrubbing
        const parallaxImg = element.querySelector('.cs-image-parallax');
        if (parallaxImg) {
          gsap.to(parallaxImg, {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-12 xl:px-20 bg-white dark:bg-[#0f1f1d]">
      <div ref={sectionRef} className="mx-auto max-w-[1320px]">
        <div className="mb-16 text-center">
          <div className="case-study-reveal mb-6">
            <SectionBadge>Case Studies</SectionBadge>
          </div>

          <h2 className="case-study-reveal text-[44px] font-normal leading-[1.08] tracking-[-0.055em] text-[#071515] dark:text-white sm:text-[56px] lg:text-[64px]">
            Discover Our <span className="text-[#188b88] dark:text-[#4ecdc4]">Projects</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <>
      <PageTitle title="Portfolio" description="Welcome to Updeck - Your trusted partner" />
      <main className="overflow-hidden bg-[var(--color-base)] dark:bg-[#0a1a18]">
        <PortfolioHero />
        {/* <PortfolioGridSection /> */}
        <CaseStudiesSection />
      </main>
    </>
  );
}
