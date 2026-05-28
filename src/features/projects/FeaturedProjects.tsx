import { resume } from '@/data/resume';
import { ProjectCard } from './ProjectCard';

export function FeaturedProjects() {
  const featured = resume.projects.filter((p) => p.featured);
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {featured.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
