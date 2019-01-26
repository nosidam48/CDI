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
        <option>Female</option>
        <option>Male</option>
      </Input>
    </FormGroup>
  )
}

export function GradeField(props) {
  return (
    <FormGroup>
      <Input type="select" value={props.value} onChange={props.onChange} name={props.name} >
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
      <Input type="select" value={props.value} onChange={props.onChange} name={props.name} >
        <optgroup label="El Salvador" />
        <option>El Guayabo, El Salvador</option>
        <option>La Libertad, El Salvador</option>
        <option>Soyapango, El Salvador</option>
        <optgroup label="Honduras" />
        <option>Choluteca, Honduras</option>
        <option>Danli, Honduras</option>
        <option>La Ceiba, Honduras</option>
        <option>La Lima, Honduras</option>
        <option>Los Cruces, Honduras</option>
        <option>San Pedro Sula, Honduras</option>
        <optgroup label="Guatemala" />
        <option>Guatemala City, Guatemala</option>
        <optgroup label="Nicaragua" />
        <option>Managua, Nicaragua</option>
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
    <FormGroup>
      <Input type="select" className="mx-2" value={props.value} onChange={props.onChange} name={props.name} >
        <option>Name</option>
        <option>Location</option>
      </Input>
    </FormGroup>
  )
}

export function SubmitBtn(props) {
  return (
    <Button inline {...props}>Submit </Button>
  )
}

export function DiscardBtn(props) {
  return (
    <Button inline className="ml-2" {...props}>Discard</Button> 
  )
}

