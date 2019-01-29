import React, { Component } from "react";
import { Row } from "reactstrap";
import MainContainer from "../components/Container";
import HomeMain from "../components/HomeMain";
import HomeSidebar from "../components/HomeSidebar";
import SidebarCard from "../components/SidebarCard";
import API from "../utils/API";
import LoadSpinner from "../components/LoadSpinner";
import LoadingSpinner from "../components/LoadSpinner";

class Home extends Component {

    state = {
        kids: [],
        loading: true
    }
    
    componentDidMount() {
        this.kidsCall();
    }

    kidsCall() {
        console.log("kidsCall function hit (pages/Home.js)");
        
        API.homeKids()
        .then(res => {
            this.setState({
                kids: res.data,
                loading: false
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
                            {this.state.loading ? (
                                <LoadingSpinner 
                                    className="whiteSpin"    
                                />
                                ) : (
                            <SidebarCard kids={this.state.kids} />
                            )}
                        </HomeSidebar>
                    </Row>
                </MainContainer>
            </div>
        )
    } 
}

export default Home;






