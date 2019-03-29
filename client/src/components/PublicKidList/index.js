import React from "react";
import { Row, Col, Card } from "reactstrap";
import "./style.css";
import moment from "moment";
import LoadingSpinner from "../LoadSpinner"
import SponsorMeModal from "../SponsorMeModal";
import { todayDate, calculateAge } from "../../utils/functions";  

// Shows list of kids available to sponsor; default is to show all kids and user can enter search options
function PublicKidList(props) {   
    return (
        <Col md="9" className="my-4">
            {props.loading ? (
                <LoadingSpinner
                    className="kidsSpin" 
                />
            ) : (
            <div>
            {props.kids.length ? (
                <Row>
                    {props.kids.map(kid => (
                        <Col md="6" key={kid.id} className="mb-3">
                            <Card className="border-0">
                                <Row className="no-gutters">
                                    <Col lg="6">
                                        <img src={kid.profile_image} className="img-fluid" alt="Child" />
                                    </Col>
                                    <Col>
                                        <div className="card-block p-2">
                                            <h4 className="card-title font-weight-bold">{kid.first_name} {kid.last_name}</h4>
                                            <h6><span className="font-weight-bold">Age: </span>
                                                {calculateAge(kid.birth_date, todayDate)}
                                            </h6>
                                            <h6><span className="font-weight-bold">Birthday: </span>{moment(kid.birth_date).format("MMMM D")}</h6>
                                            <h6><span className="font-weight-bold">Location:</span> {kid.location}</h6>
                                            <p className="small"><a href={"/kids/" + kid.id}>Learn more about me</a></p>
                                            <SponsorMeModal
                                                id={kid.id}
                                                kidFirstName={kid.first_name}
                                                kidLastName={kid.last_name}
                                                email={props.email}                                                
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                    <h4 className="text-center">We're sorry. We're unable to find any kids that match the search criteria.</h4>
                )}
            </div>
            )}
        </Col>
    )
}

export default PublicKidList;

