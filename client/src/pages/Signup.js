import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h2>Sign Up Form</h2>
        <form class="signup">
          <div class="form-group">
            <label for="first_input">First Name</label>
            <input type="text" class="form-control" id="first-input" placeholder="First Name"/>
          </div>
          <div class="form-group">
            <label for="last-input">Last Name</label>
            <input type="text" class="form-control" id="last-input" placeholder="Last Name"/>
          </div>
          <div class="form-group">
            <label for="address-input">Street Address</label>
            <input type="text" class="form-control" id="address-input" placeholder="Address"/>
          </div>
          <div class="form-group">
            <label for="city-input">City</label>
            <input type="text" class="form-control" id="city-input" placeholder="City"/>
          </div>
          <div class="form-group">
            <label for="state-input">State</label>
            <input type="text" class="form-control" id="state-input" placeholder="State"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="email-input" placeholder="Email"/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="password-input" placeholder="Password"/>
          </div>
          <div style={{display: "none"}} id="alert" class="alert alert-danger" role="alert">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span class="sr-only">Error:</span> <span class="msg"></span>
          </div>
          <button type="submit" class="btn btn-default">Sign Up</button>
        </form>
        <br />
        <p>Or log in <a href="/login">here</a></p>
      </div>
    </div>
  </div>
    )
  }
}

export default Signup;