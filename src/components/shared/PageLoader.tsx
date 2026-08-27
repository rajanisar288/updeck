import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

export default function PageLoader() {
  const location = useLocation();
  const loaderRef = useRef<HTMLDivElement>(null);
  const isInitialLoad = useRef(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      if (isInitialLoad.current) {
        // Initial load sequence - showcase the SVG drawing animation
        tl.to('.loader-path', { 
            strokeDashoffset: 0, 
            duration: 1.5, 
            ease: 'power3.inOut', 
            stagger: 0.2 
          })
          .to('.loader-text', { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: 'power4.out' 
          }, "-=0.8")
          .to(loaderRef.current, { 
            yPercent: -100, 
            duration: 1.2, 
            ease: 'power4.inOut', 
            delay: 0.4 
          });
        
        isInitialLoad.current = false;
      } else {
        // Route change sequence
        // Instantly cover the screen to hide raw DOM swaps
        gsap.set(loaderRef.current, { yPercent: 0 });
        gsap.set('.loader-path', { strokeDashoffset: 0 });
        gsap.set('.loader-text', { opacity: 1, y: 0 });
        gsap.set('.loader-logo-container', { scale: 1, opacity: 1 });

        // Animate the logo out, then lift the curtain to reveal the new page
        tl.to('.loader-logo-container', { 
            scale: 0.9, 
            opacity: 0, 
            duration: 0.5, 
            ease: 'power3.in', 
            delay: 0.1 
          })
          .to(loaderRef.current, { 
            yPercent: -100, 
            duration: 1.2, 
            ease: 'power4.inOut' 
          });
      }
    }, loaderRef);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div 
      ref={loaderRef} 
      className="loader-overlay fixed inset-0 z-[99999] flex items-center justify-center bg-[#071515]"
    >
      {/* Subtle modern grid background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.2)_0px,rgba(255,255,255,0.2)_1px,transparent_1px,transparent_60px),repeating-linear-gradient(0deg,rgba(255,255,255,0.2)_0px,rgba(255,255,255,0.2)_1px,transparent_1px,transparent_60px)]" />
      
      <div className="loader-logo-container relative z-10 flex items-center gap-5">
        {/* Animated SVG Icon (Abstract Updeck) */}
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top Arrow / Deck */}
          <path 
            className="loader-path" 
            d="M12 36L32 16L52 36" 
            stroke="#4ecdc4" 
            strokeWidth="7" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeDasharray="120" 
            strokeDashoffset="120" 
          />
          {/* Bottom Arrow / Deck */}
          <path 
            className="loader-path" 
            d="M12 52L32 32L52 52" 
            stroke="#188b88" 
            strokeWidth="7" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeDasharray="120" 
            strokeDashoffset="120" 
          />
        </svg>

        {/* Text Reveal */}
        <div className="overflow-hidden pb-1">
          <h1 className="loader-text translate-y-full text-[42px] font-bold tracking-[-0.04em] text-white opacity-0">
            Updeck
          </h1>
        </div>
      </div>
    </div>
  );
}
