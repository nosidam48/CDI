import React from "react";
import UpdateAdminModal from "../UpdateAdminModal";

function AdminUserList(props) {
    return (
        <div className="my-4">
            <h5>{props.firstNames} {props.lastName}</h5>
            ID: {props.id}<br /> 
            Gender: {props.gender}<br />
            Birthdate: {props.birthdate}<br />
            Grade: {props.grade}<br /> 
            Location: {props.location}<br />
            Needs sponsor?: {props.needSponsor ? "Yes" : "No"}<br />
            
            {/* Button functions */}
            <div className="mt-2">
                {/* Button that toggles update child form and includes data from search*/ }
                <UpdateAdminModal 
                    id={props.id}
                    firstNames={props.firstNames}
                    lastName={props.lastName}
                    gender={props.gender}
                    birthdate={props.birthdate}
                    grade={props.grade}
                    location={props.location}
                    bio={props.bio}
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