import React from "react";
import "./style.css";

function HomeSidebar({ children }) {
    return (
        <div class="col-md-2 p-0" id="sidebar">{children}
            <div class="small mx-2 mb-2" id="more">See more children available for sponsorship</div>
        </div>
    )
}

export default HomeSidebar