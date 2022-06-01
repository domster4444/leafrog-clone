import React from 'react';

/**
 *@imports components
 */

import Toolbar from 'components/Toolbar';

/**
 *@imports screens
 */

import Home from 'screen/Home/Home';
/**
 * @imports library
 *
 */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  
  :root{
    font-size:10px;
    --primary-green: green;
    --primary-white: white;
    --primary-black: black;
    --primary-grey: grey;
    --primary-navy: navy;
    --secondary-lightsky: cyan;
  }
`;

const App: React.FC = (): React.ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Toolbar
        logo="https://www.lftechnology.com/wp-content/themes/Froggy/img/logo_leapfrog.svg"
        links={[
          { name: 'What We Do', link: '#' },
          { name: 'Services', link: '#' },
          { name: 'Insights', link: '#' },
          { name: 'Resources', link: '#' },
          { name: 'About Us', link: '#' },
        ]}
      />
      <Home />
    </>
  );
};

export default App;

