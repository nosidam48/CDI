import React from "react";
import { Col, ListGroup, ListGroupItem } from "reactstrap";
import AdminMasterSidebar from "../AdminMasterSidebar"
import "./style.css";

function AdminSidebar() {
  return(
    <Col xs="2" className="p-0 m-0">
      <div className="label">
        <h6 className="text-uppercase text-center p-2 mb-0 label-text">Admin tools</h6>
      </div>
      <ListGroup>
          <ListGroupItem tag="button" action>Add a child</ListGroupItem>
          <ListGroupItem tag="button" action>Update child</ListGroupItem>
          <ListGroupItem tag="button" action>Connect child with donor</ListGroupItem>
          <ListGroupItem tag="button" action>Delete child</ListGroupItem>
      </ListGroup>
      <AdminMasterSidebar />
    </Col>
    
  )
}

export default AdminSidebar