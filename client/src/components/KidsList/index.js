import React from "react";
import { Row, Col, Card } from "reactstrap";
import "./style.css";
import SponsorButton from "../SponsorButton";

// Shows list of kids available to sponsor; default is to show all kids and user can enter search options
function KidsList() {
    return (
        <Col md="9" className="my-4">
            <Row>
                <Col md="6" className="mb-3">
                    <Card className="border-0">
                        <Row className="no-gutters">
                            <Col xs="auto">
                                <img src="../images/Bairon2.jpg" className="img-fluid kidsListPic" alt="Child" />
                            </Col>
                            <Col>
                                <div className="card-block p-2">
                                    <h4 className="card-title font-weight-bold">Bairon Dubon</h4>
                                    <h6><span className="font-weight-bold">Age:</span> 15</h6>
                                    <h6><span className="font-weight-bold">Birthday:</span> April 23</h6>
                                    <h6><span className="font-weight-bold">Location:</span> Choluteca, Honduras</h6>
                                    <p className="small"><a href="#">Learn more about me</a></p>
                                    <SponsorButton />
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col md="6" className="mb-3">
                    <Card className="border-0">
                        <Row className="no-gutters">
                            <Col xs="auto">
                                <img src="../images/Solanyi.jpg" className="img-fluid kidsListPic" alt="Child" />
                            </Col>
                            <div className="col">
                                <div className="card-block p-2">
                                    <h4 className="card-title font-weight-bold">Solanyi Nicol</h4>
                                    <h6><span className="font-weight-bold">Age:</span> 4</h6>
                                    <h6><span className="font-weight-bold">Birthday:</span> March 13</h6>
                                    <h6><span className="font-weight-bold">Location:</span> Managua, Nicaragua</h6>
                                    <p className="small"><a href="#">Learn more about me</a></p>
                                    <SponsorButton />
                                </div>
                            </div>
                        </Row>
                    </Card>
                </Col>
                <Col md="6" className="mb-3">
                    <Card className="border-0">
                        <Row className="no-gutters">
                            <Col xs="auto">
                                <img src="../images/Solanyi.jpg" className="img-fluid kidsListPic" alt="Child" />
                            </Col>
                            <div className="col">
                                <div className="card-block p-2">
                                    <h4 className="card-title font-weight-bold">Solanyi Nicol</h4>
                                    <h6><span className="font-weight-bold">Age:</span> 4</h6>
                                    <h6><span className="font-weight-bold">Birthday:</span> March 13</h6>
                                    <h6><span className="font-weight-bold">Location:</span> Managua, Nicaragua</h6>
                                    <p className="small"><a href="#">Learn more about me</a></p>
                                    <SponsorButton />
                                </div>
                            </div>
                        </Row>
                    </Card>
                </Col>
                <Col md="6" className="mb-3">
                    <Card className="border-0">
                        <Row className="no-gutters">
                            <Col xs="auto">
                                <img src="../images/Solanyi.jpg" className="img-fluid kidsListPic" alt="Child" />
                            </Col>
                            <div className="col">
                                <div className="card-block p-2">
                                    <h4 className="card-title font-weight-bold">Solanyi Nicol</h4>
                                    <h6><span className="font-weight-bold">Age:</span> 4</h6>
                                    <h6><span className="font-weight-bold">Birthday:</span> March 13</h6>
                                    <h6><span className="font-weight-bold">Location:</span> Managua, Nicaragua</h6>
                                    <p className="small"><a href="#">Learn more about me</a></p>
                                    <SponsorButton />
                                </div>
                            </div>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Col>
    )
}

export default KidsList;

