import React from "react";
import { Col, Button } from "reactstrap";
import "./style.css";

// Main content for home page
function HomeMain(props) {
    return (
        <Col sm="8" md="9" lg="10" className="pl-0 pr-4" id="main-container">
            <h3>Centro de Desarrollo Infantil (Children Development Center) oversees the health and development of at-risk boys and girls.</h3>
            <br />
            <p>We believe that the impact we might be able to have in these children’s lives is limited and temporary and the only solution for a long-term impact is for each child to understand how important they are to God and that He has a perfect plan for each of their lives.</p>
            We have four areas in which we serve at-risk kids:
            <img src="../images/cdi-logo.png" className="pl-3" id="home-logo" alt="logo" />
            <ul>
                <li>Nutritional meals/dietary supplements as needed</li>
                <li>Academic support (tutoring and support for the family with uniforms and school supplies)</li>
                <li>Medical and dental care</li>
                <li>Spiritual guidance</li>
            </ul>
            <p>This is only the base of what CDI does. We are sensitive to the different cultures of each city where we have a center so that we can better prepare each child for a future there.</p>

            We also provide help in the following areas:
            <ul>
                <li>Computer classes</li>
                <li>English-as-a-second-language classes</li>
                <li>Carpentry and jewelry-making classes, as well as lessons in other areas for potential future employment</li>
            </ul>

            <p>Your sponsorship of $45/month for a preK-6th grade student or $58/month for a 7th-12th grade student provides the opportunity for a child to attend a CDI near him or her.</p>
            <p><a href="/kids"><i className="fas fa-child mr-2"></i>See the children who are available for sponsorship.</a></p>
            <p><Button id="signIn" onClick={props.onClick}><i className="fas fa-chevron-circle-right mr-2"></i>Already a donor? Sign in</Button> to see updates for the child you sponsor.</p>
        </Col>              
    )
}

export default HomeMain