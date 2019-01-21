import React from "react";
import "./style.css";

function SponsoredBio() {
  return (
    <div className="col-5">
      <div className="row">
        <div className="col-12">
          <h2 className="font-weight-bold">Carlitos Jose</h2>
          <h5><span className="font-weight-bold">Age: </span>3</h5>
          <h5><span className="font-weight-bold">Grade: </span>Pre-K </h5>
          <h5><span className="font-weight-bold">Location: </span>Choluteca, Honduras</h5>
          <br />
          <h5 className="text-uppercase">About Carlitos</h5>
          <p>Reds perfect game gap chin music third baseman swing strike zone choke up. Range mitt plate fair sport wrigley rake. Reds perfect game gap chin music third baseman swing strike zone choke up. Range mitt plate fair sport wrigley rake. Reds perfect game gap chin music third baseman swing strike zone choke up. Range mitt plate fair sport wrigley rake.</p>
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
    </div>
      );
    }
    
    export default SponsoredBio;
