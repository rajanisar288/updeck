// src/components/FAQSection.tsx

import { content } from '@/data/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Minus, Plus } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection() {
  const { faqSection, footerSection } = content;

  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-animate',
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--color-base)] dark:bg-[#0a1a18] px-4 py-20 sm:px-6 lg:px-12 xl:px-20"
    >
      <div className="mx-auto grid max-w-[1296px] grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1fr] lg:gap-[78px]">
        {/* Left Image */}
        <div className="faq-animate relative min-h-[560px] lg:min-h-[620px]">
          <div className="absolute inset-0 overflow-hidden rounded-[8px]">
            <img
              src={faqSection.imageSrc}
              alt={faqSection.imageAlt}
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-[#061f20]/35 dark:bg-[#0a1f1d]/45" />
          </div>

          <h2 className="absolute left-8 top-9 max-w-[430px] text-[42px] font-normal leading-[1.22] tracking-[-0.055em] text-white sm:left-10 sm:top-10 sm:text-[50px] lg:text-[52px]">
            {faqSection.headingLine1}
            <br />
            {faqSection.headingLine2}
          </h2>

          {/* Floating Call Card */}
          <div className="absolute bottom-0 right-0 w-[225px] rounded-[8px] bg-[#188b88] p-7 text-white dark:bg-[#4ecdc4] dark:text-[#0a1a18] sm:w-[225px]">
            <h4 className="mb-8 text-[24px] font-bold leading-[1.2] tracking-[-0.04em]">
              {faqSection.cardTitle}
              <br />
              {/* {faqSection.cardSubtitle} */}
            </h4>

            <Link
              to={footerSection.ctaLink}
              className="group inline-flex h-[43px] items-center rounded-full bg-[#071515] pl-6 pr-1.5 text-[14px] font-bold text-white transition-colors duration-300 hover:bg-black"
            >
              Let's Talk
              <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#071515] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>

            {/* <a
              href={`tel:${faqSection.phoneNumber}`}
              className="text-[21px] font-bold leading-none tracking-[-0.04em] text-white underline decoration-white/80 underline-offset-4 dark:text-[#0a1a18] dark:decoration-[#0a1a18]/70"
            >
              {faqSection.phoneNumber}
            </a> */}
          </div>
        </div>

        {/* Right Accordion */}
        <div className="faq-animate flex items-center">
          <div className="w-full space-y-5">
            {faqSection.faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-[7px] bg-white transition-all duration-300 dark:bg-[#0f1f1d]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left"
                  >
                    <span className="text-[20px] font-bold leading-[1.3] tracking-[-0.035em] text-[#071515] dark:text-[#e8edee]">
                      {faq.question}
                    </span>

                    <span className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full border-2 border-[#188b88] text-[#188b88] dark:border-[#4ecdc4] dark:text-[#4ecdc4]">
                      {isOpen ? (
                        <Minus className="h-5 w-5" strokeWidth={2} />
                      ) : (
                        <Plus className="h-5 w-5" strokeWidth={2} />
                      )}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-[260px]' : 'max-h-0'
                    }`}
                  >
                    <div className="px-8 pb-8">
                      <div className="border-t border-[#d8e0e0] pt-6 dark:border-[#2a3f3d]">
                        <p className="max-w-[610px] text-[17px] font-medium leading-[1.55] tracking-[-0.025em] text-[#4b5b5b] dark:text-[#9daaaa]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
