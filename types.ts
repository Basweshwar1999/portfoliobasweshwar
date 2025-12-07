export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'android' | 'ios' | 'web' | 'github' | 'admin';
}

export interface Project {
  id: string;
  title: string;
  category: 'Mobile' | 'Web' | 'AI' | 'Backend';
  description: string;
  techStack: string[];
  points?: string[];
  links?: ProjectLink[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}