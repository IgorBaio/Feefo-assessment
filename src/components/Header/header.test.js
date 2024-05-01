import { render, screen } from '@testing-library/react';
import { HeaderComponent } from '.';

test('render title header', () => {
  render(<HeaderComponent />);
  const element = screen.getByText(/Account Overview/i);
  expect(element).toBeInTheDocument();
});
