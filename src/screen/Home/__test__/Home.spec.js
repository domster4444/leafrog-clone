import { screen, render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';

import Home from '../Home';

describe('Home Page', () => {
  it('should render', () => {
    render(<Home />);
  });
  it('should render the title', () => {
    render(<Home />);
    const title = screen.getByText(/Innovate better/i);
    const subTitle = screen.getByText(/faster./i);
    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });
  it('should render the button', () => {
    render(<Home />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should render the anchor', () => {
    render(<Home />);
    const anchor = screen.getByRole('link');
    expect(anchor).toBeInTheDocument();
  });

  // it('should render component to match snapshot', () => {
  //   const tree = TestRenderer.create(<Home />);
  //   expect(tree).toMatchSnapshot();
  // });
});
