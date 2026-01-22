'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Github, ExternalLink, Heart } from 'lucide-react';
import { contact } from '@/data/projects';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 items-center"
        >
          {/* Brändi */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Harley Sederholm</h3>
            <p className="text-gray-400 text-sm">
              AI Builder & Technical Orchestrator
            </p>
          </div>

          {/* Yhteystiedot */}
          <div className="flex flex-col gap-2">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={16} />
              <span className="text-sm">{contact.email}</span>
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm">{contact.phone}</span>
            </a>
          </div>

          {/* Sosiaalinen */}
          <div className="flex gap-4 md:justify-end">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Github size={20} className="text-gray-400" />
            </a>
            <a
              href={contact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ExternalLink size={20} className="text-gray-400" />
            </a>
          </div>
        </motion.div>

        {/* Tekijänoikeus */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            Harley Christian Sederholm · 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
