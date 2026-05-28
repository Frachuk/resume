import type { ReactNode } from 'react';

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-card border border-border-default bg-surface p-5 shadow-[var(--shadow-elevated)] ${className}`}
    >
      {children}
    </div>
  );
}
