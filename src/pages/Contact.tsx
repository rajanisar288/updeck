import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  Box,
  ChevronDown,
  ChevronRight,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Minus,
  Phone,
  Plus,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const images = {
  contactHero:
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80',
  faqImage:
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
};

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Location',
    lines: ['993 Renner Burg, West Rond,', 'MT 94251-030'],
  },
  {
    icon: Mail,
    title: 'Email us',
    lines: ['support@Updeck.com', 'info@Updeck.com'],
    isLink: true,
    prefix: 'mailto:',
  },
  {
    icon: Phone,
    title: 'Call us',
    lines: ['+1 (009) 544-7818', '+1 (009) 880-1810'],
    isLink: true,
    prefix: 'tel:',
  },
  {
    icon: MessageCircle,
    title: 'Live chat',
    lines: ['livechat@Updeck.com'],
    extra: 'Need help?',
    isLink: true,
    prefix: 'mailto:',
  },
];

const services = [
  'Business Strategy',
  'Customer Experience',
  'Sustainability and ESG',
  'Training and Development',
  'IT Support & Maintenance',
  'Marketing Strategy',
];

const faqs = [
  {
    question: 'What services does Updeck offer to clients?',
    answer:
      'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.',
  },
  {
    question: 'How do I get started with Corporate Business?',
    answer:
      'Reach out through our contact form or request a call. We will understand your goals, review your business needs, and suggest the right plan.',
  },
  {
    question: 'How do you ensure the success of a project?',
    answer:
      'We use clear milestones, regular updates, transparent communication, and quality checks to keep every project moving in the right direction.',
  },
  {
    question: 'How long will it take to complete my project?',
    answer:
      'Project timelines depend on scope and complexity. After the first consultation, we provide clear delivery milestones and estimated completion time.',
  },
  {
    question: 'Can I track the progress of my project?',
    answer:
      'Yes. We keep you updated with regular progress reviews, milestone tracking, and clear communication throughout the project.',
  },
];

