import { Hexagon } from 'lucide-react';

interface SectionLabelProps {
  text: string;
  className?: string;
  dark?: boolean;
}

export default function SectionLabel({ text, className = '', dark = false }: SectionLabelProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md border ${dark
        ? 'border-Updeck-text-muted/30 bg-Updeck-dark/50'
        : 'border-Updeck-text-muted/30 bg-white/50'
      } ${className}`}>
      <Hexagon className={`w-3 h-3 ${dark ? 'text-Updeck-accent' : 'text-Updeck-primary'}`} fill="currentColor" />
      <span className={`text-[11px] font-semibold uppercase tracking-[0.1em] ${dark ? 'text-Updeck-text-muted' : 'text-Updeck-text-secondary'
        }`}>
        {text}
      </span>
    </div>
  );
}
