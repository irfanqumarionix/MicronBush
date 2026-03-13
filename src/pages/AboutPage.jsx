import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-mbm-bg pb-20 pt-28 sm:pt-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-mbm-brand text-sm font-medium hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-mbm-brand sm:text-4xl">About Us</h1>
          <div className="mt-8 space-y-6 text-mbm-neutral leading-relaxed">
            <p>
            Our Company Micron Bush Manufacturers was started in the year 1994 as a 
proprietorship concern by Mr. R. Udaya Kumar. Since its inception we are the leading 
production honing specialist for the past two decades. Considering the need of honing 
operations to achieve better surface finish & to attain geometric tolerance we have 
diversified our operations in to manufacturing of horizontal manual type honing 
machines, servicing of horizontal manual type honing machine, manufacturing of precise 
machining parts, Drill Jig Bushes as per Indian Standard or as per customer specific 
requirements.</p>

<p>Our core mantra is our superior customer satisfaction. We are dedicated to 
providing and producing quality products on-time, in accordance with customer drawings 
and specifications.</p>

<p>Our company is a ISO 9001:2015 certified company with a team of qualified 
professionals. We pride ourselves on our quality workmanship, being able to provide 
efficient, reliable and most competitive honing service..
            </p>
        
          
          </div>
        </motion.div>
      </div>
    </main>
  );
}
/* 
 <div className="rounded-xl border border-mbm-brand/10 bg-white p-6">
              <h2 className="text-lg font-semibold text-gray-900">Our Mission</h2>
              <p className="mt-3 text-mbm-neutral">
                Our mission is to make it easy for our customers to procure high-quality precision
                machined products at the best possible cost and least effort.
              </p>
            </div>
            */