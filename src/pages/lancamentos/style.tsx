import styled from "styled-components";
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const Linha = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
`;


export const StyledTextField = styled(TextField)`
  width: 100%;

  & label {
    color: blue;
  }

  & .MuiFilledInput-root {
    background-color: #f5f5f5;
  }

  & .MuiFilledInput-underline:before {
    border-bottom: 2px solid #ccc;
  }

  & .MuiFilledInput-underline:after {
    border-bottom: 2px solid black;
  }

  & .Mui-focused {
    color: black;
  }

  & label.Mui-focused {
    color: blue;
  }

  & .MuiFilledInput-root.Mui-focused {
    color: darkblue;
  }
`;

export const DatePickerStyled = styled(DatePicker)`
    width: 100%;

  & label {
    color: blue;
  }

  & .MuiFilledInput-root {
    background-color: #f5f5f5;
  }

  & .MuiFilledInput-underline:before {
    border-bottom: 2px solid #ccc;
  }

  & .MuiFilledInput-underline:after {
    border-bottom: 2px solid black;
  }

  & .Mui-focused {
    color: black;
  }

  & label.Mui-focused {
    color: blue;
  }

  & .MuiFilledInput-root.Mui-focused {
    color: darkblue;
  }
`;

export const Button = styled.button`
    button{
    
    background:#1AAB8A;
    color:#fff;
    border:none;
    position:relative;
    height:70px;
    font-size:1.6em;
    padding:0 2em;
    cursor:pointer;
    transition:800ms ease all;
    outline:none;
    }
    button:hover{
    background:#fff;
    color:#1AAB8A;
    }
    button:before,button:after{
    content:'';
    position:absolute;
    top:0;
    right:0;
    height:2px;
    width:10;
    background: #1AAB8A;
    transition:400ms ease all;
    }
    button:after{
    right:inherit;
    top:inherit;
    left:0;
    bottom:0;
    }
    button:hover:before,button:hover:after{
    width:100%;
    transition:800ms ease all;
}

`;