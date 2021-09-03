import React, {FunctionComponent, useState} from "react";
import {Button, Modal} from "react-bootstrap";

interface IAlertModalProps {
    modalTitle: string;
    modalMessage: string;
    showModal: boolean;
}

export const AlertModal: FunctionComponent<IAlertModalProps> = ({modalTitle, modalMessage, showModal}) => {
    const [show, setShow] = useState(showModal);

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalMessage}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Accept & Continue</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};