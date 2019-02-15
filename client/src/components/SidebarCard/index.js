import React from "react";
import "./style.css";

// Kid card that shows up in home page sidebar
function SidebarCard(props) {
    return (
        <div>
            {/* If db call was successful, display info. If not, alert user */}
            {props.kids.length ? (
                <div>
                    {props.kids.map(kid =>
                        <div key={kid.id} className="card border-0 m-2">
                            <img className="card-img-top" src={kid.profile_image} alt="Child" />
                            <div className="card-body p-1">
                                <h6><strong><a href={"/kids/" + kid.id}>{kid.first_name}
                                </a></strong></h6>
                                <div className="small"><i className="fas fa-birthday-cake mr-2"></i>{props.age(kid.birth_date) + " years old"}<br />
                                    <i className="fas fa-globe-americas mr-2"></i>{kid.location}</div>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                    <p className="text-center m-2 noData">We're sorry. We're unable to display any kid profiles at this time.</p>
                )}
        </div>
    )
}

export default SidebarCard

