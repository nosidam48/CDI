import React from "react";
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
      <div className="col-4 image">
      <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} showNav={true}/>
      </div>
    );
  }
 
}

export default SponsoredPhotos