import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/shared/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    date: { day: '01', month: 'OCT' },
    category: 'Corporate',
    author: 'Ellinien Loma',
    title: 'Entrepreneur Mindset: Habits That Drive Success',
    image: '/images/blog-1.jpg',
  },
  {
    date: { day: '12', month: 'JUL' },
    category: 'Business',
    author: 'Ellinien Loma',
    title: 'Innovative Solutions for every Business Success',
    image: '/images/blog-2.jpg',
  },
  {
    date: { day: '12', month: 'JUL' },
    category: 'Business',
    author: 'Ellinien Loma',
    title: 'Harnessing Digital Transform a Roadmap Businesses',
    image: '/images/blog-3.jpg',
  },
];

export default function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.blog-card',
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
      <div className="text-center mb-12">
        <SectionLabel text="INSIGHTS & IDEAS" className="mx-auto mb-4" />
        <h2 className="text-3xl lg:text-4xl font-normal text-Updeck-text-primary tracking-tight">
          The Ultimate <em className="text-Updeck-primary not-italic">Resource.</em>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <article
            key={index}
            className="blog-card group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-float transition-shadow duration-500"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Date Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                <div className="text-xl font-light text-Updeck-text-primary font-mono">
                  {post.date.day}
                </div>
                <div className="text-[10px] font-semibold text-Updeck-text-muted uppercase tracking-wider">
                  {post.date.month}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-0.5 bg-Updeck-surface rounded-full text-xs text-Updeck-text-secondary">
                  {post.category}
                </span>
                <span className="text-xs text-Updeck-text-muted">
                  By {post.author}
                </span>
              </div>
              <h3 className="text-base font-semibold text-Updeck-text-primary leading-snug mb-4 group-hover:text-Updeck-primary transition-colors">
                {post.title}
              </h3>
              <button className="inline-flex items-center gap-2 text-sm text-Updeck-text-secondary group-hover:text-Updeck-primary transition-colors">
                Read More
                <span className="w-6 h-6 bg-Updeck-text-muted/20 rounded-full flex items-center justify-center group-hover:bg-Updeck-primary/20 transition-colors">
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
