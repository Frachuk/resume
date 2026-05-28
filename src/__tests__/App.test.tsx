import { render, screen } from '@testing-library/react';
import '@/i18n';
import { App } from '../App';
import { ThemeProvider } from '@/theme/ThemeProvider';

test('renders name and all section anchors', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  );
  expect(screen.getByRole('heading', { level: 1, name: /Franco Mischuk/ })).toBeInTheDocument();
  ['home', 'about', 'skills', 'experience', 'education', 'projects'].forEach((id) =>
    expect(document.getElementById(id)).toBeInTheDocument(),
  );
});
