import React from "react";
import DonationButton from "./components/DonateButton";

//contains a sample of a responsive image background div with text.

const ImageContainer = () => {
  const btn_ref = React.createRef();
  return (
    <div id="parent-slogan-1">
      <div id="brand-slogan-1">
        <div id="d-slogan-container">
          <span id="defined-slogan-1"> Defined </span>
        </div>
        <span id="b-slogan-1"> by </span>
        <div id="k-slogan-container">
          <span id="kindness-slogan-1"> Kindness </span>
        </div>
      </div>
      <div id="donation-button-1">
        <DonationButton ref={btn_ref} />
      </div>
    </div>
  );
};

export default ImageContainer;
