import React from "react";
import "./style.css";

function AddAdmin() {
  return(
  <form>
  <div class="form-group">
    <label for="name-input">User Name</label>
    <input type="text" class="form-control" id="name-input" placeholder="Name"/>
  </div>
  <div class="form-group">
    <label for="admin-pass">Your Admin Password</label>
    <input type="password" class="form-control" id="admin-pass" placeholder="Password"/>
  </div>
  <button type="submit" class="btn btn-primary mb-2">Add Admin</button>
  </form>
   )
}

export default AddAdmin