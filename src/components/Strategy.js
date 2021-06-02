import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faDonate,
  faHandsHelping,
  faBullhorn
} from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";

const Strategy = () => {
  return (
    <>
      <Container style={{ marginTop: "200px" }}>
        <Row>
          <Col>
            <FontAwesomeIcon icon={faDonate} size="5x" />
            <span
              className="stat-slogan"
              style={{ display: "block", padding: "20px" }}
            >
              Kindness through donation.
            </span>
          </Col>
          <Col>
            <FontAwesomeIcon icon={faHandsHelping} size="5x" />
            <span
              className="stat-slogan"
              style={{ display: "block", padding: "20px" }}
            >
              Kindness through volunteering.
            </span>
          </Col>
          <Col>
            <FontAwesomeIcon icon={faBullhorn} size="5x" />
            <span
              className="stat-slogan"
              style={{ display: "block", padding: "20px" }}
            >
              Kindness through spreading the word.
            </span>
          </Col>
          <Col>
            <FontAwesomeIcon icon={faInstagram} size="5x" />
            <span
              className="stat-slogan"
              style={{ display: "block", padding: "20px" }}
            >
              Kindness through keeping in touch.
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Strategy;
