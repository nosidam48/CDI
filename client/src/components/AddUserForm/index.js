import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { InputField, AdminField, SubmitBtn, DiscardBtn } from "../Form";
import API from "../../utils/API";

// Form that is called when an admin wants to add a child to the database
class AddUserForm extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    admin: false
  }

  // Function that runs after a user has been added
  resetUserForm = () => {
    this.setState({
        firstName: "", lastName: "",email: "", password: "",
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
      password: this.state.password,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      admin: this.state.admin
    })
      .then(res => {
        this.resetUserForm();
      }
      )
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h5 className="border-bottom">Add a user to the database</h5>
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
            <Label>Password</Label>
            <Input value={this.state.password} onChange={this.handleInputChange} type="password" name="password" placeholder="Temporary password, like CDI2019" />
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
            disabled={!(this.state.firstName && this.state.lastName && this.state.email && this.state.password)}
            onClick={() => { this.handleSubmit(); this.props.toggle()} }  inline="true"></SubmitBtn>
          <DiscardBtn inline="true" className="ml-2" />
        </Form>
      </div>
    )
  }
}

export default AddUserForm;