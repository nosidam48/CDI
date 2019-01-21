import React from "react";
import "./style.css";

function AdminSidebar() {
  return(
    <div className="wrapper">
    <nav id="sidebar" className="">
        <div class="sidebar-header">
            <h3>Admin Tools</h3>
        </div>
        <ul class="list-unstyled components"/>
            <li>Add a Child</li>
            <li>Search for a Child</li>
            <p>__________________________________</p>
            <li>Add an Admin</li>
    </nav> 
    </div>
  )
}

export default AdminSidebar