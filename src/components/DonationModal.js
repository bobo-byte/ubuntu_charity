import React from "react";
import { Modal } from "react-bootstrap";
import Donation from "./Donation";
const { Header, Title, Body, Footer } = Modal;

const DonationModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Header closeButton>
        <Title id="contained-modal-title-vcenter">
          Thank you for the donation !!
        </Title>
      </Header>

      <Body>
        <Donation />
      </Body>
      <Footer>
        <button id="gallery-btn" className="rounded-3" onClick={props.onHide}>
          Close
        </button>
      </Footer>
    </Modal>
  );
};

export default DonationModal;
