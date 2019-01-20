import React from "react";
import "./style.css";
import Row from "../Row"
import SponsorButton from "../SponsorButton"

function PublicKidCard({ children }) {
    return (
        <div className="col-8">
            <Row>
                <div className="col-12">
                    <h2 className="font-weight-bold">Carlitos Jose</h2>
                    <h5><span className="font-weight-bold">Age: </span>3</h5>
                    <h5><span className="font-weight-bold">Grade: </span>Pre-K </h5>
                    <h5><span className="font-weight-bold">Location: </span>Choluteca, Honduras</h5>
                    <br />
                    <h5 className="aboutKid">About Carlitos</h5>
                    <p>Reds perfect game gap chin music third baseman swing strike zone choke up. Range mitt plate fair sport wrigley rake. Reds perfect game gap chin music third baseman swing strike zone choke up. Range mitt plate fair sport wrigley rake. Reds perfect game gap chin music third baseman swing strike zone choke up. Range mitt plate fair sport wrigley rake.</p>
                    <SponsorButton />
                    <br /><br />
                    <a href="/kids">Back to all kids</a>
                </div>
            </Row>
        </div>
    )
}

export default PublicKidCard