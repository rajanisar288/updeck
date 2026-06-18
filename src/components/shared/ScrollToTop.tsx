import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setIsVisible(scrollTop > 500);
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate circle properties
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  // Determine if we should show arrow (when scrolled to top or at 100%)
  const showArrow = scrollProgress === 0 || scrollProgress === 100;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 bg-white  shadow-lg hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
    >
      <div className="relative w-full h-full p-1">
        {/* Background circle */}
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="3"
          />
          {/* Progress circle */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="#1E8A8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300 ease-out"
          />
        </svg>

        {/* Content inside circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          {showArrow ? (
            <ArrowUp className="w-6 h-6 text-[#1E8A8A]" />
          ) : (
            <span className="text-sm font-bold text-[#1E8A8A]">
              {Math.round(scrollProgress)}%
            </span>
          )}
        </div>
      </div>
    </button>
  );
}