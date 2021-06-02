import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Values = () => {
  return (
    <div className="grey-container" style={{ marginTop: "40px" }}>
      <h2> Our values </h2>
      <p className="subheading-sections"> This is what makes it worth it </p>
      <hr style={{ marginBottom: "30px" }} />
      <Container>
        <Row>
          <Col>
            <span>
              <span
                className="emoji"
                role="img"
                aria-label="strength"
                style={{
                  fontSize: 45
                }}
              >
                🏋
              </span>
              <span className="text">INTEGRITY </span>
            </span>
          </Col>
          <Col>
            <span>
              <span
                className="emoji"
                role="img"
                aria-label="honesty"
                style={{
                  fontSize: 45
                }}
              >
                🤝
              </span>
              <span className="text">HONESTY</span>
            </span>
          </Col>
          <Col>
            <span>
              <span
                className="emoji"
                role="img"
                aria-label="kindness"
                style={{
                  fontSize: 45
                }}
              >
                🤗
              </span>
              <span className="text">KINDNESS </span>
            </span>
          </Col>
          <Col>
            <span>
              <span
                className="emoji"
                role="img"
                aria-label="respect"
                style={{
                  fontSize: 45
                }}
              >
                ✊
              </span>
              <span className="text">RESPECT </span>
            </span>
          </Col>
          <Col>
            <span>
              <span
                className="emoji"
                role="img"
                aria-label="sustain"
                style={{
                  fontSize: 45
                }}
              >
                🌷
              </span>
              <span className="text">SUSTAINABLE </span>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Values;
