import { render, screen, within } from '@testing-library/react';
import '@/i18n';
import { WorkTimeline } from '../WorkTimeline';

test('renders highlight bullets for the Thanx role only', () => {
  render(<WorkTimeline />);

  // The Thanx entry has 7 curated highlight bullets.
  const thanx = screen.getByRole('heading', { name: 'Thanx' }).closest('li');
  expect(thanx).not.toBeNull();
  expect(within(thanx as HTMLElement).getAllByRole('listitem')).toHaveLength(7);

  // A role without highlights (Boldt) renders none.
  const boldt = screen.getByRole('heading', { name: 'Boldt S.A' }).closest('li');
  expect(within(boldt as HTMLElement).queryAllByRole('listitem')).toHaveLength(0);
});
