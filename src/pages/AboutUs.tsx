import { useEffect, useRef } from 'react';
import { Lightbulb, Award, Headphones } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '@/components/shared/PageHeader';
import SectionLabel from '@/components/shared/SectionLabel';
import ArrowButton from '@/components/shared/ArrowButton';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace.',
  },
  {
    icon: Award,
    title: 'Award-Winning Expertise',
    description: 'Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Our team is always available to address your concerns, providing quick and effective solution to keep your business.',
  },
];

const team = [
  {
    name: 'Guy Hawkins',
    role: 'CEO & Founder',
    image: 'https://i.pravatar.cc/300?img=13',
  },
  {
    name: 'Ralph Edwards',
    role: 'Managing Director',
    image: 'https://i.pravatar.cc/300?img=14',
  },
  {
    name: 'Devon Lane',
    role: 'Head of Strategy',
    image: 'https://i.pravatar.cc/300?img=15',
  },
  {
    name: 'Esther Howard',
    role: 'Creative Director',
    image: 'https://i.pravatar.cc/300?img=16',
  },
];

const stats = [
  { value: '25', suffix: '%', label: 'Projects Completed.' },
  { value: '5', suffix: 'M', label: 'Reach Worldwide' },
  { value: '2.3', suffix: 'X', label: 'Faster Growth' },
  { value: '27', suffix: '+', label: 'Awards archived' },
];

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-reveal',
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

  return (
    <>
      <PageHeader title="About Us" />

      {/* Choose the Best Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="about-reveal flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <SectionLabel text="CHOOSE THE BEST" className="mb-4" />
            <h2 className="text-3xl lg:text-4xl font-normal text-Updeck-text-primary tracking-tight">
              Empowering Business
              <br />
              with <em className="text-Updeck-primary not-italic">Expertise.</em>
            </h2>
          </div>
          <ArrowButton text="Request a Call" to="/contact" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={sectionRef}>
          {services.map((service, index) => (
            <div
              key={index}
              className="about-reveal service-card bg-white rounded-xl p-8 shadow-card"
            >
              <div className="w-14 h-14 rounded-xl bg-Updeck-surface flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-Updeck-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-Updeck-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-Updeck-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Content with Progress Bars */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-20 bg-white rounded-2xl mx-2">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="about-reveal">
            <img
              src="/images/about-professionals.jpg"
              alt="Our team"
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
            />
          </div>
          <div>
            <SectionLabel text="GET TO KNOW US" className="about-reveal mb-4" />
            <h2 className="about-reveal text-3xl lg:text-4xl font-normal text-Updeck-text-primary tracking-tight mb-6">
              Building Success Through
              <br />
              <em className="text-Updeck-primary not-italic">Innovation.</em>
            </h2>
            <p className="about-reveal text-base text-Updeck-text-secondary leading-relaxed mb-8">
              We are committed to delivering innovative solutions that drive growth and add value to our clients. With a team of experienced professionals and a passion for excellence, we transform businesses across industries.
            </p>

            {/* Progress Bars */}
            <div className="space-y-5">
              {[
                { label: 'Business consultants', value: 82 },
                { label: 'Strategic planning', value: 95 },
                { label: 'Client satisfaction', value: 98 },
              ].map((item, index) => (
                <div key={index} className="about-reveal">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-Updeck-text-primary">
                      {item.label}
                    </span>
                    <span className="text-sm text-Updeck-primary font-mono">
                      {item.value}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-Updeck-surface rounded-full overflow-hidden">
                    <div
                      className="h-full bg-Updeck-primary rounded-full transition-all duration-1000"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="bg-Updeck-primary rounded-2xl py-12 lg:py-16 px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="about-reveal text-center">
                <div className="text-4xl lg:text-5xl font-light text-white font-mono">
                  {stat.value}
                  <span className="text-Updeck-accent">{stat.suffix}</span>
                </div>
                <p className="text-sm text-white/60 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="text-center mb-12">
          <SectionLabel text="OUR TEAM" className="mx-auto mb-4" />
          <h2 className="text-3xl lg:text-4xl font-normal text-Updeck-text-primary tracking-tight">
            Meet Our <em className="text-Updeck-primary not-italic">Experts.</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="about-reveal group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-float transition-all duration-500"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-Updeck-text-primary">
                  {member.name}
                </h3>
                <p className="text-sm text-Updeck-text-muted">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
