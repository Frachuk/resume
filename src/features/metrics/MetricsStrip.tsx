import { useTranslation } from 'react-i18next';
import { resume } from '@/data/resume';

export function MetricsStrip() {
  const { t } = useTranslation();
  return (
    <div className="border-y border-border-default bg-surface-2">
      <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4">
        {resume.metrics.map((m) => (
          <div key={m.id} className="text-center">
            <dt className="font-display text-4xl font-semibold text-accent">{m.value}</dt>
            <dd className="mt-1 text-sm text-ink-muted">{t(`metrics.items.${m.id}`)}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
