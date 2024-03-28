import React from "react";
import { ModalContent, ModalWrapper, AddSpace, ModalHeader, CloseIcon, Heading } from "./styles";
import Button from "../Button";


const Modal = ({ handleClose, show, children, buttonName, Headingtext, handleSubmit }) => {

    return (
        <ModalWrapper show={show}>
            <ModalContent>
                <ModalHeader>
                    <Heading>{Headingtext}</Heading>
                    <CloseIcon onClick={handleClose}>X</CloseIcon>
                </ModalHeader>
                {children}
                <AddSpace />
                <Button onClick={handleSubmit}>{buttonName}</Button>
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;