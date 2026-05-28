export function Chip({
  label,
  active = false,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  const base = 'rounded-chip px-3 py-1 text-xs font-medium transition-colors';
  const styled = active ? 'bg-accent text-surface' : 'bg-surface-2 text-ink-muted hover:text-ink';
  return onClick ? (
    <button type="button" onClick={onClick} className={`${base} ${styled}`}>
      {label}
    </button>
  ) : (
    <span className={`${base} ${styled}`}>{label}</span>
  );
}
