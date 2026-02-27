import { render, screen } from '@testing-library/react';
import { Resume } from './Resume';

const mockData = {
  education: [
    {
      degree: 'Computer Science',
      description: 'Studied CS fundamentals.',
      graduated: '2020',
      school: 'MIT',
    },
  ],
  projects: [
    {
      description: 'Built a unified API gateway.',
      name: 'API Gateway',
      partner: 'Acme Corp',
      rol: 'Backend Developer',
      techStack: ['Node', 'Express'],
      years: 'Mar. 2022 - Jun. 2022',
    },
    {
      description: 'Personal portfolio.',
      name: 'Portfolio Site',
      partner: 'Side Project',
      rol: 'Frontend Developer',
      techStack: ['React', 'Bootstrap'],
      webPage: 'https://example.com',
      years: 'Jan. 2023',
    },
  ],
  work: [
    {
      company: 'Acme Corp',
      description: 'Built scalable services.',
      title: 'Senior Engineer',
      years: 'Jan. 2021 - Present',
    },
  ],
};

test('renders without crashing', () => {
  render(<Resume data={mockData} />);
});

test('renders education entries', () => {
  render(<Resume data={mockData} />);

  expect(screen.getByText('Education')).toBeInTheDocument();
  expect(screen.getByText('MIT')).toBeInTheDocument();
  expect(screen.getByText(/Computer Science/)).toBeInTheDocument();
  expect(screen.getByText('2020')).toBeInTheDocument();
});

test('renders work entries', () => {
  render(<Resume data={mockData} />);

  expect(screen.getByText('Work')).toBeInTheDocument();
  expect(screen.getByText('Acme Corp')).toBeInTheDocument();
  expect(screen.getByText(/Senior Engineer/)).toBeInTheDocument();
});

test('renders project tabs grouped by role', () => {
  render(<Resume data={mockData} />);

  expect(screen.getByText('Projects')).toBeInTheDocument();
  expect(screen.getByRole('tab', { name: 'Backend Developer' })).toBeInTheDocument();
  expect(screen.getByRole('tab', { name: 'Frontend Developer' })).toBeInTheDocument();
});

test('renders tech stack for active project tab', () => {
  render(<Resume data={mockData} />);

  expect(screen.getByText(/Node/)).toBeInTheDocument();
  expect(screen.getByText(/Express/)).toBeInTheDocument();
});

test('renders project web page link when available', async () => {
  render(<Resume data={mockData} />);

  const frontendTab = screen.getByRole('tab', { name: 'Frontend Developer' });
  frontendTab.click();

  expect(await screen.findByText('https://example.com')).toBeInTheDocument();
});

test('renders without crashing when data is missing', () => {
  render(<Resume data={undefined} />);
});
