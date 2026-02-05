'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/projects';
import { Brain, Code, Zap, Shield, Layers, Database } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function TechStack() {
  const { t } = useLanguage();

  const capabilities = [
    { 
      id: 'CAP-01',
      key: 'aiOrchestration', 
      label: t.techStack.caps.aiOrchestration.label, 
      description: t.techStack.caps.aiOrchestration.description,
      icon: Zap, 
      status: 'Active' 
    },
    { 
      id: 'CAP-02',
      key: 'aiModels', 
      label: t.techStack.caps.aiModels.label, 
      description: t.techStack.caps.aiModels.description,
      icon: Brain, 
      status: 'Deployed' 
    },
    { 
      id: 'CAP-03',
      key: 'development', 
      label: t.techStack.caps.development.label, 
      description: t.techStack.caps.development.description,
      icon: Layers, 
      status: 'Production' 
    },
    { 
      id: 'CAP-04',
      key: 'securityData', 
      label: t.techStack.caps.securityData.label, 
      description: t.techStack.caps.securityData.description,
      icon: Shield, 
      status: 'Audited' 
    },
  ];

  return (
    <section id="capabilities" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-1">
            <h2 className="font-outfit text-4xl font-bold text-slate-900 mb-4 whitespace-pre-line">
              {t.techStack.title.replace(' ', '\n')}
            </h2>
            <div className="h-1 w-20 bg-emerald-600 mb-6" />
            <p className="text-slate-600 leading-relaxed">
              {t.techStack.description}
            </p>
          </div>
          
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-4">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              const capSkills = skills[cap.key as keyof typeof skills];

              return (
                <motion.div
                  key={cap.key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 border border-slate-200 hover:border-slate-300 transition-colors group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-slate-50 rounded-none border border-slate-100 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors">
                      <Icon size={24} className="text-slate-700 group-hover:text-emerald-700 transition-colors" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 tracking-widest">{cap.id}</span>
                  </div>
                  
                  <h3 className="font-outfit text-lg font-bold text-slate-900 mb-2">{cap.label}</h3>
                  <p className="text-sm text-slate-500 mb-6 min-h-[40px]">{cap.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {capSkills && capSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-[11px] font-mono text-slate-600 bg-slate-50 border border-slate-100 uppercase tracking-tight"
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
      </div>
    </section>
  );
}
