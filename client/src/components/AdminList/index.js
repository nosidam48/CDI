import React from "react";
import { Button } from "reactstrap";
import UpdateAdminModal from "../UpdateAdminModal";
import RemoveAdminModal from "../RemoveAdminModal";


// Displays list from admin search for kids
function AdminList() {
    return (
        <div className="my-4">
            <h4 className="mt-2 mb-4">Search Results</h4>
            <h5>John Doe</h5>
            ID: 001<br /> 
            Email: johndoe@gmail.com<br />
            Admin Level: Master<br /> 
            
            {/* Button functions */}
            <div className="mt-2">
                {/* Button that opens modal to update admin info */}
                <UpdateAdminModal />

                {/* Button that opens RemoveAdminModal */}
                <RemoveAdminModal />
            </div>
            <hr />
        </div>        
    )
}

export default AdminList;