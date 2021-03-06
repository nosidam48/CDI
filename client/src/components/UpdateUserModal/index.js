import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Label } from 'reactstrap';
import { InputField } from "../Form";
import API from "../../utils/API";

//A modal to udate an Admin
class UpdateUserModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      id: this.props.id,
      userFirstName: this.props.firstName,
      userLastName: this.props.lastName,
      email: this.props.email,
      address: this.props.address,
      city: this.props.city,
      state: this.props.state,
      zip: this.props.zip,
      admin: false,
      masterAdmin: false
    };

    this.toggle = this.toggle.bind(this);
  }
  // Toggles the modal between show and hide
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    // Set state of admin statuses from db record to display in select button  
    if (this.props.masterAdmin === true) {
      this.setState({
        admin: "Master admin status"
      })
    } else if (this.props.admin === true) {
      this.setState({
        admin: "Regular admin status"
      })
    } else {
      this.setState({
        admin: "No admin status"
      })
    }
  }

    // Function that listens for the inputs of the form data
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      })
    };

    // Handles when an admin has edited a user's info
    handleUserEdit = event => {
      event.preventDefault();

      API.userEdit({
        id: this.state.id,
        first_name: this.state.userFirstName,
        last_name: this.state.userLastName,
        email: this.state.email,
        user_address: this.state.address,
        user_city: this.state.city,
        user_state: this.state.state,
        user_zip: this.state.zip,
        admin_status: this.state.admin,
        master_admin_status: this.state.masterAdmin
      })
        .then(res => {
          // When update is received, the original search will fire again, which will show the updated data
          this.props.redoSearch(event)
        })
        .catch(err => {
          this.setState({
            loading: false,
            message: "We're sorry, there was a problem updating the user's record."
          })
          console.log(err);
        })
    }

    render() {
      return (
        <div className="d-inline mr-2">
          <Button inline="true" size="sm" className="mt-2" onClick={this.toggle}>Update info</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Update user info</ModalHeader>
            <ModalBody>
              <Form>
                <Label>First Name</Label>
                <InputField
                  value={this.state.userFirstName}
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
                <Input type="select" value={this.state.admin} onChange={this.handleInputChange} name="admin" >
                  <option>No admin status</option>
                  <option>Regular admin status</option>
                  <option>Master admin status</option>
                </Input>
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
  export default UpdateUserModal;