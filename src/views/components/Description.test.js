import { render, screen } from '@testing-library/react';
import { Description } from './Description';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faLinkedin);

const mockData = {
  address: { city: 'Springfield' },
  description: 'A passionate developer.',
  name: 'John Doe',
  occupation: 'Software Engineer',
  social: [
    { faIcon: 'linkedin', faPrefix: 'fab', name: 'linkedin', url: 'https://linkedin.com/in/johndoe' },
    { faIcon: 'github', faPrefix: 'fab', name: 'github', url: 'https://github.com/johndoe' },
  ],
};

test('renders without crashing', () => {
  render(<Description data={mockData} />);
});

test('renders name, occupation, city and description', () => {
  render(<Description data={mockData} />);

  expect(screen.getByText(/John Doe/)).toBeInTheDocument();
  expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  expect(screen.getByText('Springfield')).toBeInTheDocument();
  expect(screen.getByText(/A passionate developer/)).toBeInTheDocument();
});

test('renders social links with correct hrefs', () => {
  render(<Description data={mockData} />);

  const links = screen.getAllByRole('link');
  const socialLinks = links.filter(link => link.href.startsWith('https://'));

  expect(socialLinks).toHaveLength(2);
  expect(socialLinks[0]).toHaveAttribute('href', 'https://linkedin.com/in/johndoe');
  expect(socialLinks[1]).toHaveAttribute('href', 'https://github.com/johndoe');
});

test('renders without crashing when data is missing', () => {
  render(<Description data={undefined} />);
});
