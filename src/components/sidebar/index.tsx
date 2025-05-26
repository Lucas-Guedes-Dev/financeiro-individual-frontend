import { NavItem, NavList, SidebarContainer, StyledNavLink } from "./style";

function Sidebar() {
    return (
        <SidebarContainer>
            <h2>Menu</h2>
            <NavList>
                <NavItem>
                    <StyledNavLink to="/" end>
                        Home
                    </StyledNavLink>
                </NavItem>
                <NavItem>
                    <StyledNavLink to="/about">About</StyledNavLink>
                </NavItem>
                <NavItem>
                    <StyledNavLink to="/contact">Contact</StyledNavLink>
                </NavItem>
                <NavItem>
                    <StyledNavLink to="/lancamentos">Lançamentos</StyledNavLink>
                </NavItem>
            </NavList>
        </SidebarContainer>
    );
}

export default Sidebar;