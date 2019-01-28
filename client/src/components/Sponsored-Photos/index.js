import React from "react";
import { Col } from "reactstrap";
import "./style.css";
import ImageGallery from 'react-image-gallery';

// Displays photo gallery of specific child
class SponsoredPhotos extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
 
    const images = [
      {
        original: this.props.state.profile_image,
        thumbnail: this.props.state.profile_image
      },
      {
        original: '../images/Carlitos2.jpg',
        thumbnail: '../images/Carlitos2.jpg'
      },

      {
        original: '../images/Solanyi.jpg',
        thumbnail: '../images/Solanyi.jpg'
      },

      {
        original: '../images/Solanyi2.jpg',
        thumbnail: '../images/Solanyi2.jpg'
      },

      {
        original: '../images/group1.jpg',
        thumbnail: '../images/group1.jpg'
      },
    ]
 
    return (
      <Col xs="4" className="image">
      {/* Passes the image array in as items, takes away play and fullscreen buttons */}
        <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} showNav={true}/>
      </Col>
    );
  }
 
}

export default SponsoredPhotos