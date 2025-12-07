import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github': return <Github size={20} />;
      case 'Linkedin': return <Linkedin size={20} />;
      case 'Mail': return <Mail size={20} />;
      default: return <Mail size={20} />;
    }
  };

  return (
    <footer id="contact" className="bg-darker pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-slate-400 mb-8 max-w-lg">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-darker font-bold rounded-lg hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-900/20"
            >
              Say Hello
            </a>
          </div>

          <div className="col-span-1">
             <h3 className="text-white font-bold mb-4">Contact Info</h3>
             <ul className="space-y-3 text-slate-400 mb-8">
               <li>{PERSONAL_INFO.location}</li>
               <li>{PERSONAL_INFO.email}</li>
               <li>{PERSONAL_INFO.phone}</li>
             </ul>

             <div className="flex gap-4">
               {SOCIAL_LINKS.map((link) => (
                 <a 
                   key={link.platform}
                   href={link.url} 
                   target={link.platform === 'Email' ? '_self' : '_blank'}
                   rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-darker transition-all transform hover:scale-110"
                   aria-label={link.platform}
                 >
                   {getIcon(link.icon)}
                 </a>
               ))}
             </div>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Basweshwar Gubge. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> using React, Tailwind & Gemini AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;