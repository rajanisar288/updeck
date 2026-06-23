import SectionLabel from '@/components/shared/SectionLabel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactFormSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    'Business Strategy',
    'Customer Experience',
    'Sustainability and ESG',
    'Training and Development',
    'IT Support & Maintenance',
    'Marketing Strategy',
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-reveal',
        {
          y: 42,
        },
        {
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert('Thank you for your message! We will get back to you soon.');

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });

    setIsDropdownOpen(false);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--color-base)] dark:bg-[#0a1a18] px-3 py-3"
    >
      <div className="relative min-h-[760px] overflow-hidden rounded-[10px] bg-[#061f20] dark:bg-[#061f20]">
        {/* left diagonal pattern */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[22%] opacity-[0.16]">
          <div className="absolute -left-28 top-0 h-full w-full rotate-[-20deg] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.18)_0px,rgba(255,255,255,0.18)_1px,transparent_1px,transparent_14px)]" />
        </div>

        {/* right diagonal pattern */}
        <div className="pointer-events-none absolute bottom-0 right-0 h-full w-[30%] opacity-[0.14]">
          <div className="absolute -right-20 bottom-0 h-full w-full rotate-[20deg] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.18)_0px,rgba(255,255,255,0.18)_1px,transparent_1px,transparent_14px)]" />
        </div>

        {/* soft center glow */}
        <div className="pointer-events-none absolute left-[58%] top-1/2 h-[420px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4ecdc4]/10 blur-[100px]" />

        {/* Dot Map Background */}
        <div className="pointer-events-none absolute left-[7%] top-1/2 hidden w-[780px] -translate-y-1/2 opacity-80 lg:block">
          <svg
            viewBox="0 0 900 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-full"
          >
            <defs>
              <pattern
                id="contactDotPattern"
                x="0"
                y="0"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.7" fill="#188b88" />
              </pattern>
            </defs>

            <path
              d="M98 196C140 128 213 116 281 132C347 148 391 92 462 75C520 62 582 82 604 136C624 184 567 219 534 251C495 289 502 342 474 387C443 438 386 466 333 448C281 430 293 365 264 330C227 285 57 262 98 196Z"
              fill="url(#contactDotPattern)"
              opacity="0.72"
            />

            <path
              d="M552 244C587 193 656 161 731 179C800 196 849 251 844 318C840 385 782 429 710 440C642 450 584 421 550 372C519 327 520 290 552 244Z"
              fill="url(#contactDotPattern)"
              opacity="0.72"
            />

            <path
              d="M374 355C412 371 442 405 431 448C421 488 380 508 351 489C326 473 332 435 344 403C350 385 356 367 374 355Z"
              fill="url(#contactDotPattern)"
              opacity="0.72"
            />

            <path
              d="M719 394C740 404 762 425 758 454C755 481 730 498 708 485C689 474 690 444 696 421C700 407 706 397 719 394Z"
              fill="url(#contactDotPattern)"
              opacity="0.72"
            />

            <circle cx="294" cy="262" r="9" fill="white" />
            <circle cx="432" cy="380" r="9" fill="white" />
            <circle cx="594" cy="250" r="9" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1320px] items-center px-4 py-16 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_575px]">
            {/* Left side with text content */}
            <div className="hidden lg:block contact-reveal">
              <div className="max-w-[480px]">
                <SectionLabel text="GET IN TOUCH" dark className="mb-7" />

                <h2 className="text-[42px] font-normal leading-[1.13] tracking-[-0.045em] text-white sm:text-[52px] lg:text-[58px]">
                  <span className="block">Let's Explore</span>
                  <span className="block">
                    What's{' '}
                    <em className="not-italic text-[#188b88] dark:text-[#4ecdc4]">Possible</em>
                  </span>
                </h2>

                <p className="mt-6 text-[17px] leading-[1.7] text-white/70 dark:text-white/70">
                  Have a project in mind? Let's connect and discuss how we can help you achieve your
                  goals.
                </p>
              </div>
            </div>

            {/* Right Form Card */}
            <form
              onSubmit={handleSubmit}
              className="contact-reveal w-full rounded-[10px] bg-white/[0.105] px-8 py-10 backdrop-blur-[10px] sm:px-10 lg:px-12 lg:py-14"
            >
              <SectionLabel text="GET IN TOUCH" dark className="mb-7 lg:hidden" />

              <h2 className="mb-14 text-[42px] font-normal leading-none tracking-[-0.055em] text-white sm:text-[52px] lg:hidden">
                Drop Us a <em className="not-italic text-[#188b88] dark:text-[#4ecdc4]">Line.</em>
              </h2>

              <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full name *"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="h-[42px] w-full border-0 border-b border-white/16 bg-transparent px-0 pb-3 text-[15px] font-medium text-white outline-none placeholder:text-white/55 focus:border-[#4ecdc4]"
                />

                <input
                  type="email"
                  placeholder="Email address *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-[42px] w-full border-0 border-b border-white/16 bg-transparent px-0 pb-3 text-[15px] font-medium text-white outline-none placeholder:text-white/55 focus:border-[#4ecdc4]"
                />

                <input
                  type="tel"
                  placeholder="Phone number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-[42px] w-full border-0 border-b border-white/16 bg-transparent px-0 pb-3 text-[15px] font-medium text-white outline-none placeholder:text-white/55 focus:border-[#4ecdc4]"
                />

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex h-[42px] w-full items-center justify-between border-0 border-b border-white/16 bg-transparent px-0 pb-3 text-left text-[15px] font-medium outline-none transition-colors focus:border-[#4ecdc4]"
                  >
                    <span className={formData.service ? 'text-white' : 'text-white/55'}>
                      {formData.service || 'Chose a option'}
                    </span>

                    <ChevronDown
                      className={`h-4 w-4 text-white transition-transform ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute left-0 right-0 top-full z-30 mt-3 overflow-hidden rounded-[8px] border border-white/10 bg-[#0b2b2a] shadow-[0_18px_50px_rgba(0,0,0,0.25)]">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, service });
                            setIsDropdownOpen(false);
                          }}
                          className="w-full px-4 py-3 text-left text-[14px] font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <textarea
                placeholder="Type message*"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-9 h-[118px] w-full resize-none border-0 border-b border-white/16 bg-transparent px-0 pb-3 text-[15px] font-medium text-white outline-none placeholder:text-white/55 focus:border-[#4ecdc4]"
              />

              <button
                type="submit"
                className="group mt-8 inline-flex h-[52px] items-center rounded-full bg-[#188b88] pl-6 pr-1.5 text-[16px] font-bold text-white transition-colors duration-300 hover:bg-[#157a76]"
              >
                Send Message
                <span className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#071515] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
