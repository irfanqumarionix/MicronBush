import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MBMLogo from './MBMLogo';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/#products', label: 'Products & Services' },
  { to: '/#contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-[100] w-full bg-white py-4 shadow-md"
      style={{ backgroundColor: '#ffffff' }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <MBMLogo />

        {/* Desktop nav - menu items on the right */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              {to.startsWith('/#') ? (
                <a
                  href={to}
                  className="text-mbm-neutral text-sm font-medium transition-colors hover:text-mbm-brand"
                >
                  {label}
                </a>
              ) : (
                <Link
                  to={to}
                  className={`text-sm font-medium transition-colors hover:text-mbm-brand ${
                    location.pathname === to ? 'text-mbm-brand' : 'text-mbm-neutral'
                  }`}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="rounded-lg p-2 text-mbm-brand md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-mbm-brand/10 bg-white md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navItems.map(({ to, label }) => (
                <li key={to}>
                  {to.startsWith('/#') ? (
                    <a
                      href={to}
                      className="block rounded-lg px-3 py-2 text-mbm-neutral hover:bg-mbm-brand/10 hover:text-mbm-brand"
                      onClick={() => setMobileOpen(false)}
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      to={to}
                      className={`block rounded-lg px-3 py-2 hover:bg-mbm-brand/10 ${
                        location.pathname === to ? 'text-mbm-brand font-medium' : 'text-mbm-neutral'
                      }`}
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
