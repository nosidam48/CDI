import React, { Component } from "react";
import { Row, Col, Form, Label } from "reactstrap";
import { InputField, SubmitBtn } from "../components/Form";
import MainContainer from "../components/Container";
import LoadingSpinner from "../components/LoadSpinner";
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
      results: null,
      loading: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount() {
    // Grab the user's email address from the jwt token and update state
    let profile = auth0Client.getProfile();
    this.setState({ email: profile.name})
    // Get user info if user is already in db to put in form
    API.getDonor({ email: profile.name })
      .then(response => {
        // If the user has profile info already, set state with response data to fill in form with previous data and set state to false
        if (response.data) {
          this.setState({
            firstName: response.data.first_name,
            lastName: response.data.last_name,
            address: response.data.address,
            city: response.data.city,
            state: response.data.state,
            zip: response.data.zip,
            loading: false
          })
          // If no profile info was found, just set state of loading to false
        } else {
          this.setState({ loading: false });
        }
      })
  }

  handleSubmit(event) {
    event.preventDefault()
    // Set loading state to true
    this.setState({ loading: true })
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
        // Set state with db results and set loading to false
        this.setState({
          results: response.data,
          loading: false
        })
      }).catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <MainContainer>
        {/* Shows loading spinner if loading is true */}
        {this.state.loading ? (
          <LoadingSpinner className="kidsSpin" />
        ) : null
        }
        {/* If results have come back, show success message. If not, show form */}
        {this.state.results ? (
          <h4 className="text-center mt-4">Your profile has been updated.</h4>
        ) : (
            <Row>
              <Col md={{ size: 6, offset: 3 }}>
                <h4>Update Your Current Profile</h4>
                <Form className="mt-3">
                  <Label>First Name*</Label>
                  <InputField
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    name="firstName"
                  />
                  <Label>Last Name*</Label>
                  <InputField
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    name="lastName"
                  />
                  <Label>Street Address</Label>
                  <InputField
                    value={this.state.address}
                    onChange={this.handleChange}
                    name="address"
                  />
                  <Label>City</Label>
                  <InputField
                    value={this.state.city}
                    onChange={this.handleChange}
                    name="city"
                  />
                  <Label>State</Label>
                  <InputField
                    value={this.state.state}
                    onChange={this.handleChange}
                    name="state"
                  />
                  <Label>Zip Code</Label>
                  <InputField
                    value={this.state.zip}
                    onChange={this.handleChange}
                    name="zip"
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