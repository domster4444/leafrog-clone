import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
/**
 * @imports components
 */
import Toolbar from 'components/Toolbar';

const componentProps = {
  logo: 'https://www.lftechnology.com/wp-content/themes/Froggy/img/logo_leapfrog.svg',
  links: [
    { name: 'What We Do', link: '#' },
    { name: 'Services', link: '#' },
    { name: 'Insights', link: '#' },
    { name: 'Resources', link: '#' },
    { name: 'About Us', link: '#' },
  ],
};

const renderComponent = (logo, links) => {
  render(<Toolbar logo={logo} links={links} />);
};

describe('Toolbar Component', () => {
  test('check if toolbar is rendered', () => {
    renderComponent(componentProps.logo, componentProps.links);
    expect(screen.getByTestId('toolbar')).toBeInTheDocument();
  });

  test('check if it has a logo ', () => {
    renderComponent(componentProps.logo, componentProps.links);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  test('check if it has menus', () => {
    renderComponent(componentProps.logo, componentProps.links);
    expect(screen.getAllByRole('link')).not.toBe(null);
  });
  test('check if it has button', () => {
    renderComponent(componentProps.logo, componentProps.links);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('should have a button with the correct text', () => {
    renderComponent(componentProps.logo, componentProps.links);
    expect(screen.getByRole('button')).toHaveTextContent(/GET STARTED/i);
  });

  test('this component should not change', () => {
    const tree = TestRenderer.create(
      <Toolbar logo={componentProps.logo} links={componentProps.links} />
    );

    expect(tree).toMatchSnapshot();
  });
});
