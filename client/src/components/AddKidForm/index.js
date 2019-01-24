import React from "react";
import { Button, Form, FormGroup, Label, Input, CustomInput } from "reactstrap";
import "./style.css";

// Form that is called when an admin wants to add a child to the database
function AddKidForm(props) {
  return (
    <div>
      <h5 className="border-bottom">Add a child to the database</h5>
      <Form className="mt-4">
        <FormGroup>
          <Label for="firstNames">First names</Label>
          <Input type="text" name="firstNames" id="firstNames" placeholder="First names" />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last name</Label>
          <Input type="text" name="lastName" id="lastName" placeholder="Last name" />
        </FormGroup>
        <FormGroup>
          <Label for="sex">Sex</Label>
          <Input type="select" name="sex" id="sex">
            <option>Female</option>
            <option>Male</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="birthdate">Birthdate</Label>
          <Input type="date" name="birthdate" id="birthdate" placeholder="mm/dd/yyyy" />
        </FormGroup>
        <FormGroup>
          <Label for="grade">Grade</Label>
          <Input type="select" name="grade" id="grade">
            <option>Pre-K</option>
            <option>1st</option>
            <option>2nd</option>
            <option>3rd</option>
            <option>4th</option>
            <option>5th</option>
            <option>6th</option>
            <option>7th</option>
            <option>8th</option>
            <option>9th</option>
            <option>10th</option>
            <option>11th</option>
            <option>12th</option>
            <option>None</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="location">Location</Label>
          <Input type="select" name="location" id="location">
            <option selected>No preference</option>
            <optgroup label="El Salvador" />
            <option>-- El Guayabo</option>
            <option>-- La Libertad</option>
            <option>-- Soyapango</option>
            <optgroup label="Honduras" />
            <option>-- Choluteca</option>
            <option>-- Danli</option>
            <option>-- La Ceiba</option>
            <option>-- La Lima</option>
            <option>-- Los Cruces</option>
            <option>-- San Pedro Sula</option>
            <optgroup label="Guatemala" />
            <option>-- Guatemala City</option>
            <optgroup label="Nicaragua" />
            <option>-- Managua</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="bio">Child bio</Label>
          <Input type="textarea" name="bio" id="bio" placeholder="Description of the child" />
        </FormGroup>
        <FormGroup>
          <Label for="note">New note for the donor</Label>
          <Input type="textarea" name="note" id="note" placeholder="Note for the donor, if any" />
        </FormGroup>
        <FormGroup>
          <Label for="photo">Add a photo</Label>
          <CustomInput type="file" id="photo" name="photo" />
        </FormGroup>
        <Button inline>Submit</Button>
        <Button inline className="ml-2" onClick={props.onClickAddKid}>Discard</Button> 
      </Form>
    </div>
  )
}

export default AddKidForm