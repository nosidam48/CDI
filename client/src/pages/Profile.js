import React, { Component } from "react";
import { Row, Col, Form, Label } from "reactstrap";
import { InputField, SubmitBtn } from "../components/Form";
import MainContainer from "../components/Container";
import axios from 'axios';
import auth0Client from "../Auth";
import API from "../utils/API";

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      results: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // Grab the user's email address form the jwt token and store it in state
  componentDidMount() {
    let profile = auth0Client.getProfile();
    console.log(profile.name);
    this.setState({ email: profile.name });
  }

  handleSubmit(event) {
    event.preventDefault()
    //Request to add/update user profile
    API.donorProfile({
      email: this.state.email,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    })
      .then(response => {
        console.log(response)
        this.setState({results: response})
      }).catch(error => {
        console.log('Error updating the database')
        console.log(error)
      })
  }

  render() {
    return (
      <MainContainer>
        {this.state.results.length > 0 ? (
          <h4 className="text-center mt-4">Your profile has been updated.</h4>
        ) : (
          <Row>
            <Col md={{ size: 6, offset: 3 }}>
              <h4>Update Profile</h4>
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

                {/* Display submit button once first name and last name have values */}
                <SubmitBtn
                  disabled={!(this.state.firstName && this.state.lastName)}
                  onClick={this.handleSubmit}
                />
              </Form>
            </Col>
          </Row>
        )}
        </MainContainer>
      )
  }
}


export default Profile;