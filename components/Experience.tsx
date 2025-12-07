import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-800"></div>

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } gap-8 items-center md:items-start`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-slate-900 z-10 mt-6 md:mt-0"></div>

                <div className="flex-1 hidden md:block"></div>

                <div className="flex-1 w-full pl-8 md:pl-0">
                  <div className={`bg-card p-6 rounded-xl border border-slate-700 hover:border-primary/50 transition-colors shadow-lg group ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                        <p className="text-lg text-slate-300 font-medium">{exp.company}</p>
                      </div>
                      <div className="hidden sm:block p-2 bg-slate-800 rounded-lg text-primary">
                        <Briefcase size={20} />
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
