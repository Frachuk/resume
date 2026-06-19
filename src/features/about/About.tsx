import { useTranslation } from 'react-i18next';
import { resume } from '@/data/resume';
import { Section } from '@/components/Section';

export function About() {
  const { t } = useTranslation();
  const { name, email, phone, address } = resume.main;
  return (
    <Section id="about" title={t('about.title')}>
      <div className="max-w-3xl">
        <p className="text-ink-muted">{t('about.bio')}</p>
        <h3 className="mt-6 font-display text-xl text-ink">{t('about.contact')}</h3>
        <ul className="mt-2 space-y-1 text-ink-muted">
          <li>{name}</li>
          <li>
            {address.city}, {address.state}, {address.country}
          </li>
          <li>{phone}</li>
          <li>
            <a className="hover:text-accent" href={`mailto:${email}`}>
              {email}
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
}
