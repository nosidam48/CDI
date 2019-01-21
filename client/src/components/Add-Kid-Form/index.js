import React from "react";
import Container from "../Container"
import "./style.css";

function AddKidForm() {
  return(
    <Container>
  <form>
  <div class="form-group">
    <label for="name-input">Name</label>
    <input type="text" class="form-control" id="name-input" placeholder="Name"/>
  </div>
  <div class="form-group">
    <label for="birthdate-input">Birthdate</label>
    <input type="date" class="form-control" id="birthdate-input" placeholder="Birthdate"/>
  </div>
  <div class="form-group">
    <label for="grade-input">Grade</label>
    <input type="text" class="form-control" id="grade-input" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="location-input">Location</label>
    <input type="text" class="form-control" id="location-input" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="bio-input">Biography</label>
    <textarea class="form-control" id="bio-input" row="3" placeholder="Short child bio"/>
  </div>
  <div class="form-group">
    <label for="add-photo">Add a Photo</label>
    <input type="file" class="form-control-file" id="add-photo"/>
  </div>
  <div class="form-group">
    <label for="add-message">Add a Note</label>
    <input type="file" class="form-control-file" id="add-message"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</Container>
  )
}

export default AddKidForm