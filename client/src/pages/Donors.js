import React, { Component } from "react";
import { Row } from "reactstrap";
import MainContainer from "../components/Container";
import SponsoredPhotos from "../components/Sponsored-Photos";
import SponsoredBio from "../components/Sponsored-Bio";
import LoadSpinner from "../components/LoadSpinner";
import auth0Client from "../Auth";
import API from "../utils/API";

class Donors extends Component {
    state = {
        kid: "",
        content: [],
        notes: [],
        photos: [],
        loading: true,
    }
    //On mount, return the kid with an id that matches the url
    componentWillMount() {
        // Grab the user's email address from the jwt token and update state
        let profile = auth0Client.getProfile();
        console.log(profile);
        //Call the db, passing in the user's email address as the id
        API.donorKid({ email: profile.name })
            .then(res => {
                // If message received is "Not a sponsor", set state.kid to false
                if (res.data === "Not a sponsor") {
                    this.setState({
                        kid: false,
                        loading: false
                    })
                } else {
                    // If data was received, run functions and set state
                    this.removeNote(res.data.content);
                    this.removePhoto(res.data.content);
                    this.setState({
                        kid: res.data.kid,
                        content: res.data.content,
                        loading: false
                    })
                }
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
    };

    // Function to filter content returned and save only notes that contain content
    removeNote = note => {
        // Filter this.state.content and remove any blank notes
        const notes = note.filter(note => note.kid_notes);
        // Set this.state.notes equal to the new notes array
        this.setState({ notes });
    };

    // Function to filter photos returned and save only photos that contain content
    removePhoto = photo => {
        // Filter this.state.content and remove any blank notes
        const photos = photo.filter(note => note.kid_pics);
        // Set this.state.photos equal to the new array
        this.setState({ photos });
    };

    render() {
        return (
            <MainContainer>
                {/* Show loader if no results yet */}
                {this.state.loading ? (
                    <Row className="justify-content-center">
                        <LoadSpinner
                            className="kidsSpin"
                        />
                    </Row>
                ) : (
                        <div>
                            {/* If results are found, show kid info. If not, alert user. */}
                            {this.state.kid ? (
                                <Row>
                                    <SponsoredPhotos kid={this.state.kid} content={this.state.photos} />
                                    <SponsoredBio key={this.state.id} kid={this.state.kid} age={this.calculateAge} notes={this.state.notes} />
                                </Row>
                            ) : (
                                    <h4 className="text-center mt-4">We're sorry. We couldn't find any children that you sponsor.</h4>
                                )}
                        </div>
                    )}
            </MainContainer>
        )
    }
}

export default Donors;







