import React from "react";
import { Col } from "reactstrap";
import "./style.css";
import ImageGallery from 'react-image-gallery';

// Displays photo gallery of specific child
class GalleryPhotos extends React.Component {
    render() {
    const images = [
      {
        original: this.props.kid.profile_image,
        thumbnail: this.props.kid.profile_image
      }
    ]

    // wait till we have images
    if (this.props.content.length > 0) {
        //push into array
        this.props.content.map(pic => (
          images.push({
            original: pic.kid_pics,
            thumbnail: pic.kid_pics
          })
        ))  
    }
    
    return (
      <Col sm="5" lg="4" xl="3" className="image my-4">
      {/* Passes the image array in as items, takes away play and fullscreen buttons */}
        <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} showNav={true}/>
      </Col>
    );
  }
 
}

export default GalleryPhotos