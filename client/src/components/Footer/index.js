import React from "react";
import "./style.css";

// Calculate date for footer
let d = new Date();
let year = d.getFullYear();

// Footer
function Footer (props) {
        return (
            <footer>
                <div className="text-center small">&copy; {year} Centro de Desarrollo Infantil</div></footer>
        )
}

export default Footer;