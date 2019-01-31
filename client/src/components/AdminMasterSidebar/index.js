import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./style.css";

// Sidebar to show tools for master admins
function AdminMasterSidebar(props) {
  return (
    <div>
      <div className="label">
        <h6 className="text-uppercase text-center p-2 mb-0 label-text">Master Admin tools</h6>
      </div>
      <ListGroup>
          <ListGroupItem onClick={props.onClickAddUser} tag="button" action>Add User</ListGroupItem>
          <ListGroupItem onClick={props.onClickAdminSearch} tag="button" action>Admin Search</ListGroupItem>
          <ListGroupItem onClick={props.onClickShowDonors} tag="button" action>View all donors</ListGroupItem>
          <ListGroupItem onClick={props.onClickShowAdmins} tag="button" action>View all admins</ListGroupItem>
      </ListGroup>
    </div>    
  )
}

export default AdminMasterSidebar;