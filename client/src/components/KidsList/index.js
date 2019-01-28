import React from "react";
import { Row, Col, Card } from "reactstrap";
import "./style.css";
import SponsorButton from "../SponsorButton";

// Shows list of kids available to sponsor; default is to show all kids and user can enter search options
function KidsList(props) {
    return (
        <Col md="9" className="my-4">
            {props.state.length ? (
            <Row>
            {props.state.map(kid => (
                <Col md="6" key={kid.id} className="mb-3">
                    <Card className="border-0">
                        <Row className="no-gutters">
                            <Col xs="auto">
                                <img src={kid.profile_image} className="img-fluid kidsListPic" alt="Child" />
                            </Col>
                            <Col>
                                <div className="card-block p-2">
                                    <h4 className="card-title font-weight-bold">{kid.first_name} {kid.last_name}</h4>
                                    <h6><span className="font-weight-bold">Age:</span>7</h6>
                                    <h6><span className="font-weight-bold">Birthday:</span> {kid.birth_date}</h6>
                                    <h6><span className="font-weight-bold">Location:</span> {kid.location}</h6>
                                    <p className="small"><a href={"/kids/" + kid.id}>Learn more about me</a></p>
                                    <SponsorButton id={kid.id}/>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                ))}
            </Row>
           ) : (
               <h3>No results</h3>
           )}
        </Col>
    )
}

export default KidsList;

