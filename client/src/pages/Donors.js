import React, { Component } from "react";
import Container from "../components/Container"
import SponsoredPhotos from "../components/Sponsored-Photos"
import SponsoredBio from "../components/Sponsored-Bio"
import SponsoredList from "../components/Sponsored-List"

class Donors extends Component {
    render() {
        return (
            <Container>
                <div className="row">
                    <SponsoredPhotos />
                    <SponsoredBio />
                    <SponsoredList />                
                </div>
            </Container>
        )
    } 
}

export default Donors;







