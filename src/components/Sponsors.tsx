'use client';

import { motion } from 'framer-motion';

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 border-y border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="text-center mb-16"
        >
          <h2 className="font-ui text-primary text-sm tracking-widest mb-2">
            // POWERED_BY
          </h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-white">
            SPONSORS
          </h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholders for Sponsors */}
          {['GOOGLE', 'MICROSOFT', 'NETFLIX', 'META'].map((sponsor, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="text-2xl md:text-4xl font-black text-white/20 hover:text-white tracking-tighter cursor-pointer"
            >
              {sponsor}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
