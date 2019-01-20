import React, { Component } from "react";
import Container from "../components/Container"
import Row from "../components/Row"
import HomeMain from "../components/HomeMain"
import HomeSidebar from "../components/HomeSidebar"
import SidebarCard from "../components/SidebarCard"

class Home extends Component {
    render() {
        return (
            <div>
                <img src="../images/group.jpg" className="mb-3" width="100%" alt="Kids"/>
                <Container>
                <Row>
                </Row>
                <Row>
                    <HomeMain />
                    <HomeSidebar>
                        <SidebarCard />
                    </HomeSidebar>
                </Row>
            </Container>
            </div>
        )
    } 
}

export default Home;






