import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/types/resume';
import { Card } from '@/components/Card';
import { Chip } from '@/components/Chip';

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation();
  return (
    <Card className="flex flex-col">
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="font-display text-lg text-ink">{project.name}</h3>
        <span className="shrink-0 text-xs text-ink-muted">{project.years}</span>
      </div>
      <p className="text-sm font-medium text-accent">
        {project.partner} · {project.role}
      </p>
      <p className="mt-2 flex-1 text-sm text-ink-muted">
        {t(`projects.items.${project.id}.description`)}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <Chip key={tech} label={tech} />
        ))}
      </div>
      {project.webPage && (
        <a
          href={project.webPage}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-sm text-accent hover:underline"
        >
          <ExternalLink size={14} /> {t('projects.visit')}
        </a>
      )}
    </Card>
  );
}
