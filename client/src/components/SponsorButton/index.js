import React from 'react';
import { Button } from 'reactstrap';
import "./style.css";

function SponsorButton({ children }) {
    return <Button size="sm" className="btn-sponsor">Sponsor Me!</Button>
};

export default SponsorButton;
