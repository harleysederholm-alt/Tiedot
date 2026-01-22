'use client';

import { motion } from 'framer-motion';
import { timeline } from '@/data/projects';

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Osion otsikko */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Urapolku
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Datanomista AI-orkestroijaksi – kehityskaari 2011–2026.
          </p>
        </motion.div>

        {/* Aikajana */}
        <div className="relative">
          {/* Pystyviiva */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-purple-500" />

          {/* Tapahtumat */}
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Piste */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10" />

              {/* Sisältö */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <span className="text-emerald-400 text-sm font-medium">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
