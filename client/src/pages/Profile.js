import React, { Component } from "react";
import MainContainer from "../components/Container";
import LoadingSpinner from "../components/LoadSpinner";
import UserProfile from "../components/UserProfile"
import auth0Client from "../Auth";
import API from "../utils/API";

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      first_name: '',
      last_name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      results: [],
      updateProfile: false,
      loading: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.initiateUpdate = this.initiateUpdate.bind(this)

  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentWillMount() {
    // Grab the user's email address from the jwt token
    let profile = auth0Client.getProfile();
    // Get user info if user is already in db to put in form
    API.getDonor({ email: profile.name })
      .then(response => {
        this.setState({
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          address: response.data.address,
          city: response.data.city,
          state: response.data.state,
          zip: response.data.zip,
          email: response.data.email,
          results: response.data,
          loading: false
        })
      })
  }

  // Function to toggle whether to show profile update form
  initiateUpdate(event) {
    event.preventDefault();
    this.setState({ updateProfile: !this.state.updateProfile })
  }

  handleSubmit(event) {
    event.preventDefault()
    // Set loading state to true
    this.setState({ 
      loading: true,
    })
    //Request to add/update user profile
    API.donorProfile({
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    })
      .then(response => {
        this.setState({
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          address: response.data.address,
          city: response.data.city,
          state: response.data.state,
          zip: response.data.zip,
          results: response.data,
          loading: false,
          updateProfile: false
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
          <LoadingSpinner className="kidsSpin"  />
        ) : <UserProfile
              updateProfile={this.state.updateProfile}
              firstNameValue={this.state.first_name}
              firstName="first_name"
              lastNameValue={this.state.last_name}
              lastName="last_name"
              addressValue={this.state.address}
              addressName="address"
              cityValue={this.state.city}
              cityName="city"
              stateValue={this.state.state}
              stateName="state"
              zipValue={this.state.zip}
              zipName="zip"
              results={this.state.results}
              onClick={this.initiateUpdate}
              onClickSubmit={this.handleSubmit}
              onChange={this.handleChange}
            />
        }
      </MainContainer>
    )
  }
}
export default Profile;