import React from "react";
import { Row } from "reactstrap";
import MainContainer from "../components/Container";
import PublicKidList from "../components/PublicKidList";
import FilterPublic from "../components/FilterPublic";
import API from "../utils/API";

// Store today's date in a variable
let todayDate = new Date();

// Calculate age by using today's date and birthdate
export const calculateAge = (dateString, today) => {
    let birthday = new Date(dateString);
    // Use .getFullYear method to set age variable by subtracting birth year from current year
    let age = today.getFullYear() - birthday.getFullYear();
    // Use .getMonth method to subtract birth month from current month
    let months = today.getMonth() - birthday.getMonth();
    // If months is less than 0 or if months = 0 and days in the current month is less than days in birth month, decrease age by a year
    if (months < 0 || (months === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    return age;
}

class Kids extends React.Component {
    constructor(props) {
        super(props);

        //set the kids state to an empty array
        this.state = {
            kids: [],
            loading: true,
            location: "",
            gender: "",
        }
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
                    kids: res.data,
                    loading: false
                })
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    };

    handleSubmit = (event) => {
        event.preventDefault()
        // Set state to loading so spinner appears while getting data
        this.setState({
            loading: true
        })
        API.getKidsSearch({
            location: this.state.location,
            gender: this.state.gender
        })
            .then(res => {
                this.setState({
                    kids: res.data,
                    loading: false
                })
            }).catch(err => console.log(err))
    }

    render() {
        return (
            <MainContainer>
                <Row>
                    <FilterPublic
                        onChange={this.handleInputChange}
                        onClick={this.handleSubmit}
                        value={this.state} />
                    <PublicKidList
                        kids={this.state.kids}
                        todayDate={todayDate}
                        calculateAge={calculateAge}
                        loading={this.state.loading}
                        email={this.props.email}
                    />
                </Row>
            </MainContainer>
        )
    }
}

export default Kids;






