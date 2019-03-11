import React from "react";
import { Row, Col } from "reactstrap";
import SponsorMeModal from "../SponsorMeModal"

// Card that appears when a user clicks to see more about a kid. Props is one kid based on the id in the url.
function PublicKidCard(props) {
    return (
        <Col xs="12" sm="6" md="8" className="my-4">
            <Row>
                <Col>
                    <h2 className="font-weight-bold">{props.kid.first_name}</h2>
                    <h5><span className="font-weight-bold">Age: </span>{props.age(props.kid.birth_date)}</h5>
                    <h5><span className="font-weight-bold">Grade: </span>{props.kid.grade}</h5>
                    <h5><span className="font-weight-bold">Location: </span>{props.kid.location}</h5>
                    <br />
                    <h5 className="text-uppercase">About {props.kid.first_name}</h5>
                    <p>{props.kid.kid_bio}</p>
                    <SponsorMeModal
                        id={props.kid.id}
                        kidFirstName={props.kid.first_name}
                        kidLastName={props.kid.last_name}
                        email={props.email}
                    />
                    <hr />
                    <a href="/kids"><span className="small"><i className="fas fa-child mr-2"></i>Back to all kids</span></a>
                </Col>
            </Row>
        </Col>
    )
}

export default PublicKidCard