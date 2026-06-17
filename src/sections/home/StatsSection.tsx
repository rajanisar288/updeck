import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StatItemProps {
  value: string;
  label: string;
  suffix?: string;
}

function AnimatedStat({ value, label, suffix = '' }: StatItemProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statRef.current || hasAnimated) return;

    const trigger = ScrollTrigger.create({
      trigger: statRef.current,
      start: 'top 80%',
      onEnter: () => {
        if (hasAnimated) return;
        setHasAnimated(true);
        const numericValue = parseFloat(value);
        const isDecimal = value.includes('.');
        const obj = { val: 0 };

        gsap.to(obj, {
          val: numericValue,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            if (isDecimal) {
              setDisplayValue(obj.val.toFixed(1));
            } else {
              setDisplayValue(Math.round(obj.val).toString());
            }
          },
        });
      },
    });

    return () => trigger.kill();
  }, [value, hasAnimated]);

  return (
    <div ref={statRef} className="text-center">
      <div className="text-4xl lg:text-5xl xl:text-6xl font-light text-white font-mono tracking-tight">
        {displayValue}
        <span className="text-Updeck-accent">{suffix}</span>
      </div>
      <p className="text-sm text-white/60 mt-2">{label}</p>
    </div>
  );
}

const stats = [
  { value: '93', label: 'Projects Completed.', suffix: '%' },
  { value: '20', label: 'Reach Worldwide', suffix: 'M' },
  { value: '8.5', label: 'Faster Growth', suffix: 'X' },
  { value: '100', label: 'Awards archived', suffix: '+' },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { scaleY: 0.95, opacity: 0 },
        {
          scaleY: 1,
          opacity: 1,
          duration: 0.8,
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
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-12 xl:px-20">
      <div className="bg-Updeck-primary rounded-2xl py-12 lg:py-16 px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
