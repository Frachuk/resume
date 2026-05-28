import { useTranslation } from 'react-i18next';
import { resume } from '@/data/resume';
import { Section } from '@/components/Section';

export function About() {
  const { t } = useTranslation();
  const { profilePicture, name, email, phone, address } = resume.main;
  const pic = `${import.meta.env.BASE_URL}${profilePicture.replace(/^\//, '')}`;
  return (
    <Section id="about" title={t('about.title')}>
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        <img
          src={pic}
          alt={name}
          width={160}
          height={160}
          className="h-40 w-40 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="text-ink-muted">{t('about.bio')}</p>
          <h3 className="mt-6 font-display text-xl text-ink">{t('about.contact')}</h3>
          <ul className="mt-2 space-y-1 text-ink-muted">
            <li>{name}</li>
            <li>
              {address.state} — {address.city}
            </li>
            <li>{phone}</li>
            <li>
              <a className="hover:text-accent" href={`mailto:${email}`}>
                {email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
