import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Row, Col, Form, Label } from "reactstrap";
import { InputField, SubmitBtn } from "../components/Form";
import MainContainer from "../components/Container";
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
      redirectTo: ''

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
            redirectTo: '/kids'
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
        <MainContainer>
          <Row>
            <Col md={{ size: 6, offset: 3 }}>
              <h4>Create an Account</h4>
              <Form className="mt-3">
                <Label>First Name*</Label>
                <InputField
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  name="firstName"
                  placeholder="Joe"
                />
                <Label>Last Name*</Label>
                <InputField
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  name="lastName"
                  placeholder="Smith"
                />
                <Label>Street Address</Label>
                <InputField
                  value={this.state.address}
                  onChange={this.handleChange}
                  name="address"
                  placeholder="123 Main St."
                />
                <Label>City</Label>
                <InputField
                  value={this.state.city}
                  onChange={this.handleChange}
                  name="city"
                  placeholder="Miami"
                />
                <Label>State</Label>
                <InputField
                  value={this.state.state}
                  onChange={this.handleChange}
                  name="state"
                  placeholder="FL"
                />
                <Label>Zip Code</Label>
                <InputField
                  value={this.state.zip}
                  onChange={this.handleChange}
                  name="zip"
                  placeholder="33129"
                />
                <Label>Email Address*</Label>
                <InputField
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                  placeholder="joesmith@gmail.com"
                />
                <Label>Password*</Label>
                <InputField
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  name="password"
                />
                <Label>Confirm Password*</Label>
                <InputField
                  type="password"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                  name="confirmPassword"
                />

                {/* Display submit button once first name, last name and email have values and the passwords match */}
                <SubmitBtn
                  disabled={!(this.state.firstName && this.state.lastName 
                    && this.state.email && this.state.password) || (this.state.password !== this.state.confirmPassword)}
                  onClick={this.handleSubmit}
                />
                <p className="mt-3">Or log in <a href="/login">here</a></p>
              </Form>
            </Col>
          </Row>
        </MainContainer>
      )
    }
  }
}


export default Signup;