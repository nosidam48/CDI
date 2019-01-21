import React, { Component } from "react";
import { Row } from "reactstrap";
import MainContainer from "../components/Container";
import KidsList from "../components/KidsList";
import FilterPublic from "../components/FilterPublic";

class Kids extends Component {
    render() {
        return (
            <MainContainer>
                <Row>
                    <FilterPublic />
                    <KidsList />
                </Row>
            </MainContainer>
        )
    } 
}

export default Kids;






