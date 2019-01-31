import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
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
      admin: {}
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
          <Label for="firstNames">First name</Label>
          <Input value={this.state.firstName} onChange={this.handleInputChange} type="text" name="firstName"  id="firstName" placeholder="First name" />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last name</Label>
          <Input value={this.state.lastName} onChange={this.handleInputChange} type="text" name="lastName" id="lastName" placeholder="Last name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input value={this.state.email} onChange={this.handleInputChange} type="email" name="email" id="email" placeholder="donor@gmail.com" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input value={this.state.password} onChange={this.handleInputChange} type="password" name="password" id="password" placeholder="Temporary password, like CDI2019" />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input value={this.state.address} onChange={this.handleInputChange} type="text" name="address" id="address" placeholder="123 Main St." />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input value={this.state.city} onChange={this.handleInputChange} type="text" name="city" id="city" placeholder="City" />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input value={this.state.state} onChange={this.handleInputChange} type="text" name="state" id="state" placeholder="State" />
        </FormGroup>
        <FormGroup>
          <Label for="zip">Zip Code</Label>
          <Input value={this.state.zip} onChange={this.handleInputChange} type="text" name="zip" id="zip" placeholder="Zip Code" />
        </FormGroup>
        <FormGroup>
          <Label for="admin">Admin Status</Label>
      <Input width="25%" type="select" value={this.state.admin} onChange={this.handleInputChange} name="admin" >
        <option defaultValue>Choose admin status</option>
        <option>true</option>
        <option>false</option>
      </Input>
    </FormGroup>
        <Button onClick={this.handleSubmit} inline="true">Submit</Button>
        <Button inline="true" className="ml-2" onClick={this.props.onClickAddDonor}>Discard</Button> 
      </Form>
    </div>
  )}
}

export default AddUserForm;