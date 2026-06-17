import { useEffect, useRef, useState } from 'react';
import { Phone, Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '@/components/shared/PageHeader';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'What services does Updeck offer to clients?',
    answer:
      "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
  },
  {
    question: 'How do I get started with Corporate Business?',
    answer:
      "Starting with us is straightforward. Reach out via our contact form or call us directly. We'll arrange an initial consultation to understand your business needs, goals, and challenges. From there, we'll craft a tailored strategy and roadmap for your success.",
  },
  {
    question: 'How do you ensure the success of a project?',
    answer:
      'We follow a rigorous project management methodology with clear milestones, regular check-ins, and transparent communication. Our experienced team leverages industry best practices and data-driven insights to ensure every project delivers measurable results.',
  },
  {
    question: 'How long will it take to complete my project?',
    answer:
      "Project timelines vary based on scope and complexity. During our initial consultation, we'll provide a detailed timeline with key milestones. We pride ourselves on delivering high-quality work within agreed-upon deadlines.",
  },
  {
    question: 'Can I track the progress of my project?',
    answer:
      'Absolutely! We provide regular progress updates and have a client portal where you can track milestones, review deliverables, and communicate with our team in real-time. Transparency is core to our process.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'We work across a wide range of industries including technology, healthcare, finance, retail, manufacturing, and professional services. Our diverse expertise allows us to bring cross-industry insights to every engagement.',
  },
  {
    question: 'Do you offer ongoing support after project completion?',
    answer:
      'Yes, we offer comprehensive post-project support including maintenance, optimization, and continuous improvement services. We believe in building long-term partnerships with our clients.',
  },
  {
    question: 'How do you price your services?',
    answer:
      'Our pricing is tailored to each project based on scope, complexity, and timeline. We offer flexible engagement models including fixed-price, time-and-materials, and retainer arrangements. Contact us for a detailed quote.',
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
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

  return (
    <>
      <PageHeader title="Faq" breadcrumb="Faq" />

      <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12" ref={sectionRef}>
          {/* Left - Image */}
          <div className="faq-reveal relative">
            <div className="rounded-2xl overflow-hidden sticky top-28">
              <img
                src="/images/faq-executive.jpg"
                alt="Executive on call"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />

              {/* Floating Call Card */}
              <div className="absolute bottom-6 left-6 bg-Updeck-primary rounded-xl shadow-float p-5 max-w-[200px]">
                <h4 className="text-base font-semibold text-white mb-3">
                  Get Started<br />Free Call?
                </h4>
                <div className="w-10 h-10 bg-Updeck-accent rounded-full flex items-center justify-center mb-3">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a
                  href="tel:1-888-452-1505"
                  className="text-sm text-Updeck-accent hover:text-white transition-colors"
                >
                  1-888-452-1505
                </a>
              </div>
            </div>
          </div>

          {/* Right - Accordion */}
          <div>
            <h2 className="faq-reveal text-3xl lg:text-4xl font-normal text-Updeck-text-primary tracking-tight mb-8">
              Need Help? Start
              <br />
              <em className="text-Updeck-primary not-italic">Here..</em>
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-reveal rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index
                      ? 'bg-white shadow-card'
                      : 'bg-white/50 hover:bg-white'
                    }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span
                      className={`text-sm font-medium pr-4 ${openIndex === index
                          ? 'text-Updeck-text-primary'
                          : 'text-Updeck-text-secondary'
                        }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index
                          ? 'bg-Updeck-accent text-white'
                          : 'bg-Updeck-surface text-Updeck-text-muted'
                        }`}
                    >
                      {openIndex === index ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-60' : 'max-h-0'
                      }`}
                  >
                    <div className="px-5 pb-5">
                      <p className="text-sm text-Updeck-text-secondary leading-relaxed border-t border-Updeck-text-muted/20 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
