'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, Github, Linkedin, Download } from 'lucide-react';
import { contact } from '@/data/projects';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-30" />
            <Image
              src="/profile.jpg"
              alt="Harley Christian Sederholm"
              fill
              className="rounded-full object-cover border-4 border-white/10 relative z-10"
              priority
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Harley Christian
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Sederholm
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-6">
            AI-Arkitehti & Startup-Yrittäjä
          </p>

          <p className="text-gray-300 mb-8 max-w-lg">
            Rakennan autonomisia AI-järjestelmiä ja tuotteita, jotka ratkaisevat oikeita ongelmia.
            Datanomista (2013) AI-startup-perustajaksi – matka jatkuvaan oppimiseen.
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-300 transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm">{contact.email}</span>
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-300 transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm">{contact.phone}</span>
            </a>
          </div>

          {/* Social & CV Download */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
            >
              <Github size={24} className="text-gray-300" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
            >
              <Linkedin size={24} className="text-gray-300" />
            </a>
            <a
              href="/cv_harley_2026.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 rounded-full text-white font-medium transition-all"
            >
              <Download size={18} />
              Lataa CV (2026)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
