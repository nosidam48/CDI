import React from "react";
import "./style.css";

function Navbar() {
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">
    <img src="../images/cdi-logo.png" width="80" height="40" alt=""/>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto right">
        <li class="nav-item active">
          <a class="nav-link" href="/donors">Donors</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/kids">Kids</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/login">Log In</a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar