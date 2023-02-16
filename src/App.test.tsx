import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hi', () => {
  render(<App />);
  const element = screen.getByText(/hi/i);
  expect(element).toBeInTheDocument();
});
