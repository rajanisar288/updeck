import { useEffect, useRef } from 'react';
import { ArrowUpRight, BarChart3, Users, Leaf, GraduationCap, Monitor, Megaphone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '@/components/shared/PageHeader';
import SectionLabel from '@/components/shared/SectionLabel';
import ArrowButton from '@/components/shared/ArrowButton';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: BarChart3,
    title: 'Business Strategy Development',
    description: 'Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized strategies that drive growth and competitive advantage.',
  },
  {
    icon: Users,
    title: 'Customer Experience Solutions',
    description: 'Developing personalized customer journeys to increase satisfaction and loyalty. We help you understand and serve your customers better than ever before.',
  },
  {
    icon: Leaf,
    title: 'Sustainability and ESG Consulting',
    description: 'Provide tailored strategies that not only drive long-term value but also build trust with stakeholders, investors, and the communities you serve.',
  },
  {
    icon: GraduationCap,
    title: 'Training and Development Programs',
    description: 'Empower your workforce with cutting-edge skills and knowledge. Our programs are designed to drive organizational excellence and sustainable growth.',
  },
  {
    icon: Monitor,
    title: 'IT Support & Maintenance',
    description: 'Our IT Support & Maintenance services ensure that your technology infrastructure is running smoothly, securely, and efficiently at all times.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Strategy & Campaigns',
    description: 'Effective marketing is key to driving business growth. Our Marketing Strategy & Campaigns service helps you reach and engage your target audience.',
  },
];

const processSteps = [
  { number: '01', title: 'Discovery', description: 'We analyze your business needs and challenges.' },
  { number: '02', title: 'Strategy', description: 'We develop a tailored roadmap for success.' },
  { number: '03', title: 'Execution', description: 'We implement solutions with precision.' },
  { number: '04', title: 'Optimization', description: 'We continuously improve and refine.' },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-reveal',
        { y: 50, opacity: 0 },
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

  return (
    <>
      <PageHeader title="Services" />

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="text-center mb-12">
          <SectionLabel text="WHAT WE OFFER" className="mx-auto mb-4" />
          <h2 className="text-3xl lg:text-4xl font-normal text-Updeck-text-primary tracking-tight">
            Our <em className="text-Updeck-primary not-italic">Services.</em>
          </h2>
        </div>

        <div ref={sectionRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-reveal service-card bg-white rounded-xl p-8 shadow-card group"
            >
              <div className="w-14 h-14 rounded-xl bg-Updeck-surface flex items-center justify-center mb-6 group-hover:bg-Updeck-primary transition-colors duration-300">
                <service.icon
                  className="w-7 h-7 text-Updeck-primary group-hover:text-white transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg font-semibold text-Updeck-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-Updeck-text-secondary leading-relaxed mb-4">
                {service.description}
              </p>
              <button className="inline-flex items-center gap-2 text-sm text-Updeck-text-secondary group-hover:text-Updeck-primary transition-colors">
                Learn More
                <span className="w-6 h-6 bg-Updeck-text-muted/20 rounded-full flex items-center justify-center group-hover:bg-Updeck-primary/20 transition-colors">
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-20 bg-Updeck-dark rounded-2xl mx-2">
        <div className="text-center mb-12">
          <SectionLabel text="OUR PROCESS" dark className="mx-auto mb-4" />
          <h2 className="text-3xl lg:text-4xl font-normal text-white tracking-tight">
            How We <em className="text-Updeck-accent not-italic">Work.</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="service-reveal bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-Updeck-accent/50 transition-colors"
            >
              <div className="text-4xl font-light text-Updeck-accent font-mono mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-white/60">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="bg-white rounded-2xl shadow-card p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl lg:text-3xl font-normal text-Updeck-text-primary mb-3">
              Ready to Transform Your Business?
            </h3>
            <p className="text-base text-Updeck-text-secondary max-w-lg">
              Let's discuss how our services can help you achieve your goals and drive sustainable growth.
            </p>
          </div>
          <ArrowButton text="Get Started" to="/contact" />
        </div>
      </section>
    </>
  );
}
