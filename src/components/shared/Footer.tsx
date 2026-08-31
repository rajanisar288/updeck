// src/components/Footer.tsx

import { useTheme } from '@/context/ThemeContext';
import { content } from '@/data/content';
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from 'lucide-react';
import { Link } from 'react-router-dom';

function TikTokIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M16.6 5.82a5.85 5.85 0 0 1-1.38-3.42h-3.11v12.52a2.62 2.62 0 1 1-2.26-2.6V9.16a5.76 5.76 0 1 0 5.37 5.75V8.56a8.92 8.92 0 0 0 5.2 1.67V7.12a5.9 5.9 0 0 1-3.82-1.3Z" />
    </svg>
  );
}

export default function Footer() {
  const { footerSection } = content;
  const { theme } = useTheme();

  // Business Impact headings - show only 3 + Show More
  const businessImpactHeadings = [
    '24/7 Digital Veterinary Care Platform',
    'Online Pet Pharmacy Platform',
    'Logistics & Transportation Platform',
  ];

  // Portfolio items - show only 3 + Show More
  const portfolioItems = [
    'E-Commerce Platform Development',
    'Healthcare Management System',
    'Mobile App for Retail',
  ];

  return (
    <footer className="relative overflow-hidden bg-[var(--color-base)] px-3 pb-3 pt-20 dark:bg-[#0a1a18]">
      {/* CTA Banner */}
      <div className="relative z-20 mx-auto -mb-[82px] max-w-[1160px]">
        <div className="relative min-h-[292px] overflow-hidden rounded-[8px] bg-[#188b88]">
          {/* Right image */}
          <div className="absolute inset-y-0 right-0 hidden w-[54%] lg:block">
            <img
              src={footerSection.ctaImage}
              alt={footerSection.ctaImageAlt}
              className="h-full w-full object-cover object-center opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#188b88] via-[#188b88]/65 to-[#188b88]/15" />
            <div className="absolute inset-0 bg-[#188b88]/20" />
          </div>

          {/* White soft shape */}
          <div className="pointer-events-none absolute right-[96px] top-1/2 hidden h-[190px] w-[390px] -translate-y-1/2 rounded-[50%] bg-white/25 blur-[2px] lg:block" />

          <div className="relative z-10 flex min-h-[292px] items-center px-8 py-10 sm:px-12 lg:px-14">
            <div>
              <h2 className="mb-8 max-w-[540px] text-[46px] font-normal leading-[1.12] tracking-[-0.055em] text-white sm:text-[60px] lg:text-[44px]">
                {footerSection.ctaHeading}
              </h2>

              <Link
                to={footerSection.ctaLink}
                className="group inline-flex h-[43px] items-center rounded-full bg-[#071515] pl-6 pr-1.5 text-[14px] font-bold text-white transition-colors duration-300 hover:bg-black"
              >
                {footerSection.ctaButtonText}

                <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#071515] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Full width footer panel */}
      <div className="relative w-full overflow-hidden rounded-[8px] bg-[#dfe9e9] px-4 pb-7 pt-[178px] dark:bg-[#081d1b] sm:px-6 lg:px-12 xl:px-20">
        {/* Left diagonal pattern */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[28%] opacity-[0.22] dark:opacity-[0.12]">
          <div className="absolute -left-28 top-0 h-full w-full rotate-[-18deg] bg-[repeating-linear-gradient(90deg,rgba(7,21,21,0.24)_0px,rgba(7,21,21,0.24)_1px,transparent_1px,transparent_12px)]" />
        </div>

        {/* Right diagonal pattern */}
        <div className="pointer-events-none absolute bottom-0 right-0 h-full w-[30%] opacity-[0.22] dark:opacity-[0.12]">
          <div className="absolute -right-28 bottom-0 h-full w-full rotate-[-18deg] bg-[repeating-linear-gradient(90deg,rgba(7,21,21,0.24)_0px,rgba(7,21,21,0.24)_1px,transparent_1px,transparent_12px)]" />
        </div>

        {/* Inner content */}
        <div className="relative z-10 mx-auto max-w-[1160px]">
          {/* Footer Columns */}
          <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1fr] lg:gap-16">
            {/* Brand */}
            <div>
              {/* Logo */}
              <Link to="/" className="mb-6 inline-flex items-center">
                <img
                  src={
                    theme === 'dark'
                      ? '/images/logo/footer-white.png'
                      : '/images/logo/footer-main.png'
                  }
                  alt="updeck logo"
                  className="h-10 w-auto object-contain"
                />
              </Link>

              {/* Brand Statement */}
              <div className="max-w-[305px]">
                <h3 className="text-[22px] font-semibold leading-[1.22] tracking-[-0.045em] text-[#071515] dark:text-white lg:text-[23px]">
                  <span className="block">
                    {footerSection.brandHeadingLine1}
                  </span>

                  <span className="mt-1 block text-[#188b88] dark:text-[#4ecdc4]">
                    {footerSection.brandHeadingLine2}
                  </span>
                </h3>

                <p className="mt-5 max-w-[295px] text-[14px] font-medium leading-[1.7] tracking-[-0.025em] text-[#536363] dark:text-[#9daaaa] lg:text-[15px]">
                  {footerSection.brandDescription}
                </p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-7 text-[18px] font-bold leading-none tracking-[-0.03em] text-[#071515] dark:text-white">
                {footerSection.servicesTitle}
              </h4>

              <ul className="space-y-5">
                {footerSection.services.map((link) => (
                  <li key={link}>
                    <Link
                      to="/services"
                      className="text-[15px] font-medium leading-none tracking-[-0.03em] text-[#536363] transition-colors duration-300 hover:text-[#188b88] dark:text-[#9daaaa] dark:hover:text-[#4ecdc4]"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Portfolio */}
            <div>
              <h4 className="mb-7 text-[18px] font-bold leading-none tracking-[-0.03em] text-[#071515] dark:text-white">
                Portfolio
              </h4>

              <ul className="space-y-5">
                {portfolioItems.slice(0, 3).map((item) => (
                  <li key={item}>
                    <Link
                      to="/portfolios"
                      className="text-[15px] font-medium leading-none tracking-[-0.03em] text-[#536363] transition-colors duration-300 hover:text-[#188b88] dark:text-[#9daaaa] dark:hover:text-[#4ecdc4]"
                    >
                      {item}
                    </Link>
                  </li>
                ))}

                <li>
                  <Link
                    to="/portfolios"
                    className="inline-flex items-center gap-2 text-[15px] font-medium leading-none tracking-[-0.03em] text-[#188b88] transition-colors duration-300 hover:text-[#147a77] dark:text-[#4ecdc4] dark:hover:text-[#45b8b0]"
                  >
                    Show More
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Business Impact */}
            <div>
              <h4 className="mb-7 text-[18px] font-bold leading-none tracking-[-0.03em] text-[#071515] dark:text-white">
                Business Impact
              </h4>

              <ul className="space-y-5">
                {businessImpactHeadings.slice(0, 3).map((heading) => (
                  <li key={heading}>
                    <Link
                      to="/business-impact"
                      className="text-[15px] font-medium leading-none tracking-[-0.03em] text-[#536363] transition-colors duration-300 hover:text-[#188b88] dark:text-[#9daaaa] dark:hover:text-[#4ecdc4]"
                    >
                      {heading}
                    </Link>
                  </li>
                ))}

                <li>
                  <Link
                    to="/business-impact"
                    className="inline-flex items-center gap-2 text-[15px] font-medium leading-none tracking-[-0.03em] text-[#188b88] transition-colors duration-300 hover:text-[#147a77] dark:text-[#4ecdc4] dark:hover:text-[#45b8b0]"
                  >
                    Show More
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-between gap-6 border-t border-[#b9c8c8] pt-6 dark:border-[#2a3f3d] lg:flex-row">
            {/* Email */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-7">
              <a
                href={`mailto:${footerSection.email}`}
                className="inline-flex items-center gap-2 text-[15px] font-medium text-[#536363] transition-colors duration-300 hover:text-[#188b88] dark:text-[#9daaaa] dark:hover:text-[#4ecdc4]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#188b88] text-white dark:bg-[#4ecdc4] dark:text-[#0a1a18]">
                  <Mail className="h-3.5 w-3.5" />
                </span>

                {footerSection.email}
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {footerSection.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7d8b8b]/45 text-white transition-colors duration-300 hover:bg-[#188b88]"
                  aria-label={social.name}
                >
                  {social.icon === 'Facebook' && (
                    <Facebook className="h-3.5 w-3.5" />
                  )}

                  {social.icon === 'Instagram' && (
                    <Instagram className="h-3.5 w-3.5" />
                  )}

                  {social.icon === 'Twitter' && (
                    <Twitter className="h-3.5 w-3.5" />
                  )}

                  {social.icon === 'Linkedin' && (
                    <Linkedin className="h-3.5 w-3.5" />
                  )}

                  {social.icon === 'TikTok' && (
                    <TikTokIcon className="h-3.5 w-3.5" />
                  )}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-[15px] font-medium tracking-[-0.03em] text-[#536363] dark:text-[#9daaaa]">
              {footerSection.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
