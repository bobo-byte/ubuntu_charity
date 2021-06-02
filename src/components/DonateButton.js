import React from "react";
import DonationModal from "./DonationModal";
import "./assets/css/button.css";

const Button = React.forwardRef((props, ref) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <button
        ref={ref}
        className="rounded-pill donateButton"
        onClick={() => setModalShow(true)}
      >
        <span style={{ marginLeft: "5px" }}>
          {props.children ? props.children : "DONATE"}
        </span>
        <span role="img" aria-label="heart" style={{ marginLeft: "10px" }}>
          ❤️
        </span>
      </button>

      <DonationModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
});

export default Button;
