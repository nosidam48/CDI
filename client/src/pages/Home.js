import React, { Component } from "react";
import { Row } from "reactstrap";
import MainContainer from "../components/Container"
import HomeMain from "../components/HomeMain"
import HomeSidebar from "../components/HomeSidebar"
import SidebarCard from "../components/SidebarCard"
import API from "../utils/API";

class Home extends Component {

    state = {
        kids: []
    }
    
    componentDidMount() {
        this.kidsCall();
    }

    kidsCall() {
        console.log("kids call function");
        
        API.homeKids()
        .then(res => {
            this.setState({
                kids: res.data
            })
            console.log("res.data: " + res.data);
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <img src="../images/banner.jpg" className="mb-3" width="100%" alt="Kids"/>
                <MainContainer>
                    <Row className="align-items-start">
                        <HomeMain />
                        <HomeSidebar>
                            <SidebarCard kids={this.state.kids} />
                        </HomeSidebar>
                    </Row>
                </MainContainer>
            </div>
        )
    } 
}

export default Home;






