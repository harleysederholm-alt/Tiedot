'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-20 px-6">
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
            Projektit
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            AI-orkestroimalla rakennettuja järjestelmiä ja SaaS-ratkaisuja.
          </p>
        </motion.div>

        {/* Projektiruudukko */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
