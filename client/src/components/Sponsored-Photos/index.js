import React from "react";
import { Col } from "reactstrap";
import "./style.css";
import ImageGallery from 'react-image-gallery';

class SponsoredPhotos extends React.Component {
 
  render() {
 
    const images = [
      {
        original: "../images/Carlitos.jpg",
        thumbnail: '../images/Carlitos.jpg'
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
        <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} showNav={true}/>
      </Col>
    );
  }
 
}

export default SponsoredPhotos