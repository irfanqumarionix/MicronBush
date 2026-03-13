import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-mbm-bg">
      { /*Background image with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-bg.png')`,
          }}
        />
        <div className="absolute inset-0 bg-hero-pattern" />
      </div>

      <div className="relative z-10 flex min-h-[90vh] flex-col justify-center px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl"
          >
            Precise Honing Solutions & High-Tolerance Engineering
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-lg text-white/95 sm:text-xl"
          >
            Leading production honing specialists since 1994. Excellence in precision engineering
            and state-of-the-art workmanship.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10"
          >
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-mbm-brand shadow-lg transition-all hover:bg-mbm-bg hover:shadow-xl"
            >
              Explore Our Products
              <ChevronDown className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Subtle metallic gradient bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-mbm-brand/40 to-transparent"
        aria-hidden
      />
    </section>
  );
}
