import { resume } from '@/data/resume';
import { SocialLinks } from '@/components/SocialLinks';

export function Footer() {
  return (
    <footer className="border-t border-border-default bg-surface-2">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-10 text-sm text-ink-muted">
        <SocialLinks social={resume.main.social} size={18} />
        <p>
          © {resume.main.name} · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
