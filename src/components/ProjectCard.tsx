'use client';

import { motion } from 'framer-motion';
import { Lock, Globe, Cpu, Database, Rocket } from 'lucide-react';
import type { Project } from '@/data/projects';

const categoryIcons = {
  ai: Cpu,
  security: Lock,
  web: Globe,
  data: Database,
  saas: Rocket,
};

const categoryColors = {
  ai: 'from-purple-500 to-pink-500',
  security: 'from-red-500 to-orange-500',
  web: 'from-emerald-500 to-cyan-500',
  data: 'from-blue-500 to-indigo-500',
  saas: 'from-yellow-500 to-orange-500',
};

const categoryLabels = {
  ai: 'TEKOÄLY',
  security: 'TIETOTURVA',
  web: 'VERKKO',
  data: 'DATA',
  saas: 'SAAS',
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = categoryIcons[project.category];
  const gradient = categoryColors[project.category];
  const label = categoryLabels[project.category];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
        project.isFlagship 
          ? 'border-yellow-500/50 hover:border-yellow-400' 
          : 'border-white/10 hover:border-white/20'
      }`}
    >
      {project.isFlagship && (
        <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-500 to-orange-500 text-black">
          KÄRKIHANKE
        </div>
      )}

      <div className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${gradient} text-white`}>
        {label}
        {project.isPrivate && ' • Yksityinen'}
      </div>

      <div className="flex items-start gap-4 mt-3 mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} opacity-80`}>
          <Icon size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-gray-400">{project.tagline}</p>
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="mb-4">
        <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Saavutukset</h4>
        <ul className="space-y-1">
          {project.achievements.slice(0, 3).map((achievement, i) => (
            <li key={i} className="text-sm text-emerald-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs bg-white/5 text-gray-400 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-yellow-400 hover:text-yellow-300 transition-colors font-medium"
          >
            <Globe size={14} />
            Katso live
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.article>
  );
}
