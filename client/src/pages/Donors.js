import React, { Component } from "react";
import { Row } from "reactstrap";
import MainContainer from "../components/Container"
import SponsoredPhotos from "../components/Sponsored-Photos"
import SponsoredBio from "../components/Sponsored-Bio"
import SponsoredList from "../components/Sponsored-List"

class Donors extends Component {
    render() {
        return (
            <MainContainer>
                <Row>
                    <SponsoredPhotos />
                    <SponsoredBio />
                    <SponsoredList />                
                </Row>
            </MainContainer>
        )
    } 
}

export default Donors;







