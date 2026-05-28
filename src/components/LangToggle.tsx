import { useTranslation } from 'react-i18next';

const LANGS = ['en', 'es'] as const;

export function LangToggle() {
  const { i18n } = useTranslation();
  return (
    <div className="flex gap-1" role="group" aria-label="Language">
      {LANGS.map((lng) => (
        <button
          key={lng}
          type="button"
          onClick={() => i18n.changeLanguage(lng)}
          aria-pressed={i18n.resolvedLanguage === lng}
          className={`rounded-chip px-2 py-1 text-xs font-semibold uppercase ${
            i18n.resolvedLanguage === lng
              ? 'bg-accent text-surface'
              : 'text-ink-muted hover:text-ink'
          }`}
        >
          {lng}
        </button>
      ))}
    </div>
  );
}
