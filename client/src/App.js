import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Sponsored-Photos";
import "./components/Sponsored-List";
import "./components/Sponsored-Bio";
import SponsoredPhotos from "./components/Sponsored-Photos";
import SponsoredBio from "./components/Sponsored-Bio";
import SponsoredList from "./components/Sponsored-List";
import MsgReceived from "./components/Msg-Received";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <div className="container">
      <div className="row">
      <SponsoredPhotos/>
      <SponsoredBio/>
      <SponsoredList/>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
