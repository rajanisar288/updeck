import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AwardsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height))
      );
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.award-stat',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const animationDelay = -(scrollProgress * 4);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-Updeck-dark overflow-hidden"
    >
      <div className="px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Directional Glow Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-6xl xl:text-7xl font-light leading-[1.1] tracking-tight"
            style={{
              background:
                'linear-gradient(90deg, #071515 0%, #ffffff 50%, #071515 100%)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '80%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              animation: 'glowMove 4s linear infinite',
              animationDelay: `${animationDelay}s`,
              animationPlayState: 'paused',
            }}
          >
            We Build The
            <br />
            <em className="not-italic">Future</em>
          </h2>
        </div>

        {/* Achievement Card */}
        <div className="award-stat max-w-md mx-auto bg-Updeck-primary/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-light text-white font-mono mb-2">
              93<span className="text-Updeck-accent">%</span>
            </div>
            <p className="text-sm text-white/60 mb-4">Projects Completed</p>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-Updeck-accent rounded-full transition-all duration-1000"
                style={{ width: '93%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
