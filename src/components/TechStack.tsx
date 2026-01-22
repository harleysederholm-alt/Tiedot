'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/projects';
import { Brain, Code, Layout, Server, Cloud, Zap, Monitor } from 'lucide-react';

const skillCategories = [
  { key: 'aiModels', label: 'AI & Kielimallit', icon: Brain, color: 'from-purple-500 to-pink-500' },
  { key: 'orchestration', label: 'AI-Orkestrointi', icon: Zap, color: 'from-yellow-500 to-orange-500' },
  { key: 'itInfra', label: 'IT-Infrastruktuuri', icon: Monitor, color: 'from-blue-400 to-cyan-400' },
  { key: 'languages', label: 'Ohjelmointikielet', icon: Code, color: 'from-orange-500 to-red-500' },
  { key: 'frontend', label: 'Frontend', icon: Layout, color: 'from-emerald-500 to-cyan-500' },
  { key: 'backend', label: 'Backend', icon: Server, color: 'from-blue-500 to-indigo-500' },
  { key: 'infra', label: 'Infra & DevOps', icon: Cloud, color: 'from-gray-400 to-gray-600' },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Osion otsikko */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Tekninen Osaaminen
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Teknologiat ja työkalut, joita käytän päivittäin autonomisten järjestelmien rakentamiseen.
          </p>
        </motion.div>

        {/* Osaamisruudukko */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const categorySkills = skills[category.key as keyof typeof skills];

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border ${
                  category.key === 'orchestration' 
                    ? 'border-yellow-500/50 ring-1 ring-yellow-500/20' 
                    : category.key === 'itInfra'
                    ? 'border-blue-400/50 ring-1 ring-blue-400/20'
                    : 'border-white/10'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.label}</h3>
                  {category.key === 'orchestration' && (
                    <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded-full">YDIN</span>
                  )}
                  {category.key === 'itInfra' && (
                    <span className="text-xs px-2 py-0.5 bg-blue-400/20 text-blue-400 rounded-full">DATANOMI</span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-white/5 text-gray-300 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
