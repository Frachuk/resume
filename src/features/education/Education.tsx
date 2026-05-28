import { useTranslation } from 'react-i18next';
import { resume } from '@/data/resume';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';

export function Education() {
  const { t } = useTranslation();
  return (
    <Section id="education" title={t('education.title')}>
      <div className="grid gap-5 sm:grid-cols-2">
        {resume.education.map((e) => (
          <Card key={e.id}>
            <h3 className="font-display text-lg text-ink">{e.school}</h3>
            <p className="text-sm font-medium text-accent">
              {e.degree} · {e.graduated}
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              {t(`education.items.${e.id}.description`)}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
