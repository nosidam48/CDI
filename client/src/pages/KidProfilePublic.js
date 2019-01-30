import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import MainContainer from "../components/Container";
import PublicKidCard from "../components/BigKidsCardPublic"
import SponsoredPhotos from "../components/Sponsored-Photos";
import API from "../utils/API";
import LoadSpinner from "../components/LoadSpinner";

class KidProfilePublic extends Component {

    state = {
        kid: "",
        content: [],
        loading: true
    }
    //On mount, return the kid with an id that matches the url
    componentDidMount() {
        this.loadOneKid();
    }
    //Call the findOneKid function by passing in the url id
    loadOneKid = (res) => {
        API.findOneKid(this.props.match.params.id)
            .then(res => {                
                this.setState({
                    kid: res.data,
                    content: res.data.contents,
                    loading: false
                })
            })
            .catch(err => console.log(err));
    }

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
    }
    render() {
        return (
            <MainContainer>
                {this.state.loading ? (
                    <Row className="justify-content-center">
                        <Col xs="auto">
                            <LoadSpinner
                                className="kidsSpin"
                            />
                        </Col>
                    </Row>
                ) : (
                        <div>
                            {this.state.kid ? (
                                <Row>
                                    <SponsoredPhotos kid={this.state.kid} content={this.state.content} />
                                    <PublicKidCard kid={this.state.kid} age={this.calculateAge} />
                                </Row>
                            ) : (
                                    <h4 className="text-center">We're sorry. We're unable to display this kid's profile at this time.</h4>
                                )}
                        </div>
                    )}
            </MainContainer>
        )
    }
}

export default KidProfilePublic;






