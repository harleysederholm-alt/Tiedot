'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-white border border-slate-200 shadow-lg rounded-full font-outfit font-bold text-slate-900 hover:border-emerald-500 hover:text-emerald-700 transition-colors"
      aria-label="Toggle Language"
    >
      {language === 'en' ? 'FI' : 'EN'}
    </motion.button>
  );
}
