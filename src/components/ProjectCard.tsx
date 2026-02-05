'use client';

import { motion } from 'framer-motion';
import { Lock, Globe, Cpu, Database, Rocket, GitCommit, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';

const categoryIcons = {
  ai: Cpu,
  security: Lock,
  web: Globe,
  data: Database,
  saas: Rocket,
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useLanguage();
  const Icon = categoryIcons[project.category];

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group flex flex-col bg-white border border-slate-200 hover:border-slate-400 transition-colors h-full"
    >
      {/* Header Section */}
      <div className="p-6 border-b border-slate-100 flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-50 border border-slate-100 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
            <Icon size={20} />
          </div>
          <div>
            <h3 className="font-outfit text-lg font-bold text-slate-900 leading-tight">
              {project.name}
            </h3>
            <p className="text-xs font-mono text-slate-500 mt-0.5 tracking-tight uppercase">
              ID: {project.id.toUpperCase()}
            </p>
          </div>
        </div>
        
        {project.isFlagship && (
          <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider border border-emerald-100">
            {t.projects.strategic}
          </span>
        )}
      </div>

      {/* Body Section */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-6 flex-grow">
          <p className="font-medium text-slate-900 mb-2 leading-snug">
            {project.tagline}
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technical Metrics / Stack */}
        <div className="pt-6 border-t border-slate-100 mt-auto">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-slate-500 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <span key={tech} className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && <span>+{(project.techStack.length - 4)} more</span>}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-4">

              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors group/link"
                >
                  <ArrowUpRight size={16} />
                  <span className="group-hover/link:underline decoration-emerald-500 underline-offset-2">{t.projects.deploy}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
