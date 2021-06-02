import React, { useEffect, useState } from "react";
import DonationWidget from "./DonationWidget";
import axios from "axios";
import { Container as Parent, Row, Col } from "react-bootstrap";
import PaymentButton from "./PaymentButton";

const Donation = () => {
  const [price, setPrice] = useState(2);

  const [donationData, setDonationData] = useState({
    title: "",
    progressNumber: "",
    imageBanner: "",
    content: "",
    current: "",
    target: "",
    donorsList: [
      {
        name: "",
        donationAmount: "",
        donationTime: ""
      }
    ]
  });

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://grass-blossom-deal.glitch.me/");
      const {
        title,
        progressNumber,
        imageBanner,
        content,
        current,
        target,
        donorsList
      } = response.data;

      console.log(response.data);

      setDonationData({
        title,
        progressNumber,
        imageBanner,
        content,
        current,
        target,
        donorsList
      });
    })();
  }, []);

  return (
    <div id="donation">
      <br />
      <h1 className="messageHeading"> Donations </h1>
      <Parent fluid>
        <Row lg={2}>
          <Col
            className="mb-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.1)"
            }}
          >
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  fontSize: 65
                }}
              >
                <div>$</div>
                <input
                  style={{
                    margin: 20,
                    padding: 20,
                    fontSize: 20
                  }}
                  className="fieldInput"
                  type="number"
                  value={price}
                  onChange={(event) => {
                    const { value } = event.target;
                    setPrice(value);
                  }}
                />
              </div>
            </form>
            <PaymentButton price={price} />
            <p className="lead">
              This feature is unvailable for maintenance <br /> Apologies for
              the inconvenience. <br /> Please contact us @Admin@ubuntu-af.com
              to make a direct donation for the time being...
            </p>
          </Col>
          <Col id="gofundme">
            <DonationWidget
              title={donationData.title}
              current={donationData.current}
              target={donationData.target}
              progress={donationData.progressNumber}
              url={donationData.imageBanner}
            />
          </Col>
        </Row>
      </Parent>
    </div>
  );
};

export default Donation;
