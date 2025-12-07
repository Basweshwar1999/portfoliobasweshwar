import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, X, ArrowRight, Code2, Github, Globe, Smartphone, LayoutDashboard } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'github': return <Github size={18} />;
      case 'web': return <Globe size={18} />;
      case 'android': 
      case 'ios': return <Smartphone size={18} />;
      case 'admin': return <LayoutDashboard size={18} />;
      default: return <ExternalLink size={18} />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of mobile apps, web platforms, and AI solutions I've architected and delivered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/20 group flex flex-col cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 bg-slate-800 relative overflow-hidden group-hover:bg-slate-750 transition-colors">
                 {/* Abstract geometric pattern for placeholder since no images */}
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-slate-900 to-transparent">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full border border-primary/20 backdrop-blur-sm">
                      {project.category}
                    </span>
                 </div>
                 <div className="absolute top-4 right-4 p-2 bg-slate-900/50 rounded-full text-slate-400 group-hover:text-white transition-colors">
                    <Layers size={20} />
                 </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 flex-1 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs text-slate-500 px-2 py-1">+ {project.techStack.length - 4}</span>
                    )}
                  </div>
                </div>

                <div
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-emerald-300 transition-colors mt-auto group/btn w-fit"
                >
                  View Details <ArrowRight size={14} className="ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-darker/90 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={selectedProject.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-card rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="relative h-32 md:h-40 bg-slate-800 overflow-hidden shrink-0">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary to-transparent"></div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors z-10"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-4 left-6 md:left-8 right-16">
                   <div className="flex flex-wrap gap-2 mb-2">
                     <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-black/40 rounded-full border border-primary/20 backdrop-blur-sm">
                        {selectedProject.category}
                     </span>
                   </div>
                   <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">{selectedProject.title}</h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="space-y-8">
                  
                  {/* Links Section */}
                  {selectedProject.links && selectedProject.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 pb-6 border-b border-slate-700/50">
                      {selectedProject.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-primary text-darker font-medium rounded-lg hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-900/20 text-sm"
                        >
                          {getLinkIcon(link.type)}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}

                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Layers size={16} /> Overview
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-lg">
                      {selectedProject.description}
                    </p>
                  </div>

                  {selectedProject.points && selectedProject.points.length > 0 && (
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <ExternalLink size={16} /> Key Features & Highlights
                      </h3>
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {selectedProject.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                            <span className="text-slate-300 text-sm leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Code2 size={16} /> Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-lg border border-slate-700 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;