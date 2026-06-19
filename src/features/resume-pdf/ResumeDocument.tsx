import { useTranslation } from 'react-i18next';
import { resume } from '@/data/resume';

/** First sentence only — keeps featured-project blurbs to roughly one line in the PDF. */
function firstSentence(text: string): string {
  const first = text.split('. ')[0];
  return first.endsWith('.') ? first : `${first}.`;
}

const SECTION_HEADING =
  'border-b border-[#d9c9b6] pb-1 font-display text-sm font-semibold uppercase tracking-widest text-[#6b8a7a]';

export function ResumeDocument() {
  const { t } = useTranslation();
  const { name, email, phone, address, social } = resume.main;
  const featured = resume.projects.filter((p) => p.featured);

  return (
    <div className="resume-print hidden bg-white px-12 py-10 font-sans text-[13px] leading-snug text-[#2a241f] print:block">
      <header>
        <h1 className="font-display text-3xl font-semibold text-[#2a241f]">{name}</h1>
        <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-[#a8533c]">
          {t('hero.role')}
        </p>
        <p className="mt-2 text-[12px] text-[#5b5048]">
          <a href={`mailto:${email}`}>{email}</a>
          {' · '}
          {phone}
          {' · '}
          {address.city}, {address.state}
          {social.map((s) => (
            <span key={s.name}>
              {' · '}
              <a href={s.url}>{s.url.replace(/^https?:\/\//, '')}</a>
            </span>
          ))}
        </p>
      </header>

      <section className="mt-5">
        <p>{t('resumePdf.summary')}</p>
      </section>

      <section className="mt-5">
        <h2 className={SECTION_HEADING}>{t('skills.title')}</h2>
        <ul className="mt-2 space-y-0.5">
          {resume.skills.map((cat) => (
            <li key={cat.id}>
              <span className="font-semibold">{t(`skills.categories.${cat.id}`)}:</span>{' '}
              {cat.items.join(', ')}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-5">
        <h2 className={SECTION_HEADING}>{t('experience.title')}</h2>
        <div className="mt-2 space-y-3">
          {resume.work.map((job) => {
            let highlights: string[] = [];
            if (job.id === 'thanx-toe') {
              const raw = t('experience.items.thanx-toe.highlights', { returnObjects: true });
              highlights = Array.isArray(raw) ? (raw as string[]).slice(0, 5) : [];
            }
            return (
              <div key={job.id} className="break-inside-avoid">
                <div className="flex items-baseline justify-between">
                  <span className="font-semibold text-[#2a241f]">
                    {job.title} — {job.company}
                  </span>
                  <span className="text-[11px] text-[#5b5048]">{job.years}</span>
                </div>
                {highlights.length > 0 ? (
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-[#5b5048]">
                    {highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-1 text-[#5b5048]">
                    {t(`experience.items.${job.id}.description`)}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-5">
        <h2 className={SECTION_HEADING}>{t('projects.title')}</h2>
        <div className="mt-2 space-y-2">
          {featured.map((p) => (
            <div key={p.id} className="break-inside-avoid">
              <div className="flex items-baseline justify-between">
                <span className="font-semibold text-[#2a241f]">
                  {p.name} — {p.partner}
                </span>
                <span className="text-[11px] text-[#5b5048]">{p.years}</span>
              </div>
              <p className="mt-0.5 text-[#5b5048]">
                {firstSentence(t(`projects.items.${p.id}.description`))}
              </p>
              <p className="mt-0.5 text-[11px] text-[#8a7a68]">{p.techStack.join(' · ')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <h2 className={SECTION_HEADING}>{t('education.title')}</h2>
        <ul className="mt-2 space-y-1">
          {resume.education.map((e) => (
            <li key={e.id} className="flex items-baseline justify-between">
              <span>
                <span className="font-semibold text-[#2a241f]">{e.degree}</span> — {e.school}
              </span>
              <span className="text-[11px] text-[#5b5048]">{e.graduated}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
