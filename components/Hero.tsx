import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    window.print();
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github': return <Github />;
      case 'Linkedin': return <Linkedin />;
      case 'Mail': return <Mail />;
      default: return <Mail />;
    }
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
              Senior Software Developer
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-200">Basweshwar</span>
              <br />
              <span className="text-slate-400 text-3xl md:text-5xl mt-2 block">Building Digital Excellence.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Expert in React Native, .NET, and AI Integrations. I build scalable cross-platform applications and intelligent automation systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-darker bg-primary hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20"
              >
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#"
                onClick={handlePrint}
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-base font-medium rounded-lg text-slate-300 bg-slate-800/50 hover:bg-slate-800 transition-all hover:border-slate-600"
              >
                Save as PDF <Download className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center md:justify-start gap-6">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.platform}
                  href={link.url} 
                  target={link.platform === 'Email' ? '_self' : '_blank'}
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"
                  aria-label={`${link.platform} Profile`}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Abstract Profile Placeholder using CSS since no image provided */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute inset-4 bg-slate-800 rounded-full flex items-center justify-center border-4 border-slate-700 overflow-hidden">
                 <span className="text-6xl font-bold text-slate-600 select-none">BG</span>
              </div>
              
              {/* Floating Tech Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute top-0 right-0 bg-card border border-slate-700 px-4 py-2 rounded-lg shadow-xl"
              >
                <span className="text-primary font-bold">React Native</span>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                className="absolute bottom-10 left-0 bg-card border border-slate-700 px-4 py-2 rounded-lg shadow-xl"
              >
                <span className="text-blue-400 font-bold">.NET Core</span>
              </motion.div>
              <motion.div 
                animate={{ x: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 6, delay: 0.5 }}
                className="absolute bottom-10 right-10 bg-card border border-slate-700 px-4 py-2 rounded-lg shadow-xl"
              >
                <span className="text-purple-400 font-bold">AI Agents</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;