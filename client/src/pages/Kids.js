import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import KidsList from "../components/KidsList";
import FilterPublic from "../components/FilterPublic";

class Kids extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <FilterPublic />
                    <KidsList />
                </Row>
            </Container>
        )
    } 
}

export default Kids;






