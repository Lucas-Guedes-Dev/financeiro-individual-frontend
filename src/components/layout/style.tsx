import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const Content = styled.main`
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  max-height: calc(100vh - 60px); 
`;