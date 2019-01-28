import React from "react";
import { Col } from "reactstrap";
import "./style.css";
import ImageGallery from 'react-image-gallery';

// Displays photo gallery of specific child
class SponsoredPhotos extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
    }
  
    render() {
    const images = [
      {
        original: this.props.kid.profile_image,
        thumbnail: this.props.kid.profile_image
      }
    ]

    //wait till we have images
    if (this.props.content.length > 0) {
      console.log("props" + this.props.content);
        //push into array
        this.props.content.map(pic => (
          images.push({
            original: pic.kid_pics,
            thumbnail: pic.kid_pics
          })
        ))  
    }
    console.log(images);
    
    return (
      <Col xs="4" className="image">
      {/* Passes the image array in as items, takes away play and fullscreen buttons */}
        <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} showNav={true}/>
      </Col>
    );
  }
 
}

export default SponsoredPhotos