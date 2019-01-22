import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./style.css";

// Sidebar to show tools for master admins
function AdminMasterSidebar() {
  return (
    <div>
      <div className="label">
        <h6 className="text-uppercase text-center p-2 mb-0 label-text">Master Admin tools</h6>
      </div>
      <ListGroup>
          <ListGroupItem tag="button" action>Add donor</ListGroupItem>
          <ListGroupItem tag="button" action>Add admin</ListGroupItem>
          <ListGroupItem tag="button" action>Update admin</ListGroupItem>
          <ListGroupItem tag="button" action>Message donor</ListGroupItem>
      </ListGroup>
    </div>    
  )
}

export default AdminMasterSidebar;