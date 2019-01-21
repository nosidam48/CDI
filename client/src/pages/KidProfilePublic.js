import React, { Component } from "react";
import { Row } from 'reactstrap';
import MainContainer from "../components/Container";
import PublicKidCard from "../components/BigKidsCardPublic"
import SponsoredPhotos from "../components/Sponsored-Photos";
// import Row from "../components/Row";

class KidProfilePublic extends Component {
        
    render() {
        return (
            <MainContainer>
                <Row>    
                    <SponsoredPhotos />
                    <PublicKidCard />
                </Row>
            </MainContainer>
        )
    } 
}

export default KidProfilePublic;






