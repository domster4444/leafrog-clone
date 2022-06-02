import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
/**
 * @imports components
 */
import Toolbar from 'components/Toolbar';

/**
 * @description //*redux-toolkit imports
 */
import { Provider } from 'react-redux';
import { store } from 'redux/store';

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
  render(
    <Provider store={store}>
      <Toolbar logo={logo} links={links} />
    </Provider>
  );
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
      <Provider store={store}>
        <Toolbar logo={componentProps.logo} links={componentProps.links} />
      </Provider>
    );

    expect(tree).toMatchSnapshot();
  });
});
