import { useTranslation } from 'react-i18next';
import { resume } from '@/data/resume';
import { Section } from '@/components/Section';
import { Chip } from '@/components/Chip';

export function Skills() {
  const { t } = useTranslation();
  return (
    <Section id="skills" title={t('skills.title')}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resume.skills.map((category) => (
          <div key={category.id}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-sage">
              {t(`skills.categories.${category.id}`)}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {category.items.map((item) => (
                <Chip key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
