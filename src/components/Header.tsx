import { useTranslation } from 'react-i18next';
import { LangToggle } from './LangToggle';
import { ThemeToggle } from './ThemeToggle';
import { DownloadResume } from './DownloadResume';

const SECTIONS = ['home', 'about', 'skills', 'experience', 'education', 'projects'] as const;

export function Header() {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-10 border-b border-border-default bg-surface/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <ul className="hidden gap-5 text-sm font-medium text-ink-muted sm:flex">
          {SECTIONS.map((s) => (
            <li key={s}>
              <a href={`#${s}`} className="hover:text-ink">
                {t(`nav.${s}`)}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <DownloadResume />
          <LangToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
