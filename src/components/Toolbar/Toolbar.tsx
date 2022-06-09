import React from 'react';
import { IProps } from './interface';
import { Nav, NavList, NavLink, NavItem, Logo, Header } from './Toolbar.style';

/**
 * @param  components
 */
import Container from 'components/Container';
import Button from 'components/Button';

const Toolbar: React.FC<IProps> = ({ logo, links }): React.ReactElement => {
  return (
    <>
      <Header>
        <Container>
          <Nav data-testid="toolbar">
            <NavList className="poppins_semibold">
              {logo && (
                <NavItem>
                  <Logo src={logo} alt="leafrog logo" />
                </NavItem>
              )}
            </NavList>
            <NavList className="poppins_semibold">
              {links.map((item, index) => {
                return (
                  <NavItem key={index}>
                    <NavLink href="#">{item.name} </NavLink>
                  </NavItem>
                );
              })}
            </NavList>
            <NavList className="poppins_semibold">
              <NavItem>
                <Button type="primary">GET STARTED</Button>
              </NavItem>
            </NavList>
          </Nav>
        </Container>
      </Header>
    </>
  );
};

export default Toolbar;
