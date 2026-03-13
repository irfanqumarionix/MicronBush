import { motion } from 'framer-motion';

const customers = [
  { logo: '/customer%201.png', alt: 'DELPHI-TVS' },
  { logo: '/customer%202.png', alt: 'BorgWarner Morse TEC' },
  { logo: '/customer%203.png', alt: 'AUTOTECH' },
  { logo: '/customer%204.png', alt: 'Rane & TRW' },
  { logo: '/customer%205.png', alt: 'Customer' },
];

function CustomerLogo({ logo, alt }) {
  return (
    <div className="flex h-24 min-w-[200px] shrink-0 items-center justify-center rounded-xl border border-mbm-brand/10 bg-white px-6 shadow-sm">
      <img
        src={logo}
        alt={alt}
        className="max-h-16 w-auto max-w-[180px] object-contain"
      />
    </div>
  );
}

export default function CustomersSection() {
  const duplicated = [...customers, ...customers];
  const slideWidth = (200 + 32) * 5;

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold text-mbm-brand sm:text-4xl">Our Customers</h2>
        <p className="mx-auto mt-4 max-w-2xl text-mbm-neutral">
          Trusted by leading names in automotive and engineering.
        </p>
      </motion.div>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-max gap-8"
          style={{ width: 'max-content' }}
          animate={{ x: [0, -slideWidth] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 28,
              ease: 'linear',
            },
          }}
        >
          {duplicated.map((c, i) => (
            <CustomerLogo key={`${c.alt}-${i}`} logo={c.logo} alt={c.alt} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
