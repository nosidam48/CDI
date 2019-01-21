import React from "react";
import { Container } from "reactstrap";

function MainContainer ({ children }) {
        return (
            <Container className="container my-3">{ children }</Container>
        )
}

export default MainContainer;