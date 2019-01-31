import React from "react";
import UpdateAdminModal from "../UpdateAdminModal";

function AdminUserList(props) {
    return (
        <div className="my-4">
            <h5>{props.firstName} {props.lastName}</h5>
            ID: {props.id}<br /> 
            Email: {props.email}<br />
            Password: {props.password}<br />
            Address: {props.user_address} {props.user_city} {props.user_state} {props.user_zip}<br /> 
            
            {/* Button functions */}
            <div className="mt-2">
                {/* Button that toggles update child form and includes data from search*/ }
                <UpdateAdminModal 
                    id={props.id}
                    firstName={props.firstName}
                    lastName={props.lastName}
                    email={props.email}
                    password={props.password}
                    address={props.user_address}
                    city={props.user_city}
                    state={props.user_state}
                    zip={props.user_zip}
                    redoSearch={props.redoSearch}
                />                        
                {/* Button that opens RemoveKidModal */}
                {/* <RemoveKidModal 
                    kidId={props.id}
                    kidFirstNames={props.firstNames}
                    kidLastName={props.lastName}
                /> */}
            </div>
            <hr />
        </div>
        
    )
}

export default AdminUserList;