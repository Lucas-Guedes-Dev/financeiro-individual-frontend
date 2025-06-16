import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 46vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

export const Div1 = styled.div`
    flex: 1;
    height: 40px;
    width: 100%;
    background-color: blue;
`;

export const Div2 = styled.div`
    flex:2;
    height: 40px;
    width: 100%;
    background-color: purple;

    @media screen  {
        
    }
`;

export const LaunchButton = styled.button`
    background-color: ${({ theme }) => theme.button.background};
    color: ${({ theme }) => theme.button.color};
    border: ${({ theme }) => theme.button.border};
    border-radius: ${({ theme }) => theme.button.borderRadius};
    padding: ${({ theme }) => theme.button.padding};
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`;

export const Description = styled.input`
    padding: 5px;
    font-size: 8px;
    color: black;
    font-weight: bold;
    border-radius: 8px;
    border: 1px solid rgb(180, 180, 180);
    text-decoration: none;
`;