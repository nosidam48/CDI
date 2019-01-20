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
    ]
 
    return (
      <div className="col-3 image">
      <ImageGallery items={images} showPlayButton={false}/>
      </div>
    );
  }
 
}

export default SponsoredPhotos