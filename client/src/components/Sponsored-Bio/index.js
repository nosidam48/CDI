import React from "react";
import { Col, Row } from "reactstrap";
import "./style.css";

// Displays text to donor of child they sponsor
function SponsoredBio(props) {
  return (
    <Col xs="5">
      <Row>
        <Col xs="9">
          <h2 className="font-weight-bold">{props.kid.first_name} {props.kid.last_name}</h2>
          <h5><span className="font-weight-bold">Age: </span>{props.age(props.kid.birth_date)}</h5>
          <h5><span className="font-weight-bold">Grade: </span>{props.kid.grade} </h5>
          <h5><span className="font-weight-bold">Location: </span>{props.kid.location}</h5>
          <br />
          <h5 className="text-uppercase">About {props.kid.first_name}</h5>
          <p>{props.kid.kid_bio}</p>
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
