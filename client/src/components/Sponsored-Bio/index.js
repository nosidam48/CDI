import React from "react";
import { Col } from "reactstrap";
import moment from "moment";

// Displays text to donor of child they sponsor
function SponsoredBio(props) {
  return (
    <Col sm="7" lg="8" className="my-4">
      <h2 className="font-weight-bold">{props.kid.first_name} {props.kid.last_name}</h2>
      <h5><span className="font-weight-bold">Age: </span>{props.age(props.kid.birth_date)}</h5>
      <h5><span className="font-weight-bold">Grade: </span>{props.kid.grade} </h5>
      <h5><span className="font-weight-bold">Location: </span>{props.kid.location}</h5>
      <h5 className="text-uppercase mt-4">About {props.kid.first_name}</h5>
      <p>{props.kid.kid_bio}</p>
      <h5 className="text-uppercase mt-4">Latest messages</h5>
      <div>
        {props.notes.map(note => (
          <div key={note.id}>
            <span className="small font-italic">{moment(note.createdAt).format("MMMM D, YYYY")}</span>
            <p>{note.kid_notes}</p>
            <hr />
          </div>
        ))}
      </div>
    </Col>
  );
}
export default SponsoredBio;
