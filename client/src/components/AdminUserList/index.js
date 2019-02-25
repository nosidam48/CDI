import React from "react";
import UpdateUserModal from "../UpdateUserModal";
import RemoveUserModal from "../RemoveUserModal";

function AdminUserList(props) {
    return (
        <div className="my-4">
            <h5>{props.firstName} {props.lastName}</h5>
            ID: {props.id}<br /> 
            Email: {props.email}<br />
            Address: {props.address}, {props.city}, {props.state} {props.zip}<br /> 
            
            {/* Button functions */}
            <div className="mt-2">
                {/* Button that toggles update child form and includes data from search*/ }
                <UpdateUserModal 
                    id={props.id}
                    firstName={props.firstName}
                    lastName={props.lastName}
                    email={props.email}
                    address={props.address}
                    city={props.city}
                    state={props.state}
                    zip={props.zip}
                    admin={props.admin}
                    masterAdmin={props.masterAdmin}
                    redoSearch={props.redoSearch}
                />                        
                {/* Button that opens RemoveKidModal */}
                <RemoveUserModal 
                    userId={props.id}
                    userFirstName={props.firstName}
                    userLastName={props.lastName}
                />
            </div>
            <hr />
        </div>
        
    )
}

export default AdminUserList;