function SectionBadge({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-[2px] border border-dashed px-4 py-2 ${dark
        ? 'border-white/15 text-white'
        : 'border-[#c3cece] text-[#071515] dark:border-[#2a3f3d] dark:text-white'
        }`}
    >
      <Box
        className={`h-4 w-4 ${dark
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



function ContactHero() {
  return (
    <section className="px-3 pb-3 pt-[100px]">
      <div className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-[#061f20]">
        <img
          src={images.contactHero}
          alt="Contact"
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
            Contact
          </motion.h1>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.75, ease: 'easeOut' }}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-[14px] font-semibold text-white/75 backdrop-blur-md"
          >
            <Home className="h-4 w-4 fill-[#188b88] text-[#188b88] dark:fill-[#4ecdc4] dark:text-[#4ecdc4]" />

            <Link
              to="/"
              className="transition-colors duration-300 hover:text-[#4ecdc4]"
            >
              Home
            </Link>

            <ChevronRight className="h-4 w-4 text-white/45" />

            <span className="text-white">Contact</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoSection() {
  return (
    <section className="contact-section px-4 py-24 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="contact-reveal mb-16 text-center">
          <div className="mb-7 flex justify-center">
            <SectionBadge>Contact Info</SectionBadge>
          </div>

          <h2 className="text-[46px] font-normal leading-[1.08] tracking-[-0.055em] text-[#071515] dark:text-white sm:text-[58px] lg:text-[64px]">
            <span className="text-[#188b88] dark:text-[#4ecdc4]">Reach</span>{' '}
            Out to Us
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info) => {
            const Icon = info.icon;

            return (
              <div
                key={info.title}
                className="contact-reveal flex min-h-[285px] flex-col items-center justify-center rounded-[8px] bg-white px-8 py-12 text-center dark:bg-[#0f1f1d]"
              >
                <div className="mb-8 flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#dfe9e9] text-[#188b88] dark:bg-[#152624] dark:text-[#4ecdc4]">
                  <Icon className="h-9 w-9" strokeWidth={2.2} />
                </div>

                <h3 className="mb-6 text-[27px] font-bold leading-none tracking-[-0.055em] text-[#071515] dark:text-white">
                  {info.title}
                </h3>

                <div className="space-y-1">
                  {info.lines.map((line) => (
                    <p
                      key={line}
                      className="text-[17px] font-medium leading-[1.45] tracking-[-0.03em] text-[#394949] dark:text-[#9daaaa]"
                    >
                      {info.isLink ? (
                        <a
                          href={`${info.prefix || ''}${line}`}
                          className="transition-colors duration-300 hover:text-[#188b88] dark:hover:text-[#4ecdc4]"
                        >
                          {line}
                        </a>
                      ) : (
                        line
                      )}
                    </p>
                  ))}
                </div>

                {info.extra && (
                  <Link
                    to="/contact"
                    className="mt-2 text-[17px] font-bold leading-none tracking-[-0.03em] text-[#188b88] transition-colors duration-300 hover:text-[#071515] dark:text-[#4ecdc4] dark:hover:text-white"
                  >
                    {info.extra}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactFormMapSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = (e: FormEvent) => {
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
    <section className="contact-section px-4 pb-28 pt-8 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-6 lg:grid-cols-[0.86fr_1.14fr]">
        <form
          onSubmit={handleSubmit}
          className="contact-reveal rounded-[8px] bg-white p-8 dark:bg-[#0f1f1d] sm:p-10 lg:p-12"
        >
          <h2 className="mb-10 max-w-[500px] text-[38px] font-normal leading-[1.12] tracking-[-0.055em] text-[#071515] dark:text-white sm:text-[46px]">
            Feel Free to Get in Touch or Visit our Location.
          </h2>

          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Full name *"
              required
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="h-[42px] w-full border-0 border-b border-dashed border-[#c8d4d4] bg-transparent px-0 pb-3 text-[15px] font-medium text-[#071515] outline-none placeholder:text-[#657171] focus:border-[#188b88] dark:border-[#2a3f3d] dark:text-white dark:placeholder:text-[#9daaaa]"
            />

            <input
              type="email"
              placeholder="Email address *"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="h-[42px] w-full border-0 border-b border-dashed border-[#c8d4d4] bg-transparent px-0 pb-3 text-[15px] font-medium text-[#071515] outline-none placeholder:text-[#657171] focus:border-[#188b88] dark:border-[#2a3f3d] dark:text-white dark:placeholder:text-[#9daaaa]"
            />

            <input
              type="tel"
              placeholder="Phone number *"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="h-[42px] w-full border-0 border-b border-dashed border-[#c8d4d4] bg-transparent px-0 pb-3 text-[15px] font-medium text-[#071515] outline-none placeholder:text-[#657171] focus:border-[#188b88] dark:border-[#2a3f3d] dark:text-white dark:placeholder:text-[#9daaaa]"
            />

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex h-[42px] w-full items-center justify-between border-0 border-b border-dashed border-[#c8d4d4] bg-transparent px-0 pb-3 text-left text-[15px] font-medium text-[#657171] outline-none transition-colors focus:border-[#188b88] dark:border-[#2a3f3d] dark:text-[#9daaaa]"
              >
                <span
                  className={
                    formData.service
                      ? 'text-[#071515] dark:text-white'
                      : 'text-[#657171] dark:text-[#9daaaa]'
                  }
                >
                  {formData.service || 'Chose a option'}
                </span>

                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 right-0 top-full z-30 mt-3 overflow-hidden rounded-[7px] border border-[#d8e2e2] bg-white shadow-[0_18px_50px_rgba(7,21,21,0.12)] dark:border-[#2a3f3d] dark:bg-[#081d1b]">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, service });
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-4 py-3 text-left text-[14px] font-medium text-[#536363] transition-colors hover:bg-[#188b88] hover:text-white dark:text-[#9daaaa] dark:hover:bg-[#4ecdc4] dark:hover:text-[#0a1a18]"
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
              setFormData({ ...formData, message: e.target.value })
            }
            className="mt-7 h-[118px] w-full resize-none border-0 border-b border-dashed border-[#c8d4d4] bg-transparent px-0 pb-3 text-[15px] font-medium text-[#071515] outline-none placeholder:text-[#657171] focus:border-[#188b88] dark:border-[#2a3f3d] dark:text-white dark:placeholder:text-[#9daaaa]"
          />

          <button
            type="submit"
            className="group mt-8 inline-flex h-[48px] items-center rounded-full bg-[#188b88] pl-6 pr-1.5 text-[15px] font-bold text-white transition-colors duration-300 hover:bg-[#157a76] dark:bg-[#4ecdc4] dark:text-[#0a1a18]"
          >
            Send Message

            <span className="ml-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#071515] text-white transition-transform duration-300 group-hover:rotate-45 dark:bg-[#0a1a18]">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </button>
        </form>

        <div className="contact-reveal min-h-[520px] overflow-hidden rounded-[8px] bg-white dark:bg-[#0f1f1d]">
          <iframe
            title="London Eye Map"
            src="https://www.google.com/maps?q=London%20Eye,%20London&output=embed"
            className="h-full min-h-[520px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function FAQImageAccordionSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="contact-section px-4 py-24 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="contact-reveal relative min-h-[560px] lg:min-h-[620px]">
          <div className="absolute inset-0 overflow-hidden rounded-[8px]">
            <img
              src={images.faqImage}
              alt="Need help"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#061f20]/35 dark:bg-[#0a1f1d]/45" />
          </div>

          <h2 className="absolute left-8 top-9 max-w-[430px] text-[42px] font-normal leading-[1.22] tracking-[-0.055em] text-white sm:left-10 sm:top-10 sm:text-[50px] lg:text-[52px]">
            Need Help? Start
            <br />
            Here..
          </h2>

          <div className="absolute bottom-0 right-0 w-[225px] rounded-[8px] bg-[#188b88] p-7 text-white dark:bg-[#4ecdc4] dark:text-[#0a1a18] sm:w-[245px]">
            <h4 className="mb-8 text-[24px] font-bold leading-[1.2] tracking-[-0.04em]">
              Get Started
              <br />
              Free Call?
            </h4>

            <div className="mb-6 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#071515] text-white dark:bg-[#0a1a18]">
              <Phone className="h-5 w-5 fill-white text-white" />
            </div>

            <a
              href="tel:1-888-452-1505"
              className="text-[21px] font-bold leading-none tracking-[-0.04em] text-white underline decoration-white/80 underline-offset-4 dark:text-[#0a1a18] dark:decoration-[#0a1a18]/70"
            >
              1-888-452-1505
            </a>
          </div>
        </div>

        <div className="contact-reveal">
          <div className="w-full space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-[7px] transition-colors duration-300 ${isOpen
                    ? 'bg-[#188b88] text-white dark:bg-[#4ecdc4] dark:text-[#0a1a18]'
                    : 'bg-white dark:bg-[#0f1f1d]'
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left"
                  >
                    <span
                      className={`text-[18px] font-bold leading-[1.3] tracking-[-0.035em] ${isOpen
                        ? 'text-white dark:text-[#0a1a18]'
                        : 'text-[#071515] dark:text-white'
                        }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full border ${isOpen
                        ? 'border-white/45 text-white dark:border-[#0a1a18]/35 dark:text-[#0a1a18]'
                        : 'border-[#188b88] text-[#188b88] dark:border-[#4ecdc4] dark:text-[#4ecdc4]'
                        }`}
                    >
                      {isOpen ? (
                        <Minus className="h-5 w-5" strokeWidth={2} />
                      ) : (
                        <Plus className="h-5 w-5" strokeWidth={2} />
                      )}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[260px]' : 'max-h-0'
                      }`}
                  >
                    <div className="px-8 pb-8">
                      <div className="border-t border-white/25 pt-6 dark:border-[#0a1a18]/25">
                        <p
                          className={`max-w-[650px] text-[16px] font-medium leading-[1.58] tracking-[-0.025em] ${isOpen
                            ? 'text-white/90 dark:text-[#0a1a18]/85'
                            : 'text-[#4b5b5b] dark:text-[#9daaaa]'
                            }`}
                        >
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

function CommonQuestionsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="contact-section px-4 py-24 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-[820px]">
        <div className="contact-reveal mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <SectionBadge>Common Questions</SectionBadge>
          </div>

          <h2 className="text-[40px] font-normal leading-[1.1] tracking-[-0.055em] text-[#071515] dark:text-white sm:text-[50px]">
            Need <span className="text-[#188b88] dark:text-[#4ecdc4]">Help?</span>{' '}
            Start Here...
          </h2>
        </div>

        <div className="contact-reveal space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[7px] bg-white dark:bg-[#0f1f1d]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left"
                >
                  <span className="text-[16px] font-bold tracking-[-0.03em] text-[#071515] dark:text-white">
                    {faq.question}
                  </span>

                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#188b88] text-[#188b88] dark:border-[#4ecdc4] dark:text-[#4ecdc4]">
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[220px]' : 'max-h-0'
                    }`}
                >
                  <div className="px-8 pb-8">
                    <p className="border-t border-[#d8e0e0] pt-6 text-[15px] font-medium leading-[1.6] text-[#536363] dark:border-[#2a3f3d] dark:text-[#9daaaa]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.contact-section').forEach((section) => {
        gsap.fromTo(
          section.querySelectorAll('.contact-reveal'),
          {
            y: 44,
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
    <main
      ref={pageRef}
      className="overflow-hidden bg-[var(--color-base)] dark:bg-[#0a1a18]"
    >
      <ContactHero />
      <ContactInfoSection />

      <FAQImageAccordionSection />
      <CommonQuestionsSection />
      <ContactFormMapSection />
    </main>
  );
}