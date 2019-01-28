import React from "react";
import { Row, Col, Card } from "reactstrap";
import "./style.css";
import SponsorButton from "../SponsorButton";
import moment from "moment";

// Shows list of kids available to sponsor; default is to show all kids and user can enter search options
function KidsList(props) {
    return (
        <Col md="10" className="my-4">
            {props.state.length ? (
                <Row>
                    {props.state.map(kid => (
                        <Col xs="6" md="4" lg="6" key={kid.id} className="mb-3">
                            <Card className="border-0">
                                <Row className="no-gutters">
                                    <Col lg="6">
                                        <img src={kid.profile_image} className="img-fluid kidsListPic" alt="Child" />
                                    </Col>
                                    <Col>
                                        <div className="card-block p-2">
                                            <h4 className="card-title font-weight-bold">{kid.first_name} {kid.last_name}</h4>
                                            <h6><span className="font-weight-bold">Age: </span>
                                                {props.calculateAge(kid.birth_date)}
                                            </h6>
                                            <h6><span className="font-weight-bold">Birthday: </span>{moment(kid.birth_date).format("MMMM D")}</h6>
                                            <h6><span className="font-weight-bold">Location:</span> {kid.location}</h6>
                                            <p className="small"><a href={"/kids/" + kid.id}>Learn more about me</a></p>
                                            <SponsorButton />
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                    <h4 className="text-center">We're sorry. We're unable to display any kid profiles at this time.</h4>
                )}
        </Col>
    )
}

export default KidsList;

