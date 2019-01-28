import React, { Component } from "react";
import { Row } from 'reactstrap';
import MainContainer from "../components/Container";
import PublicKidCard from "../components/BigKidsCardPublic"
import SponsoredPhotos from "../components/Sponsored-Photos";
import API from "../utils/API";
// import Row from "../components/Row";

class KidProfilePublic extends Component {
    
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
           console.log("PARAMS " + this.props.match.params.id);
           
        API.findOneKid(this.props.match.params.id)
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
                    <PublicKidCard kid={this.state.kid}/>
                </Row>
            </MainContainer>
        )
    } 
}

export default KidProfilePublic;






