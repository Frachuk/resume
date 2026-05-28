import { render, screen } from '@testing-library/react';
import '@/i18n';
import { Skills } from '../Skills';
import { MetricsStrip } from '@/features/metrics/MetricsStrip';
import { resume } from '@/data/resume';

test('metrics strip renders every metric value', () => {
  render(<MetricsStrip />);
  resume.metrics.forEach((m) => expect(screen.getByText(m.value)).toBeInTheDocument());
});

test('skills section renders a heading per category and all items', () => {
  render(<Skills />);
  expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(resume.skills.length);
  resume.skills[0].items.forEach((item) => expect(screen.getByText(item)).toBeInTheDocument());
});
