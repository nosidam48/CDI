import React, { Component } from "react";
import { Row } from "reactstrap";
import MainContainer from "../components/Container";
import HomeMain from "../components/HomeMain";
import HomeSidebar from "../components/HomeSidebar";
import SidebarCard from "../components/SidebarCard";
import API from "../utils/API";
import LoadSpinner from "../components/LoadSpinner";
import auth0Client from "../Auth";

class Home extends Component {
    state = {
        kids: [],
        loading: true,
    }
    componentDidMount() {
        this.kidsCall();
    }
    // Function to display two random unsponsored children in the database
    kidsCall() {
        API.homeKids()
            .then(res => {
                this.setState({
                    kids: res.data,
                    loading: false
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({ loading: false })
            })
    }

    render() {
        return (
            <div>
                <img src="../images/banner.jpg" className="mb-3" width="100%" alt="Kids" />
                <MainContainer>
                    <Row className="align-items-start">
                        {/* Passing onClick to HomeMain section for link at the bottom */}
                        <HomeMain onClick={auth0Client.signIn} />
                        <HomeSidebar>
                            {/* Loading spinner shows until db returns two kids for sidebar */}
                            {this.state.loading ? (
                                <LoadSpinner
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






