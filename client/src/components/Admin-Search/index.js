import React from "react";
import "./style.css";

function AdminSearch() {
  return(
  <form class="form-inline">
  <div class="form-group mx-sm-3 mb-2">
    <label for="search-input" class="sr-only">Search</label>
    <input type="text" class="form-control" id="search-input" placeholder="Search"/>
  </div>
  <div class="form-group">
    <label for="refine-search">Refine Search</label>
    <select class="form-control" id="refine-search">
      <option>Search All</option>
      <option>Name</option>
      <option>Age</option>
      <option>Location</option>
      <option>Grade</option>
      <option>Sponsored</option>
    </select>
  </div>
  <button type="submit" class="btn btn-primary mb-2">Search</button>
</form>
  )
}

export default AdminSearch