import React from "react";
import {Row, Col} from "reactstrap";
import "./style.css";
import SponsorButton from "../SponsorButton"

function PublicKidCard({ children }) {
    return (
        <Col xs="8">
            <Row>
                <Col>
                    <h2 className="font-weight-bold">Carlitos Jose</h2>
                    <h5><span className="font-weight-bold">Age: </span>3</h5>
                    <h5><span className="font-weight-bold">Grade: </span>Pre-K </h5>
                    <h5><span className="font-weight-bold">Location: </span>Choluteca, Honduras</h5>
                    <br />
                    <h5 className="text-uppercase">About Carlitos</h5>
                    <p>Reds perfect game gap chin music third baseman swing strike zone choke up. Range mitt plate fair sport wrigley rake. Reds perfect game gap chin music third baseman swing strike zone choke up. Range mitt plate fair sport wrigley rake. Reds perfect game gap chin music third baseman swing strike zone choke up. Range mitt plate fair sport wrigley rake.</p>
                    <SponsorButton />
                    <hr />
                    <a href="/kids"><span className="small"><i class="fas fa-child mr-2"></i>Back to all kids</span></a>
                </Col>
            </Row>
        </Col>
    )
}

export default PublicKidCard