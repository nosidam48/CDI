import React, { Component } from "react";
import { Row } from "reactstrap";
import MainContainer from "../components/Container";
import KidsList from "../components/KidsList";
import FilterPublic from "../components/FilterPublic";
import API from "../utils/API";

class Kids extends Component {
    //set the kids state to an empty array
    state = {
        kids: []
    }
    //on mount call the function to return kids cards
    componentDidMount() {
        this.loadKidsUnsponsored();
    }
    //a function to get several kid profiles from the database
    loadKidsUnsponsored = () => {
        API.getKidsUnsponsored()
            .then(res =>
                this.setState({
                    kids: res.data
                })
            )
            .catch(err => console.log(err));
    };
    
    render() {
        return (
            <MainContainer>
                <Row>
                    <FilterPublic />
                    <KidsList state={this.state.kids}/>
                </Row>
            </MainContainer>
        )
    } 
}

export default Kids;






