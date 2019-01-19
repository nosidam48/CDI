import React from "react";
import "./style.css";

function SponsoredBio() {
  return (
    <div className="col-5">
      <div className="row">
        <div className="col-12">
        <h2>Name: </h2>
        <br/>
        <h5>Age: </h5>
        <br/>
        <h5>Grade: </h5>
        <br/>
        <h5>Location: </h5>
        <br/>
        <h5>Bio:</h5>
        <br/>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <div>
            <h4>Latest message</h4>
            <div>Message area</div>
          </div>
          <button>View more Messages</button>
        </div>
      </div>
    </div>
  );
}

export default SponsoredBio;
