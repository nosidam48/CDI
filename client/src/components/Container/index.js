import React from "react";
import { Container } from "reactstrap";

// Container to hold main content of page after navbar
function MainContainer ({ children }) {
        return (
            <Container className="container my-3">{ children }</Container>
        )
}

export default MainContainer;