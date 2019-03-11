import React from "react";
import { Button, FormGroup, Input } from "reactstrap";
import "./style.css";

// Form inputs used throughout the site
export function InputField(props) {
  return (
    <FormGroup>
      <Input {...props} />
    </FormGroup>
  )
}

export function GenderField(props) {
  return (
    <FormGroup>
      <Input type="select" value={props.value} onChange={props.onChange} name={props.name} >
        <option value="">Gender</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </Input>
    </FormGroup>
  )
}

export function GradeField(props) {
  return (
    <FormGroup>
      <Input type="select" value={props.value} onChange={props.onChange} name={props.name} >
        <option value="">Choose a grade</option>
        <option>Pre-K</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>None</option>
      </Input>
    </FormGroup>
  )
}

export function LocationField(props) {
  return (
    <FormGroup>
      <Input type="select" value={props.location} onChange={props.onChange} name={props.name} >
        <option value="">Location</option>
        <optgroup label="El Salvador" />
        <option value="El Guayabo, El Salvador">-- El Guayabo</option>
        <option value="La Libertad, El Salvador">-- La Libertad</option>
        <option value="Soyapango, El Salvador">-- Soyapango</option>
        <optgroup label="Honduras" />
        <option value="Choluteca, Honduras">-- Choluteca</option>
        <option value="Danli, Honduras">-- Danli</option>
        <option value="La Ceiba, Honduras">-- La Ceiba</option>
        <option value="La Lima, Honduras">-- La Lima</option>
        <option value="Los Cruces, Honduras">-- Los Cruces</option>
        <option value="San Pedro Sula, Honduras">-- San Pedro Sula</option>
        <optgroup label="Guatemala" />
        <option value="Guatemala City, Guatemala">-- Guatemala City</option>
        <optgroup label="Nicaragua" />
        <option value="Managua, Nicaragua">-- Managua</option>
      </Input>
    </FormGroup>
  )
}
export function UploadPhoto(props) {
  return (
    <FormGroup>
      <Input type="file" {...props} />
    </FormGroup> 
  )
}

export function SearchType(props) {
  return (
    <FormGroup id={props.id}>
      <Input type="select" className="mr-2" value={props.value} onChange={props.onChange} name={props.name} >
        <option value="Name">Name</option>
        <option value="Location">Location</option>
      </Input>
    </FormGroup>
  )
}

export function UserSearchType(props) {
  return (
    <FormGroup id={props.id}>
      <Input type="select" className="mx-2" value={props.value} onChange={props.onChange} name={props.name} >
        <option>Name</option>
        <option>Email</option>
      </Input>
    </FormGroup>
  )
}

export function AdminField(props) {
  return (
    <FormGroup>
      <Input type="select" value={props.value} onChange={props.onChange} name={props.name} >
        <option value="No">No admin status</option>
        <option value="Regular admin status">Regular admin status</option>
        <option value="Master admin status">Master admin status</option>
      </Input>
    </FormGroup>
  )
}

export function FormBtn(props) {
  return (
    <Button 
      inline="true" 
      className={props.className} 
      type={props.type} 
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.btnText}
    </Button>
  )
}
