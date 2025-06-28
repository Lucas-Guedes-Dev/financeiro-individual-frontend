import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    height: auto;
    flex-direction: column;
`;

export const Row = styled.div`
    display: flex;
    flex: 1;
    justify-content: start;
    align-items: center;
`;

export const Collumn = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`;

export const TableWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  overflow-y: auto;
  max-height: calc(100vh - 200px);
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 8px;
    text-align: left;
  }
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: ${({ theme }) => theme.button.background};
  color: ${({ theme }) => theme.button.color};
  border: ${({ theme }) => theme.button.border};
  border-radius: ${({ theme }) => theme.button.borderRadius};
  cursor: pointer;
  gap: 5px;
  &:hover {
    opacity: 0.9;
  }
`;
