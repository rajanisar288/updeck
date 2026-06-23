// src/pages/AboutUs.tsx

import PageTitle from '@/components/shared/PageTitle';
import { content } from '@/data/content';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Box, Check, ChevronRight, Home } from 'lucide-react';
import { useEffect, useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

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

function PillButton({
  to,
  children,
  dark = false,
}: {
  to: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`group inline-flex h-[46px] items-center rounded-full pl-6 pr-1.5 text-[14px] font-bold transition-colors duration-300 ${
        dark
          ? 'bg-[#071515] text-white hover:bg-black'
          : 'bg-[#188b88] text-white hover:bg-[#157a76]'
      }`}
    >
      {children}

      <span
        className={`ml-4 flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${
          dark ? 'bg-white text-[#071515]' : 'bg-[#071515] text-white'
        }`}
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

function PatternBackground() {
  return (
    <>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[28%] opacity-[0.22] dark:opacity-[0.12]">
        <div className="absolute -left-28 top-0 h-full w-full rotate-[-18deg] bg-[repeating-linear-gradient(90deg,rgba(7,21,21,0.24)_0px,rgba(7,21,21,0.24)_1px,transparent_1px,transparent_12px)]" />
      </div>

      <div className="pointer-events-none absolute bottom-0 right-0 h-full w-[30%] opacity-[0.22] dark:opacity-[0.12]">
        <div className="absolute -right-28 bottom-0 h-full w-full rotate-[-18deg] bg-[repeating-linear-gradient(90deg,rgba(7,21,21,0.24)_0px,rgba(7,21,21,0.24)_1px,transparent_1px,transparent_12px)]" />
      </div>
    </>
  );
}

function FeatureCard({ item }: { item: any }) {
  const Icon = item.icon;

  return (
    <motion.div
      className="about-reveal group rounded-[7px] bg-white p-10 text-[#071515] transition-all duration-500 hover:bg-[#188b88] hover:text-white hover:shadow-[0_24px_70px_rgba(24,139,136,0.22)] dark:bg-[#0f1f1d] dark:text-white dark:hover:bg-[#4ecdc4] dark:hover:text-[#0a1a18]"
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <div className="mb-12 flex h-14 w-14 items-center justify-center text-[#188b88] transition-colors duration-500 group-hover:text-white/85 dark:text-[#4ecdc4] dark:group-hover:text-[#0a1a18]/85">
        <Icon className="h-12 w-12 stroke-[1.15]" />
      </div>

      <h3 className="mb-5 text-[22px] font-bold leading-none tracking-[-0.04em] text-[#071515] transition-colors duration-500 group-hover:text-white dark:text-white dark:group-hover:text-[#0a1a18]">
        {item.title}
      </h3>

      <p className="max-w-[330px] text-[16px] font-medium leading-[1.58] tracking-[-0.03em] text-[#536363] transition-colors duration-500 group-hover:text-white/90 dark:text-[#9daaaa] dark:group-hover:text-[#0a1a18]/85">
        {item.text}
      </p>
    </motion.div>
  );
}

function MissionCard({ title, text, points }: { title: string; text: string; points: string[] }) {
  return (
    <div className="rounded-[7px] bg-white p-7 dark:bg-[#0f1f1d]">
      <h4 className="mb-4 text-[18px] font-bold leading-none text-[#071515] dark:text-white">
        {title}
      </h4>

      <p className="mb-6 text-[15px] font-medium leading-[1.55] tracking-[-0.03em] text-[#536363] dark:text-[#9daaaa]">
        {text}
      </p>

      <ul className="space-y-3">
        {points.map((point) => (
          <li
            key={point}
            className="flex items-center gap-2 text-[14px] font-semibold text-[#536363] dark:text-[#9daaaa]"
          >
            <Check className="h-4 w-4 text-[#188b88] dark:text-[#4ecdc4]" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

// function TeamCard({ member }: { member: any }) {
//   return (
//     <motion.div
//       className="about-reveal group"
//       whileHover={{ y: -8 }}
//       transition={{ type: 'spring', stiffness: 260, damping: 22 }}
//     >
//       <div className="relative h-[430px] overflow-hidden rounded-[7px] bg-[#cddada]">
//         <img
//           src={member.image}
//           alt={member.name}
//           className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
//         />

//         <div className="absolute inset-0 bg-[#061f20]/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//         <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 translate-y-5 items-center gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
//           {member.socialLinks.map((social: any, index: number) => {
//             const Icon = social.icon;
//             return (
//               <a
//                 key={index}
//                 href={social.url}
//                 className="flex h-11 w-11 items-center justify-center rounded-full bg-white/22 text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#188b88] hover:text-white dark:hover:bg-[#4ecdc4] dark:hover:text-[#0a1a18]"
//                 aria-label="Social link"
//               >
//                 <Icon className="h-4 w-4" />
//               </a>
//             );
//           })}
//         </div>
//       </div>

//       <div className="mt-6 flex items-start justify-between gap-4">
//         <div>
//           <h3 className="text-[24px] font-bold leading-none tracking-[-0.05em] text-[#071515] dark:text-white">
//             {member.name}
//           </h3>

//           <p className="mt-3 text-[15px] font-medium leading-none text-[#536363] dark:text-[#9daaaa]">
//             {member.role}
//           </p>
//         </div>

//         <a
//           href="#"
//           className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white text-[22px] font-bold leading-none text-[#071515] shadow-[0_8px_24px_rgba(7,21,21,0.08)] transition-colors duration-300 hover:bg-[#188b88] hover:text-white dark:bg-[#0f1f1d] dark:text-white dark:hover:bg-[#4ecdc4] dark:hover:text-[#0a1a18]"
//           aria-label={`${member.name} profile`}
//         >
//           @
//         </a>
//       </div>
//     </motion.div>
//   );
// }

function AboutHero() {
  const { aboutPage } = content;

  return (
    <section className="px-3 pb-3 pt-[100px]">
      <div className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-[#061f20]">
        <img
          src={aboutPage.heroImage}
          alt="About Us"
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
            {aboutPage.heroTitle}
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

            <span className="text-white">{aboutPage.breadcrumbText}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ChooseBestSection() {
  const { aboutPage } = content;

  return (
    <section className="about-section px-4 py-24 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="about-reveal mb-6">
              <SectionBadge>{aboutPage.chooseBestBadge}</SectionBadge>
            </div>

            <h2 className="about-reveal max-w-[650px] text-[44px] font-normal leading-[1.08] tracking-[-0.055em] text-[#071515] dark:text-white sm:text-[56px] lg:text-[64px]">
              {aboutPage.chooseBestHeading}{' '}
              <span className="text-[#188b88] dark:text-[#4ecdc4]">
                {aboutPage.chooseBestHighlight}.
              </span>
            </h2>
          </div>

          <div className="about-reveal">
            <PillButton to="/contact">{aboutPage.chooseBestCta}</PillButton>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {aboutPage.featureCards.map((item: any) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  const { aboutPage } = content;
  const missionSectionRef = useRef<HTMLElement>(null);
  const progressOneRef = useRef<HTMLDivElement>(null);
  const progressTwoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressOneRef.current,
        {
          width: '0%',
        },
        {
          width: '82%',
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: missionSectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        progressTwoRef.current,
        {
          width: '0%',
        },
        {
          width: '90%',
          duration: 1.4,
          delay: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: missionSectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, missionSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={missionSectionRef}
      className="about-section relative overflow-hidden bg-[#dfe9e9] px-4 py-24 dark:bg-[#081d1b] sm:px-6 lg:px-12 xl:px-20"
    >
      <PatternBackground />

      <div className="relative z-10 mx-auto grid max-w-[1320px] grid-cols-1 items-stretch gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left Image */}
        <div className="about-reveal relative min-h-[610px] h-full overflow-hidden rounded-[8px]">
          <img
            src={aboutPage.missionImage}
            alt="Business progress"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-[#061f20]/20" />

          {/* Progress Glass Card */}
          <div className="absolute bottom-8 left-8 w-[360px] rounded-[8px] border border-white/10 bg-[#061f20]/45 p-7 text-white shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-[18px]">
            <h4 className="mb-6 text-[22px] font-bold leading-none tracking-[-0.04em]">
              {aboutPage.progressTitle}
            </h4>

            <div className="space-y-7">
              <div>
                <div className="mb-3 flex items-center justify-between text-[15px] font-bold leading-none">
                  <span>{aboutPage.progressLabel1}</span>
                  <span>82%</span>
                </div>

                <div className="h-[3px] overflow-hidden rounded-full bg-white/35">
                  <div
                    ref={progressOneRef}
                    className="h-full w-0 rounded-full bg-[#188b88] dark:bg-[#4ecdc4]"
                  />
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between text-[15px] font-bold leading-none">
                  <span>{aboutPage.progressLabel2}</span>
                  <span>90%</span>
                </div>

                <div className="h-[3px] overflow-hidden rounded-full bg-white/35">
                  <div
                    ref={progressTwoRef}
                    className="h-full w-0 rounded-full bg-[#188b88] dark:bg-[#4ecdc4]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center">
          <div className="about-reveal mb-6">
            <SectionBadge>{aboutPage.missionBadge}</SectionBadge>
          </div>

          <h2 className="about-reveal mb-9 max-w-[700px] text-[44px] font-normal leading-[1.08] tracking-[-0.055em] text-[#071515] dark:text-white sm:text-[56px] lg:text-[62px]">
            {aboutPage.missionHeading}{' '}
            <span className="text-[#188b88] dark:text-[#4ecdc4]">
              {aboutPage.missionHighlight}.
            </span>
          </h2>

          <div className="about-reveal grid grid-cols-1 gap-6 sm:grid-cols-2">
            <MissionCard
              title={aboutPage.missionCardTitle}
              text={aboutPage.missionCardText}
              points={aboutPage.missionPoints}
            />

            <MissionCard
              title={aboutPage.visionCardTitle}
              text={aboutPage.visionCardText}
              points={aboutPage.visionPoints}
            />
          </div>

          {/* Full Width Button */}
          {/* <div className="about-reveal mt-7">
            <Link
              to="/contact"
              className="group flex h-[56px] w-full items-center justify-center rounded-[7px] bg-[#188b88] text-[16px] font-bold text-white transition-colors duration-300 hover:bg-[#157a76] dark:bg-[#4ecdc4] dark:text-[#0a1a18] dark:hover:bg-[#43b8b0]"
            >
              {aboutPage.missionCta}

              <span className="ml-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#071515] text-white transition-transform duration-300 group-hover:rotate-45 dark:bg-[#0a1a18]">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}

// function LogoMarqueeSection() {
//   const { aboutPage } = content;

//   return (
//     <section className="about-section relative overflow-hidden bg-[var(--color-base)] py-20 dark:bg-[#0a1a18]">
//       <div className="relative h-[250px]">
//         <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[22%] bg-gradient-to-r from-[var(--color-base)] to-transparent dark:from-[#0a1a18]" />
//         <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[22%] bg-gradient-to-l from-[var(--color-base)] to-transparent dark:from-[#0a1a18]" />

//         <div className="absolute left-0 top-1/2 flex w-max -translate-y-1/2 animate-marquee gap-8 whitespace-nowrap">
//           {[...aboutPage.logos, ...aboutPage.logos, ...aboutPage.logos].map(
//             (logo: string, index: number) => (
//               <div
//                 key={`${logo}-${index}`}
//                 className="flex h-[118px] w-[285px] items-center justify-center rounded-[6px] bg-white/85 px-8 dark:bg-[#0f1f1d]/85"
//               >
//                 <span className="text-[28px] font-bold text-[#071515]/35 dark:text-white/30">
//                   {logo}
//                 </span>
//               </div>
//             )
//           )}
//         </div>

//         <div className="absolute left-1/2 top-1/2 z-30 flex h-[330px] mt-[52px] w-[330px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-dashed border-[#c6d0d0] bg-[var(--color-base)]/75 text-center backdrop-blur-sm dark:border-[#2a3f3d] dark:bg-[#0a1a18]/75">
//           <p className="text-[21px] font-bold leading-[1.35] text-[#071515] dark:text-white">
//             {aboutPage.marqueeText1}{' '}
//             <span className="rounded-full bg-[#188b88] px-2.5 py-0.5 text-white dark:bg-[#4ecdc4] dark:text-[#0a1a18]">
//               {aboutPage.marqueeHighlight}
//             </span>
//             <br />
//             {aboutPage.marqueeText2}
//             <br />
//             {aboutPage.marqueeText3}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// function CustomerReviewSection() {
//   const { aboutPage } = content;

//   return (
//     <section className="about-section px-4 py-24 sm:px-6 lg:px-12 xl:px-20">
//       <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr]">
//         <div className="about-reveal rounded-[8px] bg-white p-10 dark:bg-[#0f1f1d] lg:p-12">
//           <Quote
//             className="mb-10 h-20 w-20 rotate-180 text-[#188b88] dark:text-[#4ecdc4]"
//             fill="currentColor"
//             strokeWidth={0}
//           />

//           <p className="mb-12 max-w-[560px] text-[18px] font-medium leading-[1.65] tracking-[-0.03em] text-[#536363] dark:text-[#9daaaa]">
//             {aboutPage.reviewText}
//           </p>

//           <div className="flex items-center gap-4 border-t border-dashed border-[#cbd6d6] pt-7 dark:border-[#2a3f3d]">
//             <img
//               src={aboutPage.reviewAuthorImage}
//               alt={aboutPage.reviewAuthorName}
//               className="h-14 w-14 rounded-full object-cover"
//             />

//             <div>
//               <h4 className="text-[20px] font-bold leading-none text-[#071515] dark:text-white">
//                 {aboutPage.reviewAuthorName}
//               </h4>

//               <p className="mt-2 text-[13px] font-medium text-[#536363] dark:text-[#9daaaa]">
//                 {aboutPage.reviewAuthorRole}
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="about-reveal relative min-h-[450px] overflow-hidden rounded-[8px]">
//           <img
//             src={aboutPage.reviewImage}
//             alt="Customer review"
//             className="h-full w-full object-cover object-center"
//           />

//           <div className="absolute inset-0 bg-[#061f20]/45" />

//           <h3 className="absolute left-9 top-9 max-w-[380px] text-[48px] font-normal leading-[1.08] tracking-[-0.055em] text-white">
//             {aboutPage.reviewBadgeTitle}
//           </h3>

//           <div className="absolute bottom-0 right-0 w-[170px] bg-[#188b88] p-7 text-white dark:bg-[#4ecdc4] dark:text-[#0a1a18]">
//             <h4 className="mb-5 text-[58px] font-normal leading-none tracking-[-0.06em]">
//               {aboutPage.reviewRating}
//             </h4>

//             <div className="mb-3 flex gap-1">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <Star key={star} className="h-4 w-4 fill-current" />
//               ))}
//             </div>

//             <p className="text-[11px] font-bold">{aboutPage.reviewCount}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function TeamSection() {
//   const { aboutPage } = content;

//   return (
//     <section className="about-section relative overflow-hidden bg-[#dfe9e9] px-4 py-24 dark:bg-[#081d1b] sm:px-6 lg:px-12 xl:px-20">
//       <PatternBackground />

//       <div className="relative z-10 mx-auto max-w-[1320px]">
//         <div className="mb-14 text-center">
//           <div className="about-reveal mb-6">
//             <SectionBadge>{aboutPage.teamBadge}</SectionBadge>
//           </div>

//           <h2 className="about-reveal text-[44px] font-normal leading-[1.08] tracking-[-0.055em] text-[#071515] dark:text-white sm:text-[56px] lg:text-[64px]">
//             {aboutPage.teamHeading1}{' '}
//             <span className="text-[#188b88] dark:text-[#4ecdc4]">{aboutPage.teamHighlight}</span>{' '}
//             {aboutPage.teamHeading2}
//             <br />
//             {aboutPage.teamHeading3}
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {aboutPage.teamMembers.map((member: any) => (
//             <TeamCard key={member.name} member={member} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function AboutFAQSection() {
//   const { aboutPage } = content;
//   const [openIndex, setOpenIndex] = useState(0);

//   return (
//     <section className="about-section px-4 py-24 sm:px-6 lg:px-12 xl:px-20">
//       <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
//         <div className="about-reveal">
//           <SectionBadge>{aboutPage.faqBadge}</SectionBadge>

//           <h2 className="mt-7 max-w-[460px] text-[48px] font-normal leading-[1.08] tracking-[-0.055em] text-[#071515] dark:text-white sm:text-[60px]">
//             {aboutPage.faqHeading}
//           </h2>

//           <p className="mt-7 max-w-[380px] text-[16px] font-medium leading-[1.6] text-[#536363] dark:text-[#9daaaa]">
//             {aboutPage.faqDescription}
//           </p>

//           <div className="mt-9">
//             <PillButton to="/contact">{aboutPage.faqCta}</PillButton>
//           </div>
//         </div>

//         <div className="about-reveal space-y-5">
//           {aboutPage.faqs.map((faq: any, index: number) => {
//             const isOpen = openIndex === index;

//             return (
//               <div
//                 key={faq.question}
//                 className="overflow-hidden rounded-[7px] bg-white dark:bg-[#0f1f1d]"
//               >
//                 <button
//                   type="button"
//                   onClick={() => setOpenIndex(isOpen ? -1 : index)}
//                   className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left"
//                 >
//                   <span className="text-[18px] font-bold tracking-[-0.03em] text-[#071515] dark:text-white">
//                     {faq.question}
//                   </span>

//                   <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[#188b88] text-[#188b88] dark:border-[#4ecdc4] dark:text-[#4ecdc4]">
//                     {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
//                   </span>
//                 </button>

//                 <div
//                   className={`overflow-hidden transition-all duration-300 ${
//                     isOpen ? 'max-h-[220px]' : 'max-h-0'
//                   }`}
//                 >
//                   <div className="px-8 pb-8">
//                     <p className="border-t border-[#d8e0e0] pt-6 text-[16px] font-medium leading-[1.6] text-[#536363] dark:border-[#2a3f3d] dark:text-[#9daaaa]">
//                       {faq.answer}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function AboutUs() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.about-section').forEach((section) => {
        gsap.fromTo(
          section.querySelectorAll('.about-reveal'),
          {
            y: 42,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.82,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 72%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageTitle title="About Us" description="Welcome to Updeck - Your trusted partner" />
      <main ref={pageRef} className="overflow-hidden bg-[var(--color-base)] dark:bg-[#0a1a18]">
        <AboutHero />
        <ChooseBestSection />
        <MissionVisionSection />
        {/* <LogoMarqueeSection />
      <CustomerReviewSection />
      <TeamSection />
      <AboutFAQSection /> */}
      </main>
    </>
  );
}
