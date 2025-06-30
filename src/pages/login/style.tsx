import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ContainerForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Titulo = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.textDark};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 16px;
`;

export const Input = styled.input`
  padding: 12px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 12px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;



export const Img = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 3;
  width: 100%;
  height: 100%;
`;

export const RowTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`