import React from "react";
import { Button } from "reactstrap";
import UpdateKidModal from "../UpdateKidModal";
import RemoveKidModal from "../RemoveKidModal";


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
                {/* Button that opens modal to update/add kid info */}
                <UpdateKidModal />

                {/* Button that displays AdminDonorSearch */}
                <Button inline size="sm">Connect to donor</Button>

                {/* Button that opens RemoveKidModal */}
                <RemoveKidModal />
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
                <UpdateKidModal />
                <Button inline size="sm" className="mr-1">Connect to donor</Button>
                <RemoveKidModal />
            </div>
            <hr />
        </div>
        
    )
}

export default AdminKidList;