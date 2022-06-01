import styled from 'styled-components';

interface IProps {
  color?: string;
}

export const Nav = styled.nav<IProps>`
  background: var(--primary-white);
  display: flex;
  padding: 1.5rem 0rem;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;
export const NavItem = styled.li`
  margin: 0.85rem;
  &:hover {
    a {
      color: var(--primary-navy);
    }
  }
`;
export const NavLink = styled.a`
  text-decoration: none;
  color: var(--primary-black);
  font-size: 1.8rem;
`;

export const Logo = styled.img`
  height: 4rem;
  width: 20rem;
`;
