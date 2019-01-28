import React from "react";
import { Col } from "reactstrap";
import "./style.css";

// Sidebar on home page that shows unsponsored kids
function HomeSidebar({ children }) {
    return (
        <Col sm= "4" md="3" lg="2" className="p-0" id="sidebar">{children}
            <div className="small mx-2 mb-2">
                <a href="/kids" className="white-text" id="more">
                   <i className="fas fa-child mr-2"></i>See more</a>
            </div>
        </Col>
    )
}

export default HomeSidebar