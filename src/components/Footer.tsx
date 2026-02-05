'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { contact } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 bg-white border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 gap-12 items-start">
        <div className="md:col-span-2">
          <h3 className="font-outfit text-xl font-bold text-slate-900 mb-2">Harley Christian Sederholm</h3>
          <p className="text-slate-500 text-sm font-medium max-w-md">
            {t.footer.role}
          </p>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">{t.footer.connect}</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-700 transition-colors flex items-center gap-2 group">
                LinkedIn 
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2 group">
                GitHub
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">{t.footer.contact}</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`mailto:${contact.email}`} className="text-slate-600 hover:text-emerald-700 transition-colors">
                {contact.email}
              </a>
            </li>
            <li>
              <span className="text-slate-500">Turku, Finland</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
        <p>&copy; 2026 Harley Christian Sederholm. {t.footer.rights}</p>
        <p className="mt-2 md:mt-0 font-mono">{t.footer.design}</p>
      </div>
    </footer>
  );
}
