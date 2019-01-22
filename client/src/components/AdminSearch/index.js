import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./style.css";

// Search bar for 
function AdminSearch() {
  
  return (
    <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="search-input" className="mr-sm-2">Search term</Label>
          <Input type="text" name="search" id="search" placeholder="" />
        </FormGroup>
        <Label for="searchParam"></Label>
          <Input type="select" name="searchParam" id="searchParam">
            <option selected>Choose search field</option>
            <option>Name</option>
            <option>Age</option>
            <option>Location</option>
            <option>Grade</option>
          </Input>
        <Button className="ml-3">Search</Button>
      </Form>
  )
}

export default AdminSearch;