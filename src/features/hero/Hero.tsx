import { useTranslation } from 'react-i18next';
import { resume } from '@/data/resume';
import { SocialLinks } from '@/components/SocialLinks';

export function Hero() {
  const { t } = useTranslation();
  const { name, address, social } = resume.main;
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-6 py-20"
    >
      <p className="font-sans text-sm font-semibold uppercase tracking-widest text-sage">
        {t('hero.role')}
      </p>
      <h1 className="mt-3 font-display text-5xl font-semibold text-ink sm:text-6xl">{name}</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-muted">
        {t('hero.basedIn', { city: address.city })}. {t('hero.summary')}
      </p>
      <div className="mt-6">
        <SocialLinks social={social} />
      </div>
    </section>
  );
}
