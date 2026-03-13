import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function MBMLogo({ className = '', compact = false }) {
  const [imgError, setImgError] = useState(false);
  const useImage = !imgError;

  return (
    <Link
      to="/"
      className={`flex items-center no-underline ${className}`}
      aria-label="Micron Bush Manufacturers - Home"
    >
      <motion.div
        className="flex items-center"
        whileHover={{ opacity: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        {useImage ? (
          <img
            src="/MBM%20Logo.jpg"
            alt="Micron Bush Manufacturers"
            className={`object-contain object-left ${compact ? 'h-8 max-w-[140px]' : 'h-10 max-w-[200px] sm:h-12 sm:max-w-[260px]'}`}
            onError={() => setImgError(true)}
          />
        ) : (
          <LogoSVG compact={compact} />
        )}
      </motion.div>
    </Link>
  );
}

function LogoSVG({ compact }) {
  return (
    <svg
      viewBox="0 0 260 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={compact ? 'h-8 w-auto max-w-[140px]' : 'h-10 w-auto max-w-[200px] sm:h-12 sm:max-w-[260px]'}
      aria-label="Micron Bush Manufacturers"
    >
      <circle cx="28" cy="28" r="26" fill="#0662a3" />
      <circle cx="28" cy="28" r="14" fill="#e8eaed" />
      <text x="28" y="32" textAnchor="middle" fill="#0662a3" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">MBM</text>
      <text x="70" y="22" fill="#0662a3" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">MICRON BUSH</text>
      <line x1="70" y1="28" x2="250" y2="28" stroke="#979a9f" strokeWidth="1" />
      <text x="70" y="44" fill="#979a9f" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">MANUFACTURERS</text>
    </svg>
  );
}
