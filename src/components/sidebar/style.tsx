import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  width: 250px;
  background-color: ${({ theme }) => (theme.colors.primary)};
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 10px 0;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 1.1rem;
  padding: 10px;
  display: block;
  border-radius: 4px;
  
  &.active {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textDark};
  }
 
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
  }
`;