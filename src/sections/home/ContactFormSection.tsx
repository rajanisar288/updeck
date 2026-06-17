import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/shared/SectionLabel';

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
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
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
    <section
      ref={sectionRef}
      className="relative py-20 bg-Updeck-dark rounded-2xl mx-2 overflow-hidden"
    >
      {/* Dot Map Background */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dotPattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#4ecdc4" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Offices Info */}
          <div className="contact-reveal">
            <SectionLabel text="GET IN TOUCH" dark className="mb-4" />
            <h2 className="text-3xl lg:text-5xl font-normal text-white tracking-tight mb-10">
              Drop Us a <em className="text-Updeck-accent not-italic">Line.</em>
            </h2>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <h4 className="text-sm font-semibold text-white mb-2">
                  Head office:
                </h4>
                <p className="text-sm text-white/60">
                  993 Renner Burg, West Rond, MT 94251-030, USA.
                </p>
                <p className="text-sm text-white/60">P: +1 (009) 544-7818</p>
                <p className="text-sm text-Updeck-accent">
                  M: support@Updeck.com
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <h4 className="text-sm font-semibold text-white mb-2">
                  Regional office:
                </h4>
                <p className="text-sm text-white/60">
                  Hessisch Lichtenau 37235, Kassel, Germany.
                </p>
                <p className="text-sm text-white/60">P: +1 (009) 880-1810</p>
                <p className="text-sm text-Updeck-accent">
                  M: support@Updeck.com
                </p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="contact-reveal space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
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

            <div className="grid sm:grid-cols-2 gap-5">
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
                  <span
                    className={
                      formData.service ? 'text-white' : 'text-white/40'
                    }
                  >
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
    </section>
  );
}
