/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';
describe('Button Component', () => {
  it('should render component', () => {
    render(<Button type="primary">GET STARTED</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should render button content', () => {
    render(<Button type="primary">GET STARTED</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/get started/i);
  });
});
