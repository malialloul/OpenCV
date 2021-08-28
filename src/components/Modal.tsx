import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GlobalContext } from "../services/AppContext";
import CommonFuntions from "./CommonFunctions";
import { Button, Modal } from "react-bootstrap";

const MyModal = ({ ...props }) => {

  return (
    <Modal show={props.visible} onHide={() => props.onClick()}>
      <Modal.Header closeButton>{props.Header}</Modal.Header>
      <Modal.Body>{props.Body}</Modal.Body>
    </Modal>
  );
};
export default MyModal;
