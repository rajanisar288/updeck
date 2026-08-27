import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  breadcrumb?: string;
}

export default function PageHeader({ title, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative pt-20 overflow-hidden rounded-b-2xl mx-2">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/cta-collaboration.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-Updeck-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-24 lg:py-32">
        <h1 className="text-4xl lg:text-6xl font-normal text-white mb-4 tracking-tight">
          {title}
        </h1>
        <nav className="flex items-center gap-2 text-sm">
          <Link
            to="/"
            className="flex items-center gap-1 text-white/70 hover:text-white transition-colors"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          <span className="text-white/40">›</span>
          <span className="text-white">{breadcrumb || title}</span>
        </nav>
      </div>
    </section>
  );
}
