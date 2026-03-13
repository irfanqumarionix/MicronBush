import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-mbm-bg py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold text-mbm-brand sm:text-4xl">About Us</h2>
          <p className="mt-6 text-mbm-neutral leading-relaxed">
            Micron Bush Manufacturers was started in 1994 by Mr. R. Udaya Kumar. With over 25 years
            in the business, we are leading specialists in production honing, achieving geometric
            tolerances up to 3 microns.
          </p>
          <Link
            to="/about-us"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border-2 border-mbm-brand bg-transparent px-6 py-3 font-medium text-mbm-brand transition-colors hover:bg-mbm-brand hover:text-white"
          >
            More Info
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
