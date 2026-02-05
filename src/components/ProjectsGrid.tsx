'use client';

import { motion } from 'framer-motion';
import { projects, projectsEn } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { useLanguage } from '@/context/LanguageContext';

export default function ProjectsGrid() {
  const { t, language } = useLanguage();
  
  const currentProjects = language === 'en' ? projectsEn : projects;

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
           <div className="lg:col-span-1">
             <h2 className="font-outfit text-4xl font-bold text-slate-900 mb-4 whitespace-pre-line">
               {t.projects.title.replace(' ', '\n')}
             </h2>
             <div className="h-1 w-20 bg-slate-900 mb-6" />
             <p className="text-slate-600 leading-relaxed">
               {t.projects.description}
             </p>
           </div>
           
           <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {currentProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
