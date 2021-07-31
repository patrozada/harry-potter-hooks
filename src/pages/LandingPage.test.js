import { render, screen, cleanup } from '@testing-library/react';
import LandingPage from './LandingPage';

afterEach(cleanup);

test('should generate a snapshot for landing page component', () => {
  const { asFragment } = render(<LandingPage />);
  expect(asFragment(<LandingPage />)).toMatchSnapshot();
});

test('renders title', () => {
  render(<LandingPage />);
  const title = screen.getByText(/Harry Potter's Character explorer/i);
  expect(title).toBeInTheDocument();
});

test('renders start button', () => {
  render(<LandingPage />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
