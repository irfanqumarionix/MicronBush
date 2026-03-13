import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import MBMLogo from './MBMLogo';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/#products', label: 'Products & Services' },
  { to: '/#contact', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-mbm-brand/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Left: Logo & Address */}
          <div>
            <MBMLogo className="mb-4" />
            <div className="flex items-start gap-3 text-mbm-neutral text-sm">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-mbm-brand" />
              <address className="not-italic">
                No-55, Padavattaman Industrial Estate,
                <br />
                Ambattur, Chennai - 600 098.
              </address>
            </div>
          </div>

          {/* Center: Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  {to.startsWith('/#') ? (
                    <a
                      href={to}
                      className="text-mbm-neutral text-sm transition-colors hover:text-mbm-brand"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      to={to}
                      className="text-mbm-neutral text-sm transition-colors hover:text-mbm-brand"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact */}
          <div>
            <h3 className="font-semibold text-gray-900">Contact Info</h3>
            <ul className="mt-4 space-y-3 text-mbm-neutral text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-mbm-brand" />
                <a href="tel:+919087591623" className="hover:text-mbm-brand">
                  +91 9087591623
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-mbm-brand" />
                <a href="mailto:micronbush@gmail.com" className="hover:text-mbm-brand">
                  micronbush@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-mbm-brand/10 pt-8 text-center text-mbm-neutral text-sm">
          © {new Date().getFullYear()} Micron Bush Manufacturers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
