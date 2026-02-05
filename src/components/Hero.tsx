'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, ArrowUpRight, Github, Linkedin, Download } from 'lucide-react';
import { contact } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center bg-white relative overflow-hidden pt-20 pb-0 md:pt-0">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-32 z-0" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-50/50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 z-0" />

      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* Left Column: Content (7 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-slate-500 font-medium tracking-wide text-sm uppercase">{t.hero.status}</span>
          </div>

          <h1 className="font-outfit text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-slate-900 leading-[1.1] md:leading-[0.95] tracking-tight mb-8">
            {t.hero.role.split(' ').slice(0, 1)} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500">
              {t.hero.role.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          <div className="flex flex-col gap-6 mb-10 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-medium text-slate-800">
              {t.hero.name}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              {t.hero.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/cv_harley_2026.pdf"
              download
              className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white hover:bg-emerald-700 transition-colors rounded-none font-medium text-lg"
            >
              {t.hero.downloadCv}
              <Download size={20} className="text-slate-400 group-hover:text-white transition-colors" />
            </a>

            <div className="flex gap-2">
              <a
                href={`mailto:${contact.email}`}
                className="p-4 border border-slate-200 hover:border-emerald-600 text-slate-600 hover:text-emerald-700 transition-colors bg-white accent-button"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-slate-200 hover:border-[#0077b5] text-slate-600 hover:text-[#0077b5] transition-colors bg-white accent-button"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-slate-200 hover:border-black text-slate-600 hover:text-black transition-colors bg-white accent-button"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Imagery (5 cols) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
            {/* Architectural Border/Frame */}
            <div className="absolute inset-0 border-[1px] border-slate-200 translate-x-4 translate-y-4 z-0" />
            
            <div className="relative h-full bg-slate-100 overflow-hidden z-10 shadow-2xl shadow-slate-200/50">
               <Image
                src="/profile.jpg"
                alt={t.hero.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900/90 to-transparent">
                <div className="flex items-end justify-between text-white">
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-1">{t.hero.currentFocus}</p>
                    <p className="font-outfit text-xl font-semibold">{t.hero.focusProject}</p>
                  </div>
                  <ArrowUpRight className="text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
