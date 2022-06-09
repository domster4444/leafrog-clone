import styled from 'styled-components';

interface IProps {
  color?: string;
}

export const Header = styled.header`
  width: 100%;
`;

export const Nav = styled.nav<IProps>`
  display: flex;
  padding: 1.65rem 0rem;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;
export const NavItem = styled.li`
  margin: 0.85rem 2.95rem;
  &:hover {
    a {
      color: var(--primary-navy);
    }
  }
`;
export const NavLink = styled.a`
  text-decoration: none;
  color: var(--primary-grey);
  font-size: 1.6rem;
`;

export const Logo = styled.img`
  height: 4.5rem;
`;
