import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Gauge,
  Settings,
  Circle,
  Box,
  Ruler,
  Layers,
  Scissors,
  RefreshCw,
  Nut,
  X,
} from 'lucide-react';
import { products } from '../data/products';

const iconMap = {
  Gauge,
  Settings,
  Circle,
  Box,
  Ruler,
  Layers,
  Scissors,
  RefreshCw,
  Nut,
};

function ProductCard({ product, onClick }) {
  const Icon = iconMap[product.icon] || Box;
  const [imgError, setImgError] = useState(false);
  const showImage = product.image && !imgError;
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="group cursor-pointer overflow-hidden rounded-xl border border-mbm-brand/10 bg-white shadow-card transition-shadow hover:shadow-lg"
      onClick={() => onClick(product)}
    >
      {showImage ? (
        <div className="relative mx-3 mt-3 h-40 overflow-hidden rounded-[15px] bg-mbm-bg">
          <img
            key={product.image}
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain p-4"
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        <div className="flex h-24 items-center justify-center bg-mbm-brand/5 p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-mbm-brand/10 text-mbm-brand">
            <Icon className="h-6 w-6" />
          </div>
        </div>
      )}
      <div className="p-6">
        <h3 className="font-semibold text-gray-900">{product.title}</h3>
        <p className="mt-1 text-sm font-medium text-mbm-brand">{product.highlight}</p>
        <p className="mt-2 text-sm text-mbm-neutral line-clamp-2">{product.description}</p>
        <span className="mt-3 inline-block text-sm font-medium text-mbm-brand group-hover:underline">
          Learn more →
        </span>
      </div>
    </motion.article>
  );
}

function ProductModal({ product, onClose }) {
  const Icon = product ? iconMap[product.icon] || Box : null;
  const [imgError, setImgError] = useState(false);
  const showImage = product?.image && !imgError;
  if (!product) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[90vh] w-full max-w-lg overflow-auto rounded-2xl border border-mbm-brand/10 bg-white p-8 shadow-xl"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-lg p-2 text-mbm-neutral hover:bg-mbm-bg hover:text-mbm-brand"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          {showImage ? (
            <div className="mb-6 overflow-hidden rounded-[15px] bg-mbm-bg">
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-full object-contain p-4"
                onError={() => setImgError(true)}
              />
            </div>
          ) : Icon ? (
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-mbm-brand/10 text-mbm-brand">
              <Icon className="h-7 w-7" />
            </div>
          ) : null}
          <h2 className="mt-4 text-2xl font-bold text-gray-900">{product.title}</h2>
          <p className="mt-2 font-medium text-mbm-brand">{product.highlight}</p>
          <p className="mt-4 text-mbm-neutral leading-relaxed">{product.description}</p>
          <p className="mt-4 text-sm text-mbm-neutral">
            For quotes and custom requirements, please contact us via the Contact Us section.
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="products" className="relative bg-mbm-bg py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-mbm-brand sm:text-4xl">
            Products & Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-mbm-neutral">
            Precision honing, machining, and tooling solutions for industry.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={`${product.id}-${product.image || ''}`}
              product={product}
              onClick={setSelectedProduct}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
