import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

const serviceLinks = [
  'Customer Experience',
  'Training Programs',
  'Business Strategy',
  'Training Program',
  'ESG Consulting',
  'Development Hub',
];

const resourceLinks = [
  { label: 'Contact us', path: '/contact' },
  { label: 'Team Member', path: '/about-us' },
  { label: 'Recognitions', path: '/faq' },
  { label: 'Careers', path: '/about-us', badge: 'NEW' },
  { label: 'News', path: '/about-us' },
  { label: 'Feedback', path: '/contact' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <footer className="bg-Updeck-base pt-16 pb-6">
      {/* CTA Banner */}
      <div className="px-4 sm:px-6 lg:px-12 xl:px-20 mb-16">
        <div className="relative overflow-hidden rounded-2xl bg-Updeck-accent">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-1 p-8 lg:p-12">
              <h2 className="text-3xl lg:text-5xl font-normal text-white mb-6 leading-tight">
                Let's Build Future<br />Together.
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-Updeck-text-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black transition-colors group"
              >
                Get Started Now
                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
            <div className="hidden lg:block w-1/2">
              <img
                src="/images/cta-collaboration.jpg"
                alt="Collaboration"
                className="w-full h-64 object-cover rounded-r-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              {/* <div className="w-10 h-10 bg-Updeck-primary rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              {/* <span className="text-xl font-semibold text-Updeck-text-primary">Updeck</span> */}
              <img src="/images/logo1.png" alt="Logo" className="h-[100px] w-[100px]" />
            </Link>
            <p className="text-sm text-Updeck-text-secondary leading-relaxed mb-6">
              Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" className="text-Updeck-text-muted" />
                  <text x="20" y="16" textAnchor="middle" className="text-[8px] font-bold fill-Updeck-text-primary">18</text>
                  <text x="20" y="22" textAnchor="middle" className="text-[4px] fill-Updeck-text-secondary">CLUTCH</text>
                  <text x="20" y="26" textAnchor="middle" className="text-[4px] fill-Updeck-text-secondary">AWARDS</text>
                </svg>
              </div>
              <div className="flex items-center gap-1">
                <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" className="text-Updeck-text-muted" />
                  <text x="20" y="16" textAnchor="middle" className="text-[8px] font-bold fill-Updeck-text-primary">5</text>
                  <text x="20" y="22" textAnchor="middle" className="text-[4px] fill-Updeck-text-secondary">AWWWARDS</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold text-Updeck-text-primary mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm text-Updeck-text-secondary hover:text-Updeck-primary transition-colors cursor-pointer">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-base font-semibold text-Updeck-text-primary mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-Updeck-text-secondary hover:text-Updeck-primary transition-colors inline-flex items-center gap-2"
                  >
                    {link.label}
                    {link.badge && (
                      <span className="text-[10px] font-semibold bg-Updeck-accent text-white px-1.5 py-0.5 rounded">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-Updeck-text-primary mb-4">
              Subscribe to Our Newsletter.
            </h4>
            <div className="relative mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full bg-white rounded-xl px-4 py-3 pr-12 text-sm text-Updeck-text-primary placeholder:text-Updeck-text-muted focus:outline-none focus:ring-2 focus:ring-Updeck-accent"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-Updeck-accent rounded-lg flex items-center justify-center text-white hover:bg-Updeck-primary transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-Updeck-text-muted text-Updeck-accent focus:ring-Updeck-accent"
              />
              <span className="text-xs text-Updeck-text-secondary">
                Agree to our{' '}
                <Link to="/faq" className="text-Updeck-text-primary underline">
                  Terms & Condition?
                </Link>
              </span>
            </label>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-Updeck-text-muted/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href="tel:+10095447818" className="flex items-center gap-2 text-sm text-Updeck-text-secondary hover:text-Updeck-primary transition-colors">
              <Phone className="w-4 h-4" />
              +1 (009) 544-7818
            </a>
            <a href="mailto:info@Updeck.com" className="flex items-center gap-2 text-sm text-Updeck-text-secondary hover:text-Updeck-primary transition-colors">
              <Mail className="w-4 h-4" />
              info@Updeck.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-Updeck-text-muted/20 flex items-center justify-center text-Updeck-text-secondary hover:bg-Updeck-primary hover:text-white transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-Updeck-text-muted/20 flex items-center justify-center text-Updeck-text-secondary hover:bg-Updeck-primary hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-Updeck-text-muted/20 flex items-center justify-center text-Updeck-text-secondary hover:bg-Updeck-primary hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-Updeck-text-muted/20 flex items-center justify-center text-Updeck-text-secondary hover:bg-Updeck-primary hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <p className="text-sm text-Updeck-text-muted">
            © 2026 <span className="text-Updeck-text-primary font-medium">Updeck</span> All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
