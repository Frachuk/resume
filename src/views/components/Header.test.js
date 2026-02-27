import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('renders without crashing', () => {
  render(<Header />);
});

test('renders navigation links with correct anchors', () => {
  render(<Header />);

  const homeLink = screen.getByText('Home');
  const aboutLink = screen.getByText('About');
  const resumeLink = screen.getByText('Resume');

  expect(homeLink).toHaveAttribute('href', '#home');
  expect(aboutLink).toHaveAttribute('href', '#about');
  expect(resumeLink).toHaveAttribute('href', '#resume');
});
