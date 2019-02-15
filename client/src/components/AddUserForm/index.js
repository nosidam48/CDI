import React from "react";
import { Form, FormGroup, Label } from "reactstrap";
import { InputField, AdminField, SubmitBtn, DiscardBtn } from "../Form";
import API from "../../utils/API";

// Form that is called when an admin wants to add/update user profile
class AddUserForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    admin: false,
    message: ""
  }

  // Function that runs after a user has been updated
  resetUserForm = () => {
    this.setState({
      firstName: "", lastName: "", email: "", password: "",
      address: "", city: "", state: "", zip: "", admin: false
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    API.addUser({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      admin: this.state.admin
    })
      .then(res => {
        console.log(res);
        this.resetUserForm();
        // Set message in state based on response
        if (res.data !== "Already exists.") {
          this.setState({ message: "The donor was added to the database." })
        } else {
          this.setState({ message: "The donor already exists in the database."})
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        {this.state.message ? <h4 className="text-center">{this.state.message}</h4>
          : (
            <div>
              <h5 className="border-bottom">Add/update user profile</h5>
              <Form className="mt-4">
                <FormGroup>
                  <Label>First name</Label>
                  <InputField value={this.state.firstName} onChange={this.handleInputChange} name="firstName" placeholder="First name" />
                </FormGroup>
                <FormGroup>
                  <Label>Last name</Label>
                  <InputField value={this.state.lastName} onChange={this.handleInputChange} name="lastName" placeholder="Last name" />
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <InputField value={this.state.email} onChange={this.handleInputChange} type="email" name="email" placeholder="donor@gmail.com" />
                </FormGroup>
                <FormGroup>
                  <Label>Address</Label>
                  <InputField value={this.state.address} onChange={this.handleInputChange} name="address" placeholder="123 Main St." />
                </FormGroup>
                <FormGroup>
                  <Label>City</Label>
                  <InputField value={this.state.city} onChange={this.handleInputChange} name="city" placeholder="City" />
                </FormGroup>
                <FormGroup>
                  <Label>State</Label>
                  <InputField value={this.state.state} onChange={this.handleInputChange} name="state" placeholder="State" />
                </FormGroup>
                <FormGroup>
                  <Label>Zip Code</Label>
                  <InputField value={this.state.zip} onChange={this.handleInputChange} name="zip" placeholder="Zip Code" />
                </FormGroup>
                <FormGroup>
                  <Label>Admin Status</Label>
                  <AdminField value={this.state.admin} onChange={this.handleInputChange} name="admin" />
                </FormGroup>
                <SubmitBtn
                  disabled={!(this.state.firstName && this.state.lastName && this.state.email)}
                  onClick={this.handleSubmit} inline="true"></SubmitBtn>
                <DiscardBtn inline="true" className="ml-2" />
              </Form>
            </div>
          )}
      </div>
    )
  }
}

export default AddUserForm;