import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function DownloadResume() {
  const { t } = useTranslation();
  const label = t('common.downloadResume');
  return (
    <button
      type="button"
      onClick={() => window.print()}
      aria-label={label}
      title={label}
      className="rounded-control p-2 text-ink-muted hover:text-ink"
    >
      <Download size={18} />
    </button>
  );
}
