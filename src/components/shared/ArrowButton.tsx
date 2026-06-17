import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ArrowButtonProps {
  text: string;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'dark' | 'outline';
  className?: string;
}

export default function ArrowButton({
  text,
  to,
  onClick,
  variant = 'primary',
  className = '',
}: ArrowButtonProps) {
  const baseClasses =
    'inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 group';

  const variantClasses = {
    primary: 'bg-Updeck-primary text-white hover:bg-Updeck-primary/90',
    dark: 'bg-Updeck-text-primary text-white hover:bg-black',
    outline: 'border border-Updeck-text-muted/30 text-Updeck-text-secondary hover:border-Updeck-primary hover:text-Updeck-primary',
  };

  const iconBgClasses = {
    primary: 'bg-white/20 group-hover:bg-white/30',
    dark: 'bg-white/20 group-hover:bg-white/30',
    outline: 'bg-Updeck-text-muted/20 group-hover:bg-Updeck-primary/20',
  };

  const content = (
    <>
      {text}
      <span
        className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${iconBgClasses[variant]}`}
      >
        <ArrowUpRight className="w-3 h-3" />
      </span>
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {content}
    </button>
  );
}
