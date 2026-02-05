'use client';

import { motion } from 'framer-motion';
import { timeline } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';

export default function Timeline() {
  const { t } = useLanguage();

  return (
    <section id="timeline" className="py-24 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Header Column */}
          <div className="lg:col-span-1">
            <h2 className="font-outfit text-4xl font-bold text-slate-900 mb-4 whitespace-pre-line">
              {t.timeline.title.replace(' ', '\n')}
            </h2>
            <div className="h-1 w-20 bg-emerald-600 mb-6" />
            <p className="text-slate-600 leading-relaxed">
              {t.timeline.description}
            </p>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-3">
             <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200 before:hidden">
              {/* Custom aligned timeline instead of centered */}
               <div className="border-l-2 border-slate-200 ml-3 pl-8 space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <span className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-white bg-slate-300 ring-2 ring-slate-100" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                       <h3 className="font-outfit text-xl font-bold text-slate-900">{item.title}</h3>
                       <span className="text-sm font-mono text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 w-fit">{item.year}</span>
                    </div>
                    
                    <p className="text-slate-600 max-w-2xl leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
