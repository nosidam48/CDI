import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./style.css";

// Form that is called when admin wants to add another admin
function AddAdmin() {
  return (
    <div>
      <h4 className="border-bottom">Add an admin</h4>
      <Form className="mt-4">
        <FormGroup>
          <Label for="nombres">Nombres</Label>
          <Input type="text" name="nombres" id="nombres" placeholder="Nombres" />
        </FormGroup>
        <FormGroup>
          <Label for="apellido">Apellido</Label>
          <Input type="text" name="apellido" id="apellido" placeholder="Apellido" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="name@gmail.com" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Set a temporary password - GCLA2019">
          </Input>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Admin Level</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="admin" />{' '}
              This admin should be restricted to regular admin privileges.
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="admin" />{' '}
              This admin should have master admin privileges.
            </Label>
          </FormGroup>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  )
}

export default AddAdmin;