import React from 'react';
import { Button } from 'reactstrap';

// Button to sponsor a child
function SponsorButton(props) {
    return (
        <a href="mailto:edccourtney@gmail.com?Subject=Child Sponsorship">    
            <Button size="sm" href="" className="btn-sponsor">Sponsor Me!</Button>
        </a>
    )
};

export default SponsorButton;
