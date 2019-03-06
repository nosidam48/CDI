import React from "react";
import { push as Menu } from "react-burger-menu";
import "./style.css";

// Sidebar for admin page that shows regular admin tools
function AdminSidebar(props) {
  return (
    <Menu width={ 220 } {...props}>
        <div className="text-bold">Admin tools</div>
        <hr id="admin-line"/>
          {/* Add a child displays AddKidForm to be filled out */}
          <a className="mt-3" onClick={props.onClickAddKid}>Add a child</a>
          
          {/* Update child displays AdminKidSearch, which lets the admin search for a child */}
          <a onClick={props.onClickKidSearch}>Update child
            <ul className="small">
              <li>Update info</li>
              <li>Connect to donor</li>
              <li>Remove child</li>
            </ul>
          </a>

          {/* View all children, sponsored/unsponsored/both */}
          <a onClick={props.onClickMultipleKidSearch}>View Children</a>
          <hr id="admin-line"/>
      
      {/* Display, pass props to master admin sidebar */}
      <a className="mt-3" onClick={props.onClickAddUser}>Add User</a>
      <a onClick={props.onClickUserSearch}>Update User</a>
      <a onClick={props.onClickShowUsers}>View all users</a>
      <a onClick={props.onClickShowAdmins}>View all admins</a>
    </Menu>
  )
}

export default AdminSidebar