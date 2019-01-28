import React from "react";
import "./style.css";
import moment from "moment";

// Kid card that shows up in home page sidebar
function SidebarCard(props) {
    console.log("these be props " + props.kids);
    
    return (
        null
    // <div>
    //         {props.kids.length ? (
    //     <div>
    //             {props.kids.map(kid =>
    //     <div className="card border-0 m-2">
    //         <img className="card-img-top" src={kid.profile_pic} alt="Child" />
    //             <div className="card-body p-1">
    //                 <h6><strong>{kid.first_name} {kid.last_name}</strong></h6>
    //                 <div class="small"><i class="fas fa-birthday-cake mr-2"></i>{moment(kid.birth_date).format("MMMM D")}<br />
    //                 <i class="fas fa-globe-americas mr-2"></i>{kid.location}</div>
    //             </div>
    //     </div>
    //         )}
    //     </div>
    //     ) : (
    //         <h4 className="text-center">We're sorry. We're unable to display any kid profiles at this time.</h4>  
    //     )}
    // </div>    
    )}
                    
export default SidebarCard

