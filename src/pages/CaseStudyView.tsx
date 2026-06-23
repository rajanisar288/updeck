import { CASE_STUDIES } from '@/data/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, CheckCircle2, ChevronRight, Home } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudyView() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const study = CASE_STUDIES.find((cs) => cs.slug === slug);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Parallax for hero image
      gsap.to('.hero-bg-img', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Advanced Hero text reveal
      gsap.fromTo(
        '.hero-title',
        { y: 60, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
        {
          y: 0,
          opacity: 1,
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.4,
          ease: 'power4.out',
          delay: 0.1,
        }
      );

      gsap.fromTo(
        '.hero-breadcrumb',
        { y: 30, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out', delay: 0.5 }
      );

      // Staggered reveals for content blocks with scale
      gsap.utils.toArray('.reveal').forEach((element: any) => {
        gsap.fromTo(
          element,
          {
            y: 80,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Staggered solution items
      gsap.fromTo(
        '.solution-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.solution-grid',
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [slug]);

  if (!study) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-[var(--color-base)] dark:bg-[#0a1a18]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#071515] dark:text-white">
            Case Study Not Found
          </h1>
          <Link
            to="/portfolios"
            className="mt-6 inline-flex items-center gap-2 text-[#188b88] hover:underline dark:text-[#4ecdc4]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolios
          </Link>
        </div>
      </main>
    );
  }

  const handleGoBack = () => {
    navigate(-1); // Go back one step in history
  };

  return (
    <main ref={containerRef} className="overflow-hidden bg-[var(--color-base)] dark:bg-[#0a1a18]">
      {/* Hero Section */}
      <section className="hero-section px-3 pb-3 pt-[100px]">
        <div className="relative min-h-[400px] overflow-hidden rounded-[8px] bg-[#061f20]">
          <div className="absolute inset-[-20%] h-[140%] w-[140%]">
            <img
              src={study.image}
              alt={study.alt}
              className="hero-bg-img absolute inset-0 h-full w-full object-cover object-center opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-[#061f20]/70" />

          <div className="relative z-10 mx-auto flex min-h-[400px] max-w-[1000px] flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-12">
            <h1 className="hero-title text-[40px] font-bold leading-[1.1] tracking-[-0.04em] text-white sm:text-[52px] lg:text-[60px]">
              {study.title}
            </h1>

            <div className="hero-breadcrumb mt-8 inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-[14px] font-semibold text-white/75 backdrop-blur-md">
              <Home className="h-4 w-4 fill-[#188b88] text-[#188b88] dark:fill-[#4ecdc4] dark:text-[#4ecdc4]" />
              <Link to="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-white/45" />
              <Link to="/portfolios" className="transition-colors hover:text-white">
                Portfolios
              </Link>
              <ChevronRight className="h-4 w-4 text-white/45" />
              <span className="text-white">Case Study</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-12 xl:px-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="reveal mb-8">
            <div
              onClick={handleGoBack}
              className="inline-flex items-center gap-2 text-[16px] font-bold text-[#188b88] transition-colors hover:text-[#071515] dark:text-[#4ecdc4] dark:hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
              Go To Back
            </div>
          </div>

          <div className="reveal mb-12 rounded-[16px] bg-white p-8 shadow-sm dark:bg-[#0f1f1d] sm:p-12">
            <h2 className="mb-6 text-[32px] font-bold text-[#071515] dark:text-white">Overview</h2>
            <p className="text-[18px] leading-[1.7] text-[#435151] dark:text-[#9daaaa]">
              {study.description}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="reveal rounded-[16px] bg-white p-8 shadow-sm dark:bg-[#0f1f1d]">
              <h3 className="mb-4 text-[24px] font-bold text-[#071515] dark:text-white">
                The Challenge
              </h3>
              <p className="text-[17px] leading-[1.6] text-[#435151] dark:text-[#9daaaa]">
                {study.challenge}
              </p>
            </div>
            <div className="reveal rounded-[16px] bg-white p-8 shadow-sm dark:bg-[#0f1f1d]">
              <h3 className="mb-4 text-[24px] font-bold text-[#071515] dark:text-white">
                Our Approach
              </h3>
              <p className="text-[17px] leading-[1.6] text-[#435151] dark:text-[#9daaaa]">
                {study.approach}
              </p>
            </div>
            <div className="reveal rounded-[16px] bg-white p-8 shadow-sm dark:bg-[#0f1f1d]">
              <h3 className="mb-4 text-[24px] font-bold text-[#071515] dark:text-white">
                Development
              </h3>
              <p className="text-[17px] leading-[1.6] text-[#435151] dark:text-[#9daaaa]">
                {study.Development}
              </p>
            </div>
            <div className="reveal rounded-[16px] bg-white p-8 shadow-sm dark:bg-[#0f1f1d]">
              <h3 className="mb-4 text-[24px] font-bold text-[#071515] dark:text-white">Results</h3>
              <p className="text-[17px] leading-[1.6] text-[#435151] dark:text-[#9daaaa]">
                {study.Results}
              </p>
            </div>
          </div>

          <div className="reveal mt-16 rounded-[16px] bg-white border border-[#e5ecec] p-8 dark:bg-[#152624] dark:border-[#2a3f3d] sm:p-12">
            <h2 className="mb-10 text-center text-[36px] font-bold text-[#071515] dark:text-white">
              The Solution
            </h2>
            <div className="solution-grid grid gap-6 sm:grid-cols-2">
              {study.Solution.map((sol, index) => (
                <div
                  key={index}
                  className="solution-item flex gap-4 rounded-[12px] bg-[#f4f7f7] p-6 dark:bg-[#0f1f1d]"
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#188b88] dark:text-[#4ecdc4]" />
                  <div>
                    <h4 className="mb-2 text-[19px] font-bold text-[#071515] dark:text-white">
                      {sol.title}
                    </h4>
                    <p className="text-[15px] leading-[1.6] text-[#435151] dark:text-[#9daaaa]">
                      {sol.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
