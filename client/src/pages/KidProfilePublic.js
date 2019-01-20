import React, { Component } from "react";
import Container from "../components/Container";
import PublicKidCard from "../components/BigKidsCardPublic"
import SponsoredPhotos from "../components/Sponsored-Photos";
import Row from "../components/Row";

class KidProfilePublic extends Component {
    render() {
        return (
            <Container>
                <Row>    
                    <SponsoredPhotos />
                    <PublicKidCard />
                </Row>
            </Container>
        )
    } 
}

export default KidProfilePublic;






