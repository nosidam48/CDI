import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Label } from 'reactstrap';
import { InputField, GenderField, GradeField, LocationField } from "../Form";
import API from "../../utils/API";

//A modal to udate an Admin
class UpdateAdminModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      id: "",
      userFirstName: "",
      userLastName: "",
      email: "",
      password: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      admin: {},
      masterAdmin: {}
    };

    this.toggle = this.toggle.bind(this);
  }
  // Toggles the modal between show and hide
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  // Function that listens for the inputs of the form data
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  };

  // Handles when an admin has edited a child's info
  handleUserEdit = event => {
    event.preventDefault();
    API.UserEdit({
      id: this.state.id,
      first_name: this.state.adminFirstNames,
      last_name: this.state.adminLastName,
      email: this.state.email,
      password: this.state.password,
      user_address: this.state.address,
      user_city: this.state.city,
      user_state: this.state.state,
      user_zip: this.state.zip,
      admin_status: this.state.admin,
      master_admin_status: this.state.masterAdmin
    })
      .then(res => {
        // When update was received, the original search will fire again, which will show the updated data
        this.props.redoSearch(event)
      })
      .catch(err => {
        this.setState({
          loading: false,
          message: "We're sorry, there was a problem updating the child's record."
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
              <Label>User Id</Label>
              <InputField
                value={this.state.id}
                onChange={this.handleInputChange}
                name="id"
              />
              <InputField
                value={this.state.userFirstName}
                onChange={this.handleInputChange}
                name="userFirstNames"
              />
              <Label>Last Name</Label>
              <InputField
                value={this.state.userLastName}
                onChange={this.handleInputChange}
                name="userLastName"
              />
              <Label>Email</Label>
              <GenderField
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
              />
              <Label>Password</Label>
              <InputField
                type="date"
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
              />
              <Label>Address</Label>
              <GradeField
                value={this.state.address}
                onChange={this.handleInputChange}
                name="address"
              />
              <Label>City</Label>
              <LocationField
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
              />
              <Label>State</Label>
              <InputField
                type="textarea"
                value={this.state.state}
                onChange={this.handleInputChange}
                name="state"
              />
              <Label>Zip</Label>
              <InputField
                type="textarea"
                value={this.state.zip}
                onChange={this.handleInputChange}
                name="zip"
              />
              <Input width="25%" type="select" value={this.state.admin} onChange={this.handleInputChange} name="admin" >
                <option selected>Admin status</option>
                <option>true</option>
                <option>false</option>
              </Input>
              <Input width="25%" type="select" value={this.state.masterAdmin} onChange={this.handleInputChange} name="dmin" >
                <option selected>Master Admin Status</option>
                <option>true</option>
                <option>false</option>
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
export default UpdateAdminModal;