import { NavItem, NavList, SidebarContainer, StyledNavLink } from "./style";

function Sidebar() {
  return (
    <SidebarContainer>
      <h2>Menu</h2>
      <NavList>
        <NavItem>
          <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/conta-bancaria">Conta Bancaria</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/lancamentos">Lançamentos</StyledNavLink>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
}

export default Sidebar;
