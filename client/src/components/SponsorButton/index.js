import React from 'react';
import { Button } from 'reactstrap';
import "./style.css";

// Button to sponsor a child
function SponsorButton(props) {
    return <Button size="sm" href={"/kids/" + props.id} className="btn-sponsor">Sponsor Me!</Button>
};

export default SponsorButton;
