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
      className="relative bg-[var(--color-base)] px-3 py-3 dark:bg-[#0a1a18]"
    >
      <div className="relative min-h-[760px] overflow-hidden rounded-[10px] bg-[#061f20] dark:bg-[#061f20]">
        {/* Map image background */}
        <img
          src="/images/map-img.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[58%_92%]"
        />

        {/* Keep the image readable behind the content */}
        <div className="pointer-events-none absolute inset-0 bg-[#061f20]/28" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#061f20]/55 via-[#061f20]/18 to-[#061f20]/12" />

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1320px] items-center px-4 py-16 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_575px]">
            {/* Left side with text content */}
            <div className="contact-reveal hidden lg:block">
              <div className="max-w-[500px]">
                <SectionLabel text="GET IN TOUCH" dark className="mb-7" />

                <h2 className="text-[42px] font-normal leading-[1.13] tracking-[-0.045em] text-white sm:text-[52px] lg:text-[58px]">
                  <span className="block">Business Has No</span>

                  <span className="block">
                    Engineered{' '}
                    <em className="not-italic text-[#188b88] dark:text-[#4ecdc4]">
                      Border.
                    </em>
                  </span>
                </h2>

                <p className="mt-6 max-w-[470px] text-[17px] leading-[1.7] text-white/70">
                  Our deck brings together the thinking and technical capability
                  required to solve business problems wherever the business
                  operates.
                </p>

                {/* Stats */}
                <div className="mt-9 grid max-w-[490px] grid-cols-2 overflow-hidden rounded-[10px] border border-white/[0.08] bg-white/[0.045] backdrop-blur-[8px]">
                  {/* Transfers */}
                  <div className="border-b border-r border-dashed border-white/[0.10] px-6 py-6 xl:px-7 xl:py-7">
                    <div className="font-mono text-[30px] font-semibold leading-none tracking-[-0.05em] text-white xl:text-[34px]">
                      2000+
                    </div>

                    <p className="mt-3 text-[13px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#4ecdc4] xl:text-[14px]">
                      Transfers
                    </p>
                  </div>

                  {/* Satisfied Customers */}
                  <div className="border-b border-dashed border-white/[0.10] px-6 py-6 xl:px-7 xl:py-7">
                    <div className="font-mono text-[30px] font-semibold leading-none tracking-[-0.05em] text-white xl:text-[34px]">
                      1000+
                    </div>

                    <p className="mt-3 text-[13px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#4ecdc4] xl:text-[14px]">
                      Satisfied Customers
                    </p>
                  </div>

                  {/* Employees */}
                  <div className="border-r border-dashed border-white/[0.10] px-6 py-6 xl:px-7 xl:py-7">
                    <div className="font-mono text-[30px] font-semibold leading-none tracking-[-0.05em] text-white xl:text-[34px]">
                      20+
                    </div>

                    <p className="mt-3 text-[13px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#4ecdc4] xl:text-[14px]">
                      Employees
                    </p>
                  </div>

                  {/* Contributors */}
                  <div className="px-6 py-6 xl:px-7 xl:py-7">
                    <div className="font-mono text-[30px] font-semibold leading-none tracking-[-0.05em] text-white xl:text-[34px]">
                      100+
                    </div>

                    <p className="mt-3 text-[13px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#4ecdc4] xl:text-[14px]">
                      Contributors
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <form
              onSubmit={handleSubmit}
              className="contact-reveal w-full rounded-[10px] bg-white/[0.105] px-8 py-10 backdrop-blur-[10px] sm:px-10 lg:px-12 lg:py-14"
            >
              <SectionLabel
                text="GET IN TOUCH"
                dark
                className="mb-7 lg:hidden"
              />

              <h2 className="mb-14 text-[42px] font-normal leading-none tracking-[-0.055em] text-white sm:text-[52px] lg:hidden">
                Drop Us a{' '}
                <em className="not-italic text-[#188b88] dark:text-[#4ecdc4]">
                  Line.
                </em>
              </h2>

              <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full name *"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fullName: e.target.value,
                    })
                  }
                  className="h-[42px] w-full border-0 border-b border-white/16 bg-transparent px-0 pb-3 text-[15px] font-medium text-white outline-none placeholder:text-white/55 focus:border-[#4ecdc4]"
                />

                <input
                  type="email"
                  placeholder="Email address *"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="h-[42px] w-full border-0 border-b border-white/16 bg-transparent px-0 pb-3 text-[15px] font-medium text-white outline-none placeholder:text-white/55 focus:border-[#4ecdc4]"
                />

                <input
                  type="tel"
                  placeholder="Phone number *"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  className="h-[42px] w-full border-0 border-b border-white/16 bg-transparent px-0 pb-3 text-[15px] font-medium text-white outline-none placeholder:text-white/55 focus:border-[#4ecdc4]"
                />

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex h-[42px] w-full items-center justify-between border-0 border-b border-white/16 bg-transparent px-0 pb-3 text-left text-[15px] font-medium outline-none transition-colors focus:border-[#4ecdc4]"
                  >
                    <span
                      className={
                        formData.service ? 'text-white' : 'text-white/55'
                      }
                    >
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
                            setFormData({
                              ...formData,
                              service,
                            });

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
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
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
