import React, { Component } from "react";
import { Row } from "reactstrap";
import MainContainer from "../components/Container"
import HomeMain from "../components/HomeMain"
import HomeSidebar from "../components/HomeSidebar"
import SidebarCard from "../components/SidebarCard"

class Home extends Component {
    render() {
        return (
            <div>
                <img src="../images/banner.jpg" className="mb-3" width="100%" alt="Kids"/>
                <MainContainer>
                    <Row className="align-items-start">
                        <HomeMain />
                        <HomeSidebar>
                            <SidebarCard />
                        </HomeSidebar>
                    </Row>
                </MainContainer>
            </div>
        )
    } 
}

export default Home;






