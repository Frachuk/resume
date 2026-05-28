import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@/i18n';
import { ProjectGrid } from '../ProjectGrid';
import { resume } from '@/data/resume';

test('renders all projects, then filters to one company', async () => {
  render(<ProjectGrid />);
  const total = resume.projects.length;
  expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(total);

  await userEvent.click(screen.getByRole('button', { name: 'Thanx' }));
  const thanxCount = resume.projects.filter((p) => p.partner === 'Thanx').length;
  expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(thanxCount);
});
