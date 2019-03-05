import React from "react";
import { Form, FormGroup, Label } from "reactstrap";
import { InputField, AdminField, FormBtn } from "../Form";

// Form that is called when an admin wants to add/update user profile
function AddUserForm(props) {
  return (
    <div>
      <h5 className="border-bottom">Add user profile</h5>
      <Form className="mt-4">
        <FormGroup>
          <Label>First name</Label>
          <InputField 
            onChange={props.onChangeInput} 
            value={props.firstNameValue} 
            name={props.firstName}
            placeholder="First name" />
        </FormGroup>
        <FormGroup>
          <Label>Last name</Label>
          <InputField 
            onChange={props.onChangeInput}
            value={props.lastNameValue}
            name={props.lastName}
            placeholder="Last name" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <InputField 
            onChange={props.onChangeInput}
            value={props.emailValue} 
            type="email" 
            name={props.emailName} 
            placeholder="donor@gmail.com" />
        </FormGroup>
        <FormGroup>
          <Label>Address</Label>
          <InputField 
            onChange={props.onChangeInput}
            value={props.addressValue} 
            name={props.addressName} />
        </FormGroup>
        <FormGroup>
          <Label>City</Label>
          <InputField 
            onChange={props.onChangeInput}
            value={props.cityValue} 
            name={props.cityName} />
        </FormGroup>
        <FormGroup>
          <Label>State</Label>
          <InputField 
            onChange={props.onChangeInput}
            value={props.stateValue} 
            name={props.stateName} />
        </FormGroup>
        <FormGroup>
          <Label>Zip Code</Label>
          <InputField 
            onChange={props.onChangeInput}
            value={props.zipValue}  
            name={props.zipName} />
        </FormGroup>
        <FormGroup>
          <Label>Admin Status</Label>
          <AdminField 
            onChange={props.onChangeInput}
            value={props.adminValue} 
            name={props.adminName} />
        </FormGroup>
        <FormBtn
          disabled={props.disabled}
          onClick={props.onClickSubmit} 
          btnText="Submit"
          type="submit"          
        />
        <FormBtn 
          onClick={props.onClickDiscard} 
          className="ml-2"
          btnText="Discard"
        />
      </Form>
    </div>
  )
}

export default AddUserForm;