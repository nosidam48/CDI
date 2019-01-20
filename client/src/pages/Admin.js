import React, { Component } from "react";
import SponsoredPhotos from "../components/Sponsored-Photos"
import SponsoredBio from "../components/Sponsored-Bio"
import SponsoredList from "../components/Sponsored-List"
import Container from "../components/Container"

class Admin extends Component {
    render() {
        return (
            <Container>
                XXXX<div className="row">
                    <SponsoredPhotos />
                    <SponsoredBio />
                    <SponsoredList />                
                </div>
            </Container>
        )
    } 
}

export default Admin;





