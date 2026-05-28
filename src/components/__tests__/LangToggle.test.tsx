import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@/i18n';
import { LangToggle } from '../LangToggle';

test('clicking ES marks it pressed', async () => {
  render(<LangToggle />);
  await userEvent.click(screen.getByRole('button', { name: 'es' }));
  expect(screen.getByRole('button', { name: 'es' })).toHaveAttribute('aria-pressed', 'true');
});
