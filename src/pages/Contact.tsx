import { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, Phone, MessageCircle, ChevronDown, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '@/components/shared/PageHeader';
import SectionLabel from '@/components/shared/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

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

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ fullName: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <>
      <PageHeader title="Contact" />

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="text-center mb-12">
          <SectionLabel text="CONTACT INFO" className="mx-auto mb-4" />
          <h2 className="text-3xl lg:text-4xl font-normal text-Updeck-text-primary tracking-tight">
            Reach <em className="text-Updeck-primary not-italic">Out</em> to Us
          </h2>
        </div>

        <div ref={sectionRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="contact-reveal bg-white rounded-xl p-6 shadow-card text-center group hover:shadow-float transition-shadow duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-Updeck-surface flex items-center justify-center group-hover:bg-Updeck-primary transition-colors duration-300">
                <info.icon
                  className="w-6 h-6 text-Updeck-primary group-hover:text-white transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-base font-semibold text-Updeck-text-primary mb-2">
                {info.title}
              </h3>
              {info.lines.map((line, i) => (
                <p key={i} className="text-sm text-Updeck-text-secondary">
                  {info.isLink ? (
                    <a
                      href={`${info.prefix}${line}`}
                      className="hover:text-Updeck-primary transition-colors"
                    >
                      {line}
                    </a>
                  ) : (
                    line
                  )}
                </p>
              ))}
              {info.extra && (
                <a
                  href="/contact"
                  className="text-sm text-Updeck-primary hover:underline mt-1 inline-block"
                >
                  {info.extra}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form with Map */}
        <div className="contact-reveal bg-Updeck-dark rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Map Placeholder */}
            <div className="relative h-64 lg:h-auto bg-Updeck-primary/20">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                <defs>
                  <pattern id="mapDotPattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="0.8" fill="#4ecdc4" opacity="0.4" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mapDotPattern)" />
                {/* Decorative map dots */}
                <circle cx="30%" cy="40%" r="6" fill="#4ecdc4" opacity="0.8" />
                <circle cx="30%" cy="40%" r="12" fill="#4ecdc4" opacity="0.2" />
                <circle cx="65%" cy="55%" r="4" fill="#4ecdc4" opacity="0.6" />
                <circle cx="65%" cy="55%" r="8" fill="#4ecdc4" opacity="0.15" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-Updeck-primary rounded-xl p-4 shadow-float max-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-Updeck-accent" />
                    <span className="text-xs font-semibold text-white">Head Office</span>
                  </div>
                  <p className="text-xs text-white/60">
                    993 Renner Burg, West Rond, MT 94251-030
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-6 lg:p-10">
              <SectionLabel text="GET IN TOUCH" dark className="mb-4" />
              <h3 className="text-2xl lg:text-3xl font-normal text-white mb-6">
                Drop Us a <em className="text-Updeck-accent not-italic">Line.</em>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full name *"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-Updeck-accent transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email address *"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-Updeck-accent transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone number *"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-Updeck-accent transition-colors"
                  />
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-left focus:outline-none focus:border-Updeck-accent transition-colors flex items-center justify-between"
                    >
                      <span className={formData.service ? 'text-white' : 'text-white/40'}>
                        {formData.service || 'Chose a option'}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-white/40 transition-transform ${isDropdownOpen ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-Updeck-primary rounded-lg border border-white/10 overflow-hidden z-20">
                        {services.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, service });
                              setIsDropdownOpen(false);
                            }}
                            className="w-full px-4 py-2.5 text-left text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <textarea
                  placeholder="Type message *"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-Updeck-accent transition-colors resize-none"
                />

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-Updeck-accent text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-Updeck-primary transition-colors group"
                >
                  Send Message
                  <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
