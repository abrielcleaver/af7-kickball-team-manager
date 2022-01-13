import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders home page', () => {
  render(<App />);
  const homePage = screen.getByText(/Welcome/i);
  expect(homePage).toBeInTheDocument();
});
