import React from "react";
import { Col, Row } from "reactstrap";
import "./style.css";

// Displays text to donor of child they sponsor
function SponsoredBio() {
  return (
    <Col xs="5">
      <Row>
        <Col xs="9">
          <h2 className="font-weight-bold">Carlitos Jose</h2>
          <h5><span className="font-weight-bold">Age: </span>3</h5>
          <h5><span className="font-weight-bold">Grade: </span>Pre-K </h5>
          <h5><span className="font-weight-bold">Location: </span>Choluteca, Honduras</h5>
          <br />
          <h5 className="text-uppercase">About Carlitos</h5>
          <p>Reds perfect game gap chin music third baseman swing strike zone choke up. Range mitt plate fair sport wrigley rake. Reds perfect game gap chin music third baseman swing strike zone choke up. Range mitt plate fair sport wrigley rake. Reds perfect game gap chin music third baseman swing strike zone choke up. Range mitt plate fair sport wrigley rake.</p>
        </Col>
      <Row>
          <Col className="text-center">
            <div>
              <h4>Latest message</h4>
              <div>Message area</div>
            </div>
            <button>View more Messages</button>
          </Col>
        </Row>
      </Row>
    </Col>
      );
    }
    
    export default SponsoredBio;
