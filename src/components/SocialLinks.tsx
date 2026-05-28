import type { Social } from '@/types/resume';
import { BrandIcon } from './BrandIcon';

export function SocialLinks({ social, size = 20 }: { social: Social[]; size?: number }) {
  return (
    <ul className="flex gap-4">
      {social.map((s) => (
        <li key={s.name}>
          <a
            href={s.url}
            target="_blank"
            rel="noreferrer"
            aria-label={s.name}
            className="text-ink-muted transition-colors hover:text-accent"
          >
            <BrandIcon name={s.icon} size={size} />
          </a>
        </li>
      ))}
    </ul>
  );
}
