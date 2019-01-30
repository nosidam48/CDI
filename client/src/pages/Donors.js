import React, { Component } from "react";
import { Row } from "reactstrap";
import MainContainer from "../components/Container"
import SponsoredPhotos from "../components/Sponsored-Photos"
import SponsoredBio from "../components/Sponsored-Bio"
import SponsoredList from "../components/Sponsored-List"
import API from "../utils/API";

class Donors extends Component {
    state = {
        kid: "",
        content: []
    } 
    //On mount, return the kid with an id that matches the url
    componentDidMount() {
     this.loadOneKid();
 }
     //Call the findOneKid function by passing in the url id
    loadOneKid = (res) => {
        
     API.donorKid(this.props.match.params.id)
     .then(res => {
        console.log(res.data.content);
        
         this.setState({
             kid: res.data.kid,
             content: res.data.content
         })
         console.log(this.state);
         
     })
     .catch(err => console.log(err));
 };

 calculateAge = (dateString) => {
    var today = new Date();
    var birthday = new Date(dateString);
    // Use .getFullYear method to set age variable by subtracting birth year from current year
    var age = today.getFullYear() - birthday.getFullYear();
    // Use .getMonth method to subtract birth month from current month
    var months = today.getMonth() - birthday.getMonth();
    // If months is less than 0 or if months = 0 and days in the current month is less than days in birth month, decrease age by a year
    if (months < 0 || (months === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    return age;
};
    render() {
        return (
            <MainContainer>
                <Row>
                    <SponsoredPhotos kid={this.state.kid} content={this.state.content}/>
                    <SponsoredBio kid={this.state.kid} age={this.calculateAge} content={this.state.content}/>
                </Row>
            </MainContainer>
        )
    } 
}

export default Donors;







