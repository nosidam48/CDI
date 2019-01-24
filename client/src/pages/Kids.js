import React, { Component } from "react";
import { Row } from "reactstrap";
import MainContainer from "../components/Container";
import KidsList from "../components/KidsList";
import FilterPublic from "../components/FilterPublic";
import API from "../utils/API";

class Kids extends Component {
    state = {
        kids: []
    }

    componentDidMount() {
        this.loadKidsUnsponsored();
    }

    loadKidsUnsponsored = () => {
        console.log("load kids request sent")
        API.getKidsUnsponsored()
            .then(res =>
                console.log(res.data)
            )
            .catch(err => console.log(err));
    };
    
    render() {
        return (
            <MainContainer>
                <Row>
                    <FilterPublic />
                    <KidsList />
                </Row>
            </MainContainer>
        )
    } 
}

export default Kids;






