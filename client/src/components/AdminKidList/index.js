import React from "react";
import UpdateKidModal from "../UpdateKidModal";
import AddContentModal from "../AddContentModal";
import RemoveKidModal from "../RemoveKidModal";
import ConnectDonorModal from "../ConnectDonorModal";


// Displays list from admin search for kids
function AdminKidList(props) {
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
                <UpdateKidModal 
                    id={props.id}
                    firstNames={props.firstNames}
                    lastName={props.lastName}
                    gender={props.gender}
                    birthdate={props.birthdate}
                    grade={props.grade}
                    location={props.location}
                    bio={props.bio}
                />                
                {/* Button that displays form to add updates to a kid */}
                <AddContentModal
                    kidId={props.id}
                    kidFirstNames={props.firstNames}
                    kidLastName={props.lastName}
                    onChange={props.onChange}
                />              
                {/* Button that displays AdminDonorSearch */}
                <ConnectDonorModal
                    kidId={props.id}
                    kidFirstNames={props.firstNames}
                    kidLastName={props.lastName}
                    onChange={props.onChange}    
                />
                {/* Button that opens RemoveKidModal */}
                <RemoveKidModal 
                    kidId={props.id}
                    kidFirstNames={props.firstNames}
                    kidLastName={props.lastName}
                    onClick={props.onClick}
                />
            </div>
            <hr />
        </div>
        
    )
}

export default AdminKidList;