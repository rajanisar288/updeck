import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show custom cursor on desktop to avoid touch conflicts
    if (window.innerWidth < 1024) return;
    document.body.style.cursor = 'none';

    // Dot perfectly tracks mouse
    const xDotSet = gsap.quickTo(cursorDotRef.current, "x", { duration: 0, ease: "none" });
    const yDotSet = gsap.quickTo(cursorDotRef.current, "y", { duration: 0, ease: "none" });

    // Ring trails slightly behind
    const xRingSet = gsap.quickTo(cursorRingRef.current, "x", { duration: 0.15, ease: "power3.out" });
    const yRingSet = gsap.quickTo(cursorRingRef.current, "y", { duration: 0.15, ease: "power3.out" });

    // Initial position center screen
    xDotSet(window.innerWidth / 2);
    yDotSet(window.innerHeight / 2);
    xRingSet(window.innerWidth / 2);
    yRingSet(window.innerHeight / 2);

    const onMouseMove = (e: MouseEvent) => {
      xDotSet(e.clientX);
      yDotSet(e.clientY);
      xRingSet(e.clientX);
      yRingSet(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, select, .cursor-pointer')) {
        gsap.to(cursorDotRef.current, { scale: 0, opacity: 0, duration: 0.2 });
        gsap.to(cursorRingRef.current, { scale: 1.5, backgroundColor: 'rgba(78, 205, 196, 0.1)', borderColor: '#4ecdc4', duration: 0.2 });
      } else {
        gsap.to(cursorDotRef.current, { scale: 1, opacity: 1, duration: 0.2 });
        gsap.to(cursorRingRef.current, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(78, 205, 196, 0.5)', duration: 0.2 });
      }
    };
    
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="pointer-events-none hidden lg:block">
      <div 
        ref={cursorRingRef} 
        className="fixed left-0 top-0 z-[99999] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4ecdc4]/50 mix-blend-difference pointer-events-none"
      />
      <div 
        ref={cursorDotRef} 
        className="fixed left-0 top-0 z-[99999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4ecdc4] mix-blend-difference pointer-events-none"
      />
    </div>
  );
}
