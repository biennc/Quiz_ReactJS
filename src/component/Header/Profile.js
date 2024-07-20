import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Profile = () => {
  const [show, setShow] = useState(false);

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
            id="uncontrolled-tab-example"
            className="mb-3">
            <Tab eventKey="home" title="Home">
              Your information
            </Tab>
            <Tab eventKey="profile" title="Password">
              Change password
            </Tab>
            <Tab eventKey="history" title="History">
              History doing quizzes
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Profile;
