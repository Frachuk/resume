import { render, screen, waitFor } from '@testing-library/react';
import { App } from './App';
import mockData from './__mocks__/resumeData.json';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faLinkedin);

beforeEach(() => {
  jest.restoreAllMocks();
});

test('renders loading state initially', () => {
  global.fetch = jest.fn(() => new Promise(() => {}));
  render(<App />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});

test('renders resume content after successful fetch', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
      ok: true,
    }),
  );

  render(<App />);

  await waitFor(() => {
    expect(screen.getAllByText(/John Doe/).length).toBeGreaterThan(0);
  });

  expect(screen.getByText('About Me')).toBeInTheDocument();
  expect(screen.getByText('Education')).toBeInTheDocument();
  expect(screen.getByText('Work')).toBeInTheDocument();
  expect(screen.getByText('Projects')).toBeInTheDocument();
});

test('renders error message when fetch fails', async () => {
  global.fetch = jest.fn(() => Promise.reject(new Error('Network error')));

  render(<App />);

  await waitFor(() => {
    expect(screen.getByText('Something went wrong. Please refresh the page.')).toBeInTheDocument();
  });
});

test('renders error message when response is not ok', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: false,
      status: 404,
    }),
  );

  render(<App />);

  await waitFor(() => {
    expect(screen.getByText('Something went wrong. Please refresh the page.')).toBeInTheDocument();
  });
});
