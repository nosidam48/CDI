import React from "react";
import { Table, Button } from "reactstrap";
import API from "../../utils/API";
// Displays table of kid results
class AdminMultipleKids extends React.Component {

    state = {
        kids: []
    }

    componentDidMount() {
        this.loadKids();
    }

    loadKids = (res) => {
        API.viewKids()
        .then(res => {
            this.setState({
                kids: res.data
            })
            
        }) 

    }

    sponsoredKids = (res) => {
        API.viewSponsored()
        .then(res => {
            this.setState({
                kids: res.data
            })
        })
    }

    unsponsoredKids = (res) => {
        API.getKidsUnsponsored()
        .then(res => {
            this.setState({
                kids: res.data
            })
        })
    }
 
    render() {
    return (
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
                        <th scope="row">1</th>
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
    )};
}

export default AdminMultipleKids;