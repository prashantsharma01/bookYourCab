import styled from "styled-components";

export const TextFieldWrapper = styled.div`
    position: relative;
    Z-index: 0;
    width: 100%;
`

export const InputTextContainer = styled.div`
    input {
        color:grey;
        padding: 12px;
        width: ${props => props.width ? props.width + 'px' : '600px'};
    }
    width: 100%;
    margin-top: 12px;
`

export const Label = styled.label`
    display: block;
    margin-bottom: 10px;
`
