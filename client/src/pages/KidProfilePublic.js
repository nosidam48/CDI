import React, { Component } from "react";
import { Row } from 'reactstrap';
import MainContainer from "../components/Container";
import PublicKidCard from "../components/BigKidsCardPublic"
import SponsoredPhotos from "../components/Sponsored-Photos";
import API from "../utils/API";
// import Row from "../components/Row";

class KidProfilePublic extends Component {
       state = {
           kid: ""
       } 
       //On mount, return the kid with an id that matches the url
       componentDidMount() {
        this.loadOneKid();
    }
        //Call the findOneKid function by passing in the url id
       loadOneKid = () => {
        API.findOneKid(this.props.match.params.id)
        .then(res =>
                this.setState({
                    kid: res.data
                })
            )
            .catch(err => console.log(err));
    };
    render() {
        return (
            <MainContainer>
                <Row>    
                    <SponsoredPhotos state={this.state.kid} />
                    <PublicKidCard state={this.state.kid}/>
                </Row>
            </MainContainer>
        )
    } 
}

export default KidProfilePublic;






