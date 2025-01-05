import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiJetbrains,
  SiUbuntu

} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={4} className="tech-icons">
        <SiUbuntu />
      </Col>
      <Col xs={4} md={4} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={4} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={4} className="tech-icons">
        <SiJetbrains />
      </Col>
    </Row>
  );
}

export default Toolstack;
