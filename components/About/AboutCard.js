import React from "react";
import Card from "react-bootstrap/Card";
import { ImInfo } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Khadir Salah </span>
            from <span className="purple"> Rabat, Morocco.</span>
            <br />
            I am currently a software engineering student at EMSI.
            <br />
            I have a degree in Full Stack Web Development
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImInfo /> Playing Games
            </li>
            <li className="about-activity">
              <ImInfo /> Design
            </li>
            <li className="about-activity">
              <ImInfo /> Sport
            </li>
          </ul>

          <p style={{ color: "#CFDEE7" }}>
            "The only yime I fail is if I don't try "{" "}
          </p>
          <footer className="blockquote-footer">Salah</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
