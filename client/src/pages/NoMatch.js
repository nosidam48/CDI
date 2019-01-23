import React, { Component } from "react";
import MainContainer from "../components/Container"

class NoMatch extends Component {
    render() {
        return (
            <div>
                <MainContainer>
                        <h1 className="text-center mt-5">Sorry, we can't find what you asked for.</h1>
                        <p className="text-center"><a href="/"><i className="fas fa-home mr-2" ></i>Back to Home</a></p>
                </MainContainer>
            </div>
        )
    } 
}

export default NoMatch;






