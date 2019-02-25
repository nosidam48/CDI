import React from "react";
import { Table, Button } from "reactstrap";
import API from "../../utils/API";
import LoadingSpinner from "../LoadSpinner";

// Displays table of kid results
class AdminMultipleKids extends React.Component {
    state = {
        kids: [],
        loading: false
    }
    componentDidMount() {
        this.loadKids();
    }
    // Loads all kids when admin chooses View All
    loadKids = (res) => {
        // Set loading to true so spinner displays
        this.setState({ loading: true });

        // Make db call
        API.viewKids()
            .then(res => {
                this.setState({
                    kids: res.data,
                    loading: false
                })
                window.scrollTo(0, 0);
            })
    }
    // Loads only sponsored kids
    sponsoredKids = (res) => {
        // Set loading to true so spinner displays
        this.setState({ loading: true });

        API.viewSponsored()
            .then(res => {
                this.setState({
                    kids: res.data,
                    loading: false
                })
                window.scrollTo(0, 0);
            })
    }
    // Loads only unsponsored kids
    unsponsoredKids = (res) => {
        // Set loading to true so spinner displays
        this.setState({ loading: true });

        API.getKidsUnsponsored()
            .then(res => {
                this.setState({
                    kids: res.data,
                    loading: false
                })
                window.scrollTo(0, 0);
            })
    }
    render() {
        return (
            <div>
                {/* Display loader until results come, then display results */}
                {this.state.loading ? <LoadingSpinner className="kidsSpin" />
                    : (
                        <div>
                            <Button inline="true" size="sm" className="mr-2" onClick={this.loadKids}>View all children</Button>
                            <Button inline="true" size="sm" className="mr-2" onClick={this.sponsoredKids}>View sponsored children</Button>
                            <Button inline="true" size="sm" onClick={this.unsponsoredKids}>View unsponsored children</Button>
                            <Table className="mt-3">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>First Names</th>
                                        <th>Last Name</th>
                                        <th>Birthdate</th>
                                        <th>Grade</th>
                                        <th>Location</th>
                                        <th>Need Sponsor?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.kids.map(kid => (
                                        <tr key={kid.id}>
                                            <th scope="row">{kid.id}</th>
                                            <td>{kid.first_name}</td>
                                            <td>{kid.last_name}</td>
                                            <td>{kid.birth_date}</td>
                                            <td>{kid.grade}</td>
                                            <td>{kid.location}</td>
                                            <td>{kid.need_sponsor ? "Yes" : "No"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    )}
            </div>
        )
    };
}

export default AdminMultipleKids;