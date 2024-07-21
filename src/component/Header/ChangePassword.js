import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const ChangePassword = (props) => {
  const { show, setShow } = props;

  const handleClose = () => setShow(false);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-profile">
        <Modal.Header closeButton>
          <Modal.Title>Manage your information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            justify>
            <Tab eventKey="home" title="Main infor">
              Your information
            </Tab>
            <Tab eventKey="profile" title="Password">
              Change password
            </Tab>
            <Tab eventKey="longer-tab" title="History doing quizzes">
              History doing quizzes
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChangePassword;
