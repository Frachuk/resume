import { render, screen } from '@testing-library/react';
import '@/i18n';
import { ResumeDocument } from '../ResumeDocument';
import { resume } from '@/data/resume';

test('renders the name and core section headings', () => {
  render(<ResumeDocument />);
  expect(screen.getByRole('heading', { level: 1, name: /Franco Mischuk/ })).toBeInTheDocument();
  ['Skills', 'Experience', 'Projects', 'Education'].forEach((heading) =>
    expect(screen.getByRole('heading', { level: 2, name: heading })).toBeInTheDocument(),
  );
});

test('renders all five roles by title and company', () => {
  render(<ResumeDocument />);
  resume.work.forEach((job) =>
    expect(screen.getByText(`${job.title} — ${job.company}`)).toBeInTheDocument(),
  );
});

test('includes the strongest Thanx achievement highlights', () => {
  const { container } = render(<ResumeDocument />);
  // "84%" appears in both the summary paragraph and the highlights list item, so use getAllByText
  expect(screen.getAllByText(/84%/).length).toBeGreaterThanOrEqual(1);
  // Confirm specifically that a highlight <li> containing 84% is present
  const liItems = container.querySelectorAll('li');
  const has84 = Array.from(liItems).some((li) => /84%/.test(li.textContent ?? ''));
  expect(has84).toBe(true);
});

test('includes only featured projects', () => {
  render(<ResumeDocument />);
  expect(screen.getByText(/thanx-appops CLI Tools/)).toBeInTheDocument();
  expect(screen.queryByText(/Universal Search/)).not.toBeInTheDocument();
  expect(screen.queryByText(/Gifts/)).not.toBeInTheDocument();
});
