import React from "react";
import "./style.css";

function HomeMain({ children }) {
    return (
        <div className="col-md-10">
            <img src="../images/cdi-logo.png" class="pl-3" id="home-logo" alt="logo" />

            <h5>Centro de Desarrollo Infantil (Children Development Center) oversees the health and development of at-risk boys and girls.</h5>
            <p>We believe that the impact we might be able to have in these children’s lives is limited and temporary and the only solution for a long-term impact is for each child to understand how important they are to God and that He has a perfect plan for each of their lives.</p>
            We have four areas in which we serve at-risk kids:
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
            <p><a href="/kids">See the children who are available for sponsorship.</a></p>
            <p>Already a donor? <a href="/login">Sign in</a> to see updates for the child you sponsor.</p>
        </div>              
    )
}

export default HomeMain