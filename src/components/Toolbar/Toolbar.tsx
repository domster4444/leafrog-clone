import React from 'react';
import { IProps } from './interface';
import { Nav, NavList, NavLink, NavItem, Logo } from './Toolbar.style';

/**
 * @param  components
 */
import Button from 'components/Button';

const Toolbar: React.FC<IProps> = ({ logo, links }): React.ReactElement => {
  return (
    <>
      <header>
        <Nav data-testid="toolbar">
          <NavList>
            {logo && (
              <NavItem>
                <Logo src={logo} alt="logo" />
              </NavItem>
            )}
          </NavList>
          <NavList>
            {links.map((item, index) => {
              return (
                <NavItem key={index}>
                  <NavLink href="#">{item.name} </NavLink>
                </NavItem>
              );
            })}
          </NavList>
          <NavList>
            <NavItem>
              <Button type="tertiary">GET STARTED</Button>
            </NavItem>
          </NavList>
        </Nav>
      </header>
    </>
  );
};

export default Toolbar;
