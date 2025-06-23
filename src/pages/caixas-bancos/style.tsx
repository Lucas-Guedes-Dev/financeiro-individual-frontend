import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
  gap: 10px;
`;

export const Breadcrumb = styled.span`
  font-weight: bold;
`;

export const Selector = styled.select`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Tab = styled.button<{ "data-active"?: boolean }>`
  padding: 5px 10px;
  background-color: ${({ theme, "data-active": active }) =>
    active ? theme.button.background : theme.colors.secondary};
  color: ${({ theme, "data-active": active }) =>
    active ? theme.button.color : theme.colors.text};
  border: ${({ theme }) => theme.button.border};
  border-radius: ${({ theme }) => theme.button.borderRadius};
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: ${({ theme }) => theme.button.padding};
  background: ${({ theme }) => theme.button.background};
  color: ${({ theme }) => theme.button.color};
  border: ${({ theme }) => theme.button.border};
  border-radius: ${({ theme }) => theme.button.borderRadius};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const TableWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  overflow-y: auto;
  max-height: calc(100vh - 300px);
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

export const SidePanel = styled.aside`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ToggleButton = styled.button<{ collapsed?: boolean }>`
  background-color: ${({ theme }) => theme.button.background};
  color: ${({ theme }) => theme.button.color};
  border: ${({ theme }) => theme.button.border};
  padding: ${({ collapsed, theme }) =>
    collapsed ? "0" : theme.button.padding};
  border-radius: ${({ collapsed, theme }) =>
    collapsed ? "8px 0 0 8px" : theme.button.borderRadius};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ collapsed }) =>
    collapsed &&
    `
    width: 24px;
    height: 60px;
  `}
`;

export const ButtonGreen = styled.button`
  background-color: ${({ theme }) => theme.button.background};
  color: ${({ theme }) => theme.button.color};
  border: ${({ theme }) => theme.button.border};
  padding: ${({ theme }) => theme.button.padding};
  border-radius: ${({ theme }) => theme.button.borderRadius};
`;

export const Summary = styled.div`
  background-color: #f4f4f9;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SideLink = styled.a`
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #e8e8ec;
  }
`;

export const SlidePanel = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 420px;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transform: translateX(${(p) => (p.open ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 60px;
  overflow-y: auto;
  z-index: 10;
`;

export const PanelForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

export const FieldRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
`;

export const FieldLabel = styled.label`
  font-size: 12px;
  margin-bottom: 4px;
`;

export const TextInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  flex: 1;
`;

export const SelectInput = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  flex: 1;
`;

export const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
`;

export const PanelActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: auto;
  margin-bottom: 40px;
`;

export const BalanceInfo = styled.span`
  font-size: 10px;
  color: #666;
`;

export const Arrow = styled.span`
  font-size: 20px;
  align-self: center;
`;
