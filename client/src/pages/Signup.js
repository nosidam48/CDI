import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from 'axios';

class Signup extends Component {
	constructor() {
		super()
		this.state = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
			email: '',
			password: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    })
    .then(response => {
        console.log("Client Side Good")
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}

  render() { 
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
  } else { 
    return (
      <div className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <h2>Sign Up Form</h2>
        <form className="signup" >
          <div className="form-group">
            <label for="first_input">First Name</label>
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} className="form-control" id="first-input" placeholder="First Name"/>
          </div>
          <div className="form-group">
            <label for="last-input">Last Name</label>
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} className="form-control" id="last-input" placeholder="Last Name"/>
          </div>
          <div className="form-group">
            <label for="address-input">Street Address</label>
            <input type="text" name="address" value={this.state.address} onChange={this.handleChange} className="form-control" id="address-input" placeholder="Address"/>
          </div>
          <div className="form-group">
            <label for="city-input">City</label>
            <input type="text" name="city" value={this.state.city} onChange={this.handleChange} className="form-control" id="city-input" placeholder="City"/>
          </div>
          <div className="form-group">
            <label for="state-input">State</label>
            <input type="text" name="state" value={this.state.state} onChange={this.handleChange} className="form-control" id="state-input" placeholder="State"/>
          </div>
          <div className="form-group">
            <label for="zip-input">Zip Code</label>
            <input type="text" name="zip" value={this.state.state} onChange={this.handleChange} className="form-control" id="zip-input" placeholder="Zip Code"/>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="email-input" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="password-input" placeholder="Password"/>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} className="form-control" id="password-confirm" placeholder="Confirm Password"/>
          </div>
          <div style={{display: "none"}} id="alert" className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span className="sr-only">Error:</span> <span className="msg"></span>
          </div>
          <button type="submit" onClick={this.handleSubmit} className="btn btn-default">Sign Up</button>
        </form>
        <br />
        <p>Or log in <a href="/login">here</a></p>
      </div>
    </div>
  </div>
    )
  }
}
}


export default Signup;