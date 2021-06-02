import React from "react";
import data from "./assets/data/teamData";
import { Col, Row, Container } from "react-bootstrap";

const TeamMember = ({ imageUrl, name, occupation, content }) => {
  return (
    <div className="fh5co-testimonial text-center animate-box fadeInUp animated">
      <figure>
        <img
          style={{
            width: "130px",
            height: "130px",
            border: "10px solid #fff",
            backgroundSize: "cover",
            WebkitBorderRadius: "50%",
            MozBorderRadius: "50%",
            MsBorderRadius: "50%",
            borderRadius: "50%",
            objectFit: "cover"
          }}
          src={imageUrl}
          alt="Team member"
        />
      </figure>
      <blockquote>
        <p>{content}</p>
      </blockquote>
      <span>
        {name}, {occupation}
      </span>
    </div>
  );
};

const Team = () => {
  return (
    <div className="grey-container" style={{ marginTop: "70px" }}>
      <h2 id="teamHeading">Our team. Get to know them</h2>
      <p
        className="subheading-sections"
        style={{
          fontSize: "18px",
          lineHeight: "1.6em",
          color: "#555"
        }}
      >
        They make everything possible. <br /> Get in touch and and make a
        family.
      </p>
      <hr style={{ marginBottom: "85px" }} />
      <Container>
        <Row>
          {data.map(({ url, name, occupation, quote }, index) => {
            return (
              <Col className="teamMember d-flex justify-content-center">
                <TeamMember
                  key={index}
                  imageUrl={url}
                  content={quote}
                  name={name}
                  occupation={occupation}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Team;
