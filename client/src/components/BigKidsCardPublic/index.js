import React from "react";
import {Row, Col} from "reactstrap";
import "./style.css";
import SponsorButton from "../SponsorButton"

// Card that appears when a user clicks to see more about a kid!
function PublicKidCard(props) {
    return (
        <Col xs="8">
            <Row>
                <Col>
                    <h2 className="font-weight-bold">{props.state.first_name} {props.state.last_name}</h2>
                    <h5><span className="font-weight-bold">Age: </span>{props.state.age}</h5>
                    <h5><span className="font-weight-bold">Grade: </span>{props.state.grade}</h5>
                    <h5><span className="font-weight-bold">Location: </span>{props.state.location}</h5>
                    <br />
                    <h5 className="text-uppercase">About {props.state.first_name}</h5>
                    <p>{props.state.kid_bio}</p>
                    <SponsorButton />
                    <hr />
                    <a href="/kids"><span className="small"><i class="fas fa-child mr-2"></i>Back to all kids</span></a>
                </Col>
            </Row>
        </Col>
    )
}

export default PublicKidCard