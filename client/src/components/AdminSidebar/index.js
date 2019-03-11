import React from "react";
import { Button } from "reactstrap";
import { push as Menu } from "react-burger-menu";
import "./style.css";

// Sidebar for admin page that shows regular admin tools
function AdminSidebar(props) {
  return (
    <Menu width={ 220 } {...props}>
        <div id="admin-head">Admin tools</div>
        <hr id="admin-line"/>
          {/* Add a child displays AddKidForm to be filled out */}
          <Button id="admin-btn" className="mt-3" onClick={props.onClickAddKid}>Add child</Button>
          
          {/* Update child displays AdminKidSearch, which lets the admin search for a child */}
          <Button id="admin-btn" onClick={props.onClickKidSearch}>Update child</Button>

          {/* View all children, sponsored/unsponsored/both */}
          <Button id="admin-btn" onClick={props.onClickMultipleKidSearch}>View all children</Button>
          <hr id="admin-line"/>
      
      {/* Display, pass props to master admin sidebar */}
      <Button id="admin-btn" className="mt-3" onClick={props.onClickAddUser}>Add user</Button>
      <Button id="admin-btn" onClick={props.onClickUserSearch}>Update user</Button>
      <Button id="admin-btn" onClick={props.onClickShowUsers}>View all users</Button>
      <Button id="admin-btn" onClick={props.onClickShowAdmins}>View all admins</Button>
    </Menu>
  )
}

export default AdminSidebar