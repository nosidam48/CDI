import React from "react";
import { Table } from "reactstrap";
import API from "../../utils/API";

// Displays table of kid results
class ViewDonors extends React.Component {

    state = {
        donors: []
    }

    componentDidMount() {
        this.loadDonors();
    }

    loadDonors = (res) => {
    
        API.viewDonors()
        .then(res => {
            this.setState({
                donors: res.data
            })
            
        }) 

    }

    render() {
    return (
        <div>
            <Table className="mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Names</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Children Sponsored (ID)</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.donors.map(donor => (
                    <tr key={donor.id}>
                        <th scope="row">1</th>
                        <td>{donor.first_name}</td>
                        <td>{donor.last_name}</td>
                        <td>{donor.email}</td>
                        <td><a href={"/kids/" + donor.kids[0].id} >{donor.kids[0].first_name}</a></td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )};
}

export default ViewDonors;