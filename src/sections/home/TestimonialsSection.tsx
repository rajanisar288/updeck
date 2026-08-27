import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/shared/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Working with Updeck has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions have helped us streamline operations and achieve our goals faster than we imagined. We truly feel like a valued partner.",
    name: 'Guy Hawkins',
    role: 'Co. Founder',
    avatar: 'https://i.pravatar.cc/100?img=13',
  },
  {
    quote:
      "The results we've seen after partnering with Updeck are beyond our expectations. They not only understood our vision but also brought new ideas to the table that have taken our business to the next level. Their expertise and commitment to success make them a trusted.",
    name: 'Ralph Edwards',
    role: 'Co. Founder',
    avatar: 'https://i.pravatar.cc/100?img=14',
  },
  {
    quote:
      "We've been working with Updeck for years, and they continue to deliver outstanding results. Their team is proactive, responsive, and always goes the extra mile to ensure our needs are met. They've become a key contributor to our growth and success that really help us.",
    name: 'Devon Lane',
    role: 'Co. Founder',
    avatar: 'https://i.pravatar.cc/100?img=15',
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
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

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-12 xl:px-20">
      <div className="mb-12">
        <SectionLabel text="CLIENTS FEEDBACK" className="mb-4" />
        <h2 className="text-3xl lg:text-4xl font-normal text-Updeck-text-primary tracking-tight">
          Success <em className="text-Updeck-primary not-italic">Stories</em> Fuel
          <br />
          our Innovation.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card bg-white rounded-xl p-6 lg:p-8 shadow-card ${index === 1 ? 'ring-2 ring-Updeck-accent' : ''
              }`}
          >
            <Quote className="w-10 h-10 text-Updeck-accent mb-4" />
            <p className="text-sm text-Updeck-text-secondary leading-relaxed mb-6">
              {testimonial.quote}
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-Updeck-text-muted/20">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-Updeck-text-primary">
                  {testimonial.name}
                </p>
                <p className="text-xs text-Updeck-text-muted">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
