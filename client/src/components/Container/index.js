import React from "react";
import { Container } from "reactstrap";

// Container to hold main content of page after navbar
function MainContainer ({ children }) {
        return (
            <Container>{ children }</Container>
        )
}

export default MainContainer;