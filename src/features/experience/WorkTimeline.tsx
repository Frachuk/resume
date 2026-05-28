import { useTranslation } from 'react-i18next';
import { resume } from '@/data/resume';
import { Section } from '@/components/Section';

export function WorkTimeline() {
  const { t, i18n } = useTranslation();
  return (
    <Section id="experience" title={t('experience.title')}>
      <ol className="relative border-l border-border-default pl-6">
        {resume.work.map((w) => {
          const highlightsKey = `experience.items.${w.id}.highlights`;
          const highlights = i18n.exists(highlightsKey)
            ? (t(highlightsKey, { returnObjects: true }) as string[])
            : [];
          return (
            <li key={w.id} className="mb-8 last:mb-0">
              <span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
              <h3 className="font-display text-xl text-ink">{w.company}</h3>
              <p className="text-sm font-medium text-accent">
                {w.title} · {w.years}
              </p>
              <p className="mt-2 text-ink-muted">{t(`experience.items.${w.id}.description`)}</p>
              {highlights.length > 0 && (
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-ink-muted marker:text-accent">
                  {highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
