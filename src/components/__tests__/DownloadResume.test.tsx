import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@/i18n';
import { DownloadResume } from '../DownloadResume';

const originalPrint = window.print;
afterEach(() => {
  window.print = originalPrint;
});

test('clicking the button triggers window.print', async () => {
  const printSpy = vi.fn();
  window.print = printSpy;
  render(<DownloadResume />);
  await userEvent.click(screen.getByRole('button', { name: /download/i }));
  expect(printSpy).toHaveBeenCalledTimes(1);
});
