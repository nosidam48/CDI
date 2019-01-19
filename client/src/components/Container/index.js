import React from "react";
import "./style.css";

function Container({ children }) {
    return (
        <div className="container my-3">{children}</div>
    )
}

export default Container