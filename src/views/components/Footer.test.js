import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

test('renders without crashing', () => {
  render(<Footer />);
});

test('renders copyright with current year', () => {
  render(<Footer />);

  const year = new Date().getFullYear().toString();
  expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  expect(screen.getByText(/Mischuk Franco/)).toBeInTheDocument();
});
