import { render, screen } from '@testing-library/react';
import AppComponent from './components/App/App.component';

test('renders learn react link', () => {
  render(<AppComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
