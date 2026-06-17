import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowUpRight,
  Menu,
  Search,
  X,
} from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Pages', path: '/about-us' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolios', path: '/portfolios' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 px-[10px]">
        <nav
          className={[
            'relative flex h-[72px] w-full items-center justify-between bg-white px-4 transition-all duration-500 sm:px-6 lg:h-[86px] lg:px-12 xl:px-20',
            isScrolled ? 'shadow-[0_12px_40px_rgba(7,21,21,0.08)]' : 'shadow-none',
            isMobileMenuOpen
              ? 'pointer-events-none opacity-0 lg:pointer-events-auto lg:opacity-100'
              : 'opacity-100',
          ].join(' ')}
        >
          {/* Logo */}
          <Link to="/" className="relative z-10 flex items-center gap-2.5">
            {/* <Box className="h-9 w-9 fill-[#188b88] text-[#188b88] lg:h-11 lg:w-11" />

            <span className="text-[28px] font-semibold leading-none tracking-[-0.06em] text-[#071515] lg:text-[31px]">
              Updeck
            </span> */}
            <img src="/images/logo1.png" alt="Logo" className="h-[100px] w-[100px]" />
          </Link>

          {/* Desktop Links Center */}
          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-9 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === link.path ||
                (link.path !== '/' && location.pathname.startsWith(link.path));

              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={[
                    'text-[16px] font-medium tracking-[-0.03em] transition-colors duration-300',
                    isActive
                      ? 'text-[#188b88]'
                      : 'text-[#071515] hover:text-[#188b88]',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="relative z-10 flex items-center gap-4">
            <button
              type="button"
              className="hidden h-12 w-12 items-center justify-center rounded-full bg-[#eef3f3] text-[#071515] transition-all duration-300 hover:bg-[#188b88] hover:text-white lg:flex"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            <Link
              to="/contact"
              className="group hidden items-center gap-3 rounded-full bg-[#188b88] py-2.5 pl-7 pr-2.5 text-[16px] font-bold tracking-[-0.03em] text-white transition-all duration-300 hover:bg-[#147a77] lg:flex"
            >
              Let's Talk

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071515] text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-[6px] bg-[#188b88] text-white transition-all duration-300 hover:bg-[#147a77] lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Side Menu */}
      <div
        className={[
          'fixed inset-0 z-[60] lg:hidden',
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none',
        ].join(' ')}
      >
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(false)}
          className={[
            'absolute inset-0 bg-[#061f20]/55 backdrop-blur-[7px] transition-opacity duration-500',
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          aria-label="Close menu overlay"
        />

        <aside
          className={[
            'absolute right-0 top-0 h-full w-[76vw] max-w-[330px] overflow-y-auto bg-[#061f20] px-6 py-8 text-white shadow-[-20px_0_60px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-out',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
          ].join(' ')}
        >
          {/* Drawer Header */}
          <div className="mb-10 flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2.5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* <Box className="h-9 w-9 fill-[#188b88] text-[#188b88]" />

              <span className="text-[29px] font-semibold leading-none tracking-[-0.06em] text-white">
                Updeck
              </span> */}
              <img src="/images/White-landscape.png" alt="Logo" />
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-white/90 transition-colors duration-300 hover:text-[#188b88]"
              aria-label="Close menu"
            >
              <X className="h-8 w-8 stroke-[1.5]" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="mb-10">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === link.path ||
                (link.path !== '/' && location.pathname.startsWith(link.path));

              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={[
                    'flex border-b border-white/8 py-4 text-[16px] font-bold tracking-[-0.03em] transition-colors duration-300',
                    isActive ? 'text-[#188b88]' : 'text-white hover:text-[#188b88]',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Contact Info */}
          <div className="mb-12">
            <h3 className="mb-7 text-[20px] font-bold tracking-[-0.04em] text-white">
              Contact Info
            </h3>

            <div className="space-y-7">
              <div>
                <p className="mb-2 text-[14px] font-medium text-white/35">
                  Email
                </p>
                <a
                  href="mailto:info@Updeck.com"
                  className="text-[16px] font-semibold text-white/55 transition-colors duration-300 hover:text-[#188b88]"
                >
                  info@Updeck.com
                </a>
              </div>

              <div>
                <p className="mb-2 text-[14px] font-medium text-white/35">
                  Location
                </p>
                <p className="max-w-[230px] text-[15px] font-semibold leading-[1.55] text-white/55">
                  993 Renner Burg, West Rond, MT 94251-030
                </p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-6 text-[20px] font-bold tracking-[-0.04em] text-white/80">
              Follow Us
            </h3>

            <div className="flex items-center gap-3">
              {['f', '◎', '𝕏', 'in'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-[13px] font-bold text-white/45 transition-all duration-300 hover:bg-[#188b88] hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}