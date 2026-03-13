import { motion } from 'framer-motion';
import {
  Users,
  BadgeDollarSign,
  Award,
  Clock,
  Cog,
  History,
} from 'lucide-react';

const items = [
  {
    icon: Users,
    title: 'Highly Skilled Staff',
    description: '15+ years of hands-on experience in precision honing and machining.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Competitive Prices',
    description: 'Best value without compromising on quality or delivery.',
  },
  {
    icon: Award,
    title: 'Highest Quality Workmanship',
    description: 'ISO 9001:2015 certified processes and quality systems.',
  },
  {
    icon: Clock,
    title: 'Quick Turn-around & On-time Delivery',
    description: 'Reliable schedules and fast turnaround for your projects.',
  },
  {
    icon: Cog,
    title: 'Any Material & Bore Configuration',
    description: 'Capable of honing any material and bore configuration.',
  },
  {
    icon: History,
    title: 'Over 25 Years of Legacy',
    description: 'Industry trust and proven track record since 1994.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function WhyChooseMBM() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-mbm-bg to-white opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-mbm-brand sm:text-4xl">Why Choose Us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-mbm-neutral">
            Trust, quality, and decades of precision engineering.
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              className="flex flex-col items-center rounded-xl border border-mbm-brand/10 bg-mbm-bg/50 p-8 text-center transition-shadow hover:shadow-card"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-mbm-brand/10 text-mbm-brand">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-mbm-neutral">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
