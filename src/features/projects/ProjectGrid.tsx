import { useMemo, useState } from 'react';
import { resume } from '@/data/resume';
import { deriveCompanies, filterProjects } from '@/lib/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectFilters } from './ProjectFilters';

export function ProjectGrid() {
  const [company, setCompany] = useState<string | null>(null);
  const companies = useMemo(() => deriveCompanies(resume.projects), []);
  const shown = useMemo(() => filterProjects(resume.projects, { company, role: null }), [company]);
  return (
    <div>
      <ProjectFilters companies={companies} active={company} onSelect={setCompany} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
