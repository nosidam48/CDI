import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

// Form that is called when an admin wants to add a child to the database
function AddDonorForm(props) {
  return (
    <div>
      <h5 className="border-bottom">Add a donor to the database</h5>
      <Form className="mt-4">
        <FormGroup>
          <Label for="firstNames">First name</Label>
          <Input type="text" name="firstName" id="firstName" placeholder="First name" />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last name</Label>
          <Input type="text" name="lastName" id="lastName" placeholder="Last name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="donor@gmail.com" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Temporary password, like CDI2019" />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input type="text" name="address" id="address" placeholder="123 Main St." />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input type="text" name="city" id="city" placeholder="City" />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input type="text" name="state" id="state" placeholder="State" />
        </FormGroup>
        <FormGroup>
          <Label for="zip">Zip Code</Label>
          <Input type="text" name="zip" id="zip" placeholder="Zip Code" />
        </FormGroup>
        <Button inline>Submit</Button>
        <Button inline className="ml-2" onClick={props.onClickAddDonor}>Discard</Button> 
      </Form>
    </div>
  )
}

export default AddDonorForm;