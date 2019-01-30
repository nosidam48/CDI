import React, { Component } from "react";
import { Row } from "reactstrap";
import MainContainer from "../components/Container";
import SponsoredPhotos from "../components/Sponsored-Photos";
import SponsoredBio from "../components/Sponsored-Bio";
import LoadSpinner from "../components/LoadSpinner";
import API from "../utils/API";

class Donors extends Component {
    state = {
        kid: "",
        content: [],
        notes: [],
        loading: true
    }
    //On mount, return the kid with an id that matches the url
    componentDidMount() {
        this.loadOneKid();
    }
    //Call the findOneKid function by passing in the url id
    loadOneKid = (res) => {
        API.donorKid(this.props.match.params.id)
            .then(res => {
                this.removeNote(res.data.content);
                this.setState({
                    kid: res.data.kid,
                    content: res.data.content,
                    loading: false
                })
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

    // Function to filter content returned and save only notes that contain content
    removeNote = note => {
        // Filter this.state.content and remove any blank notes
        const notes = note.filter(note => note.kid_notes);
        // Set this.state.friends equal to the new friends array
        this.setState({ notes });
    };

    render() {
        return (
            <MainContainer>
                {this.state.loading ? (
                    <Row className="justify-content-center">
                        <LoadSpinner
                            className="kidsSpin" 
                        />
                    </Row>
                    ) : (
                    <Row>
                        <SponsoredPhotos kid={this.state.kid} content={this.state.content} />
                        <SponsoredBio key={this.state.id} kid={this.state.kid} age={this.calculateAge} notes={this.state.notes} />
                    </Row>
                    )}
            </MainContainer>
        )
    }
}

export default Donors;







