import styled from "styled-components";

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    display: ${props => props.show ? '' : 'none'};
`

export const ModalContent = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`

export const AddSpace = styled.div`
    margin-top: 20px;
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 10px;

`

export const Heading = styled.label`
    font-size: 23px;
    font-weight: 400;
`
export const CloseIcon = styled.div`
    background-color:#d14a4a;
    color: #FFF;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    text-align: center;
    cursor: pointer;
    &:hover {
        background-color: #d53a3a
    };
`