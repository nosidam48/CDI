import React, { Component } from "react";
import Container from "../components/Container"
import Row from "../components/Row"
import HomeMain from "../components/HomeMain"
import HomeSidebar from "../components/HomeSidebar"
import SidebarCard from "../components/SidebarCard"

class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <HomeMain />
                    <HomeSidebar>
                        <SidebarCard />
                    </HomeSidebar>
                </Row>
            </Container>
        )
    } 
}

export default Home;






