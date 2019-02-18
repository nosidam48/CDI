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
          <ListGroupItem onClick={props.onClickUserSearch} tag="button" action>Update User</ListGroupItem>
          <ListGroupItem onClick={props.onClickShowUsers} tag="button" action>View all users</ListGroupItem>
          <ListGroupItem onClick={props.onClickShowAdmins} tag="button" action>View all admins</ListGroupItem>
      </ListGroup>
    </div>    
  )
}

export default AdminMasterSidebar;