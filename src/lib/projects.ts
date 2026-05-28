import type { Project } from '@/types/resume';

export interface ProjectFilter {
  company: string | null;
  role: string | null;
}

export const deriveCompanies = (projects: Project[]): string[] =>
  [...new Set(projects.map((p) => p.partner))].sort();

export const deriveRoles = (projects: Project[]): string[] =>
  [...new Set(projects.map((p) => p.role))].sort();

export const filterProjects = (projects: Project[], f: ProjectFilter): Project[] =>
  projects.filter((p) => (!f.company || p.partner === f.company) && (!f.role || p.role === f.role));
