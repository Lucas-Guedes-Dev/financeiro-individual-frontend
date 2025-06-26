import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: #01233a;
  padding: 20px 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Collumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  width: 100%;
  background-color: transparent;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

export const ButtonLogout = styled.a`
    cursor: pointer;
`
