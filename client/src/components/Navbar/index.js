import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand ml-5" href="/">
        <img src="../images/cdi-logo.png" class="brandImage" alt="CDI" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse mt-4 mr-5" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto right">
          <li className="nav-item">
            <a className="nav-link" href="/kids">Kids</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/donors">{'\u00A0'}{'\u00A0'}Donors</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">{'\u00A0'}{'\u00A0'}Log In</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar