import React from "react";
import { Button } from "reactstrap";
import UpdateKidModal from "../UpdateKidModal";
import RemoveKidModal from "../RemoveKidModal";


// Displays list from admin search for kids
function AdminKidList(props) {
    return (
        <div className="my-4">
            <h5>{props.firstName} {props.lastName}</h5>
            ID: {props.id}<br /> 
            Birthdate: {props.birthdate}<br />
            Grade: {props.grade}<br /> 
            Location: {props.location}<br />
            Needs sponsor?: {props.needSponsor ? "Yes" : "No"}<br />
            
            {/* Button functions */}
            <div className="mt-2">
                {/* Button that toggles update child form and includes data from search*/ }
                <UpdateKidModal />                

                {/* Button that displays AdminDonorSearch */}
                <Button inline size="sm">Connect to donor</Button>

                {/* Button that opens RemoveKidModal */}
                <RemoveKidModal />
            </div>
            <hr />
        </div>
        
    )
}

export default AdminKidList;