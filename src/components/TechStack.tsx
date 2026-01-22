'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/projects';
import { Brain, Code, Zap, Monitor } from 'lucide-react';

const skillCategories = [
  { key: 'aiOrchestration', label: 'Tekoäly ja orkestrointi', icon: Zap, color: 'from-yellow-500 to-orange-500', badge: 'YDIN' },
  { key: 'aiModels', label: 'Kielimallit (2026)', icon: Brain, color: 'from-purple-500 to-pink-500', badge: null },
  { key: 'development', label: 'Ohjelmistokehitys', icon: Code, color: 'from-emerald-500 to-cyan-500', badge: null },
  { key: 'itFoundation', label: 'IT-perusosaaminen', icon: Monitor, color: 'from-blue-400 to-cyan-400', badge: 'DATANOMI' },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Tekninen osaaminen
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Teknologiat ja työkalut autonomisten järjestelmien rakentamiseen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
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
                  category.badge === 'YDIN' 
                    ? 'border-yellow-500/50' 
                    : category.badge === 'DATANOMI'
                    ? 'border-blue-400/50'
                    : 'border-white/10'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.label}</h3>
                  {category.badge && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      category.badge === 'YDIN' 
                        ? 'bg-yellow-500/20 text-yellow-400' 
                        : 'bg-blue-400/20 text-blue-400'
                    }`}>
                      {category.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-white/5 text-gray-300 rounded-lg"
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
