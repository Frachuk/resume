import { render } from '@testing-library/react';
import '@/i18n';
import { About } from '../About';

test('about section renders no profile photo', () => {
  const { container } = render(<About />);
  expect(container.querySelector('img')).toBeNull();
});
