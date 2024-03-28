import styled from "styled-components";

export const ButtonWrapper = styled.button`
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    border-radius: 3px;
    border: 1px solid #FFFFFF;
    color: #FFF;
    background-color: ${props => props.color === 'danger' ? '#d14a4a' : '#15c3a9'};
    &:hover {
        background-color: ${props => props.color === 'danger' ? '#d53a3a' : '#12d6a9'};
    }
`