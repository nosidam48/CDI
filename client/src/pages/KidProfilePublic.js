import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import MainContainer from "../components/Container";
import PublicKidCard from "../components/PublicKidCard"
import GalleryPhotos from "../components/GalleryPhotos";
import API from "../utils/API";
import LoadSpinner from "../components/LoadSpinner";

class KidProfilePublic extends Component {

    state = {
        kid: "",
        content: [],
        photos: [],
        loading: true,
    }
    //On mount, return the kid with an id that matches the url
    componentDidMount() {
        this.loadOneKid();
    }
    //Call the findOneKid function by passing in the url id
    loadOneKid = (res) => {
        API.findOneKid(this.props.match.params.id)
            .then(res => {                
                this.removePhoto(res.data.contents);
                this.setState({
                    kid: res.data,
                    content: res.data.contents,
                    loading: false
                })
            })
            .catch(err => console.log(err));
    }

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
                                    <GalleryPhotos kid={this.state.kid} content={this.state.photos} />
                                    <PublicKidCard 
                                        kid={this.state.kid} 
                                        email={this.props.email}
                                    />                                             
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






