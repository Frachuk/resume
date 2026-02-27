import { render, screen } from '@testing-library/react';
import { About } from './About';

const mockData = {
  address: { city: 'Springfield', state: 'Illinois' },
  bio: 'I love building software.',
  email: 'john@example.com',
  name: 'John Doe',
  phone: '+1 555-1234',
  profilePicture: '/images/profilepic.jpg',
};

test('renders without crashing', () => {
  render(<About data={mockData} />);
});

test('renders bio and contact details', () => {
  render(<About data={mockData} />);

  expect(screen.getByText('I love building software.')).toBeInTheDocument();
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('+1 555-1234')).toBeInTheDocument();
  expect(screen.getByText('john@example.com')).toBeInTheDocument();
  expect(screen.getByText(/Illinois - Springfield/)).toBeInTheDocument();
});

test('renders profile picture with correct alt text', () => {
  render(<About data={mockData} />);

  const img = screen.getByAltText('Franco Mischuk Profile Pic');
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('src', '/images/profilepic.jpg');
});

test('renders without crashing when data is missing', () => {
  render(<About data={undefined} />);
});
