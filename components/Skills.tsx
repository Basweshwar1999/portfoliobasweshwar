import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Code2, Database, Cpu, Wrench } from 'lucide-react';
import { SKILLS_DATA } from '../constants';

const categoryIcons: Record<string, any> = {
  "Frontend & Mobile": Code2,
  "Backend & API": Database, // Using Database icon for backend general
  "AI & Automation": Cpu,
  "Database & Tools": Wrench
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS_DATA.map((category, index) => {
            const Icon = categoryIcons[category.category] || Code2;
            
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-slate-700 relative overflow-hidden group hover:border-slate-600 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-slate-800 rounded-lg text-primary group-hover:bg-primary group-hover:text-darker transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 size={16} className="text-emerald-500/50 flex-shrink-0" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
                
                {/* Decorative background blur */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
