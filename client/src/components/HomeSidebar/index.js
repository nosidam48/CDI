import React from "react";
import "./style.css";

function HomeSidebar({ children }) {
    return (
        <div className="col-md-2 p-0" id="sidebar">{children}
            <div className="small mx-2 mb-2">
                <a href="/kids" className="white-text" id="more">
                   <i className="fas fa-child mr-2"></i>See more</a>
            </div>
        </div>
    )
}

export default HomeSidebar