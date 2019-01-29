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
        console.log("kidsCall function hit (pages/Home.js)");
        
        API.homeKids()
        .then(res => {
            this.setState({
                kids: res.data
            })
            console.log("res.data: " + res.data);
        })
        .catch(err => console.log(err))
    }

    calculateAge = (dateString) => {
        var today = new Date();
        var birthday = new Date(dateString);
        console.log(today);
        console.log(birthday);
        // Use .getFullYear method to set age variable by subtracting birth year from current year
        var age = today.getFullYear() - birthday.getFullYear();
        // Use .getMonth method to subtract birth month from current month
        var months = today.getMonth() - birthday.getMonth();
        // If months is less than 0 or if months = 0 and days in the current month is less than days in birth month, decrease age by a year
        if (months < 0 || (months === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }
        return age;
    }

    render() {
        return (
            <div>
                <img src="../images/banner.jpg" className="mb-3" width="100%" alt="Kids"/>
                <MainContainer>
                    <Row className="align-items-start">
                        <HomeMain />
                        <HomeSidebar>
                            <SidebarCard kids={this.state.kids} age={this.calculateAge}/>
                        </HomeSidebar>
                    </Row>
                </MainContainer>
            </div>
        )
    } 
}

export default Home;






