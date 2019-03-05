import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Label } from 'reactstrap';
import { InputField } from "../Form";
import API from "../../utils/API";

//A modal for the user to update their profile
class UserProfileUpdateModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      userFirstName: this.props.firstName,
      userLastName: this.props.initialResults.last_name,
      email: this.props.initialResults.email,
      address: this.props.initialResults.address,
      city: this.props.initialResults.city,
      state: this.props.initialResults.state,
      zip: this.props.initialResults.zip
    };

    this.toggle = this.toggle.bind(this);
  }
  // Toggles the modal between show and hide
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
    console.log(this.props);
    console.log(this.state);
  }

    // Function that listens for the inputs of the form data
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      })
    };

    // Handles when an user has edited their profile info
    handleProfileEdit = event => {
      event.preventDefault();
      API.profileEdit({
        first_name: this.state.userFirstName,
        last_name: this.state.userLastName,
        email: this.state.email,
        user_address: this.state.address,
        user_city: this.state.city,
        user_state: this.state.state,
        user_zip: this.state.zip,
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          this.setState({
            loading: false,
            message: "We're sorry, there was a problem updating your profile."
          })
          console.log(err);
        })
    }

    render() {
      return (
        <div className="d-inline mr-2">
          <Button inline="true" size="sm" className="mt-2" onClick={this.toggle}>Update</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Update your profile</ModalHeader>
            <ModalBody>
              <Form>
                <Label>First Name</Label>
                <InputField
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  name="userFirstName"
                />
                <Label>Last Name</Label>
                <InputField
                  value={this.state.userLastName}
                  onChange={this.handleInputChange}
                  name="userLastName"
                />
                <Label>Email</Label>
                <InputField
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                />
                <Label>Address</Label>
                <InputField
                  value={this.state.address}
                  onChange={this.handleInputChange}
                  name="address"
                />
                <Label>City</Label>
                <InputField
                  value={this.state.city}
                  onChange={this.handleInputChange}
                  name="city"
                />
                <Label>State</Label>
                <InputField
                  value={this.state.state}
                  onChange={this.handleInputChange}
                  name="state"
                />
                <Label>Zip</Label>
                <InputField
                  value={this.state.zip}
                  onChange={this.handleInputChange}
                  name="zip"
                />
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button onClick={(event) => { this.toggle(); this.handleUserEdit(event) }} className="modalBtn">Submit Changes</Button>{' '}
              <Button onClick={this.toggle} className="modalCancel">Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
  export default UserProfileUpdateModal;