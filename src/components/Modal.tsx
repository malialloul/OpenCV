import React from "react";
import { Modal } from "react-bootstrap";

const MyModal = ({ ...props }) => {

  return (
    <Modal show={props.visible} onHide={() => props.onClick()}>
      <Modal.Header closeButton>{props.Header}</Modal.Header>
      <Modal.Body>{props.Body}</Modal.Body>
    </Modal>
  );
};
export default MyModal;
