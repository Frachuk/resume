export interface Social {
  name: string;
  url: string;
  icon: 'linkedin' | 'github';
}

export interface Address {
  city: string;
  state: string;
  country: string;
}

export interface Main {
  name: string;
  occupation: string;
  email: string;
  phone: string;
  address: Address;
  social: Social[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  graduated: string;
}

export interface Work {
  id: string;
  company: string;
  title: string;
  years: string;
}

export interface Project {
  id: string;
  partner: string;
  role: string;
  name: string;
  years: string;
  techStack: string[];
  webPage?: string;
  featured?: boolean;
}

export interface Metric {
  id: string;
  value: string;
}

export interface SkillCategory {
  id: string;
  items: string[];
}

export interface ResumeData {
  main: Main;
  metrics: Metric[];
  skills: SkillCategory[];
  education: Education[];
  work: Work[];
  projects: Project[];
}
