import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import ConnectDonorModal from "../ConnectDonorModal";

// Search bar to look up donor
function AdminDonorSearch() {
  
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
            <option>Email</option>
          </Input>
        
        {/* When search button is clicked, modal opens with donor info */}
        <ConnectDonorModal />
      </Form>
  )
}

export default AdminDonorSearch;