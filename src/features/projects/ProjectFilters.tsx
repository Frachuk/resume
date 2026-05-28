import { useTranslation } from 'react-i18next';
import { Chip } from '@/components/Chip';

export function ProjectFilters({
  companies,
  active,
  onSelect,
}: {
  companies: string[];
  active: string | null;
  onSelect: (c: string | null) => void;
}) {
  const { t } = useTranslation();
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      <Chip
        label={t('projects.filterAll')}
        active={active === null}
        onClick={() => onSelect(null)}
      />
      {companies.map((c) => (
        <Chip key={c} label={c} active={active === c} onClick={() => onSelect(c)} />
      ))}
    </div>
  );
}
