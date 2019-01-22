import React from "react";
import { Button } from "reactstrap";

// Displays list from admin search for kids
function AdminKidList() {
    return (
        <div className="my-4">
            <h4 className="mt-2 mb-4">Search Results</h4>
            <h5>Bairon Duban Guillen</h5>
            ID: 001<br /> 
            Birthdate: 4/23/2003<br />
            Grade: 8th<br /> 
            Location: Choluteca, Honduras<br />
            Needs sponsor?: Yes<br />
            
            {/* Button functions */}
            <div className="mt-2">
                <Button inline size="sm" className="mr-1">Update info</Button>
                <Button inline size="sm" className="mr-1">Connect to donor</Button>
                <Button inline size="sm" className="mr-1">Remove child</Button>
            </div>
            <hr />
            <h5>Bairon Duban Guillen</h5>
            ID: 001<br /> 
            Birthdate: 4/23/2003<br />
            Grade: 8th<br /> 
            Location: Choluteca, Honduras<br />
            Needs sponsor?: Yes<br />
            
            {/* Button functions */}
            <div className="mt-2">
                <Button inline size="sm" className="mr-1">Update info</Button>
                <Button inline size="sm" className="mr-1">Connect to donor</Button>
                <Button inline size="sm" className="mr-1">Remove child</Button>
            </div>
            <hr />
        </div>
        
    )
}

export default AdminKidList;