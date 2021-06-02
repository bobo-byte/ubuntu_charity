import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./assets/css/plugin.css";

const Item = ({ title, content }) => {
  return (
    <div className="services animate-box fadeInUp animated">
      <span>
        <FontAwesomeIcon
          icon={faHeart}
          color="#ff5722"
          style={{ marginBottom: "13px" }}
          size="3x"
        />
      </span>
      <h3>Coming soon!!</h3>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <h2>Our Projects. Support Us</h2>
      <p className="subheading-sections">
        Have a look at what we are currently working on.
      </p>

      <hr style={{ marginBottom: "30px" }} />

      <Container style={{ marginBottom: "20px" }}>
        <Row>
          <Col>
            <Item />
          </Col>
        </Row>
      </Container>

      <button id="gallery-btn" className="rounded-3">
        SEE PROJECTS
      </button>
    </div>
  );
};

export default Projects;
