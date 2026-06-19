import { render, screen } from '@testing-library/react';
import '@/i18n';
import { App } from '../App';
import { ThemeProvider } from '@/theme/ThemeProvider';

test('renders the name and all section anchors', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  );
  // The name appears in both the on-screen Hero and the print ResumeDocument.
  expect(screen.getAllByRole('heading', { level: 1, name: /Franco Mischuk/ })).toHaveLength(2);
  ['home', 'about', 'skills', 'experience', 'education', 'projects'].forEach((id) =>
    expect(document.getElementById(id)).toBeInTheDocument(),
  );
});

test('renders the print résumé document alongside the screen layout', () => {
  const { container } = render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  );
  expect(container.querySelector('.resume-print')).toBeInTheDocument();
});
