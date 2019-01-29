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
        console.log(this.props.match.params.id);
        
     API.donorKid(this.props.match.params.id)
     .then(res => {

         this.setState({
             kid: res.data,
             content: res.data.contents
         })
         console.log(res.data);
     })
     .catch(err => console.log(err));
 };
    render() {
        return (
            <MainContainer>
                <Row>
                    <SponsoredPhotos kid={this.state.kid} content={this.state.content}/>
                    <SponsoredBio kid={this.state.kid}/>
                    <SponsoredList />                
                </Row>
            </MainContainer>
        )
    } 
}

export default Donors;







