'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, Github, ExternalLink, Download, Linkedin } from 'lucide-react';
import { contact } from '@/data/projects';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-black via-black/95 to-emerald-950/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center md:justify-end order-first md:order-last"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-[80px] opacity-40 animate-pulse" />
            <div className="absolute inset-4 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-20" />
            <Image
              src="/profile.jpg"
              alt="Harley Christian Sederholm"
              fill
              className="rounded-full object-cover border-2 border-white/5 relative z-10 shadow-2xl shadow-emerald-900/20"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center md:text-left relative z-10"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-none">
            Harley Christian
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-[size:200%] animate-gradient">
              Sederholm
            </span>
          </h1>

          <p className="text-2xl md:text-3xl font-medium text-emerald-100/90 mb-8 leading-snug tracking-tight">
            Älykästä arkkitehtuuria <br className="hidden md:block" />
            <span className="text-white/60">orkestroituna tulevaisuuden työkaluilla</span>
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed mx-auto md:mx-0 font-light">
            En koodaa manuaalisesti – ohjaan maailman edistyneimpiä tekoälyagentteja 
            rakentamaan kestäviä ratkaisuja. Yhdistän Datanomi-taustan IT-osaamisen 
            ja modernin AI-orkestroinnin.
          </p>

          {/* Contact Actions */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-full text-gray-300 transition-all backdrop-blur-sm"
            >
              <Mail size={18} className="text-emerald-400" />
              <span className="text-sm font-medium">{contact.email}</span>
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-full text-gray-300 transition-all backdrop-blur-sm"
            >
              <Phone size={18} className="text-emerald-400" />
              <span className="text-sm font-medium">{contact.phone}</span>
            </a>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <div className="flex gap-3 justify-center">
              {[
                { href: contact.github, icon: Github, label: 'GitHub' },
                { href: contact.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: contact.website, icon: ExternalLink, label: 'Website' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-xl text-gray-400 hover:text-white transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="/cv_harley_2026.pdf"
                download
                className="group flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.5)] w-full sm:w-auto whitespace-nowrap"
              >
                <Download size={20} className="group-hover:-translate-y-0.5 transition-transform" />
                Lataa CV
              </a>
              <a
                href="/saatekirje_harley_2026.pdf"
                download
                className="group flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium rounded-xl transition-all w-full sm:w-auto whitespace-nowrap"
              >
                <Download size={20} className="text-gray-400 group-hover:text-white transition-colors group-hover:-translate-y-0.5 transition-transform" />
                Lataa Saatekirje
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
