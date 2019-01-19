import React, { Component } from "react";
import Container from "../components/Container"
import Row from "../components/Row"
import HomeMain from "../components/HomeMain"

class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <HomeMain />
                </Row>
            </Container>
        )
    } 
}

export default Home;






