import React from "react";
import { Table } from "reactstrap";
import API from "../../utils/API";

// Displays table of kid results
class ViewAdmins extends React.Component {

    state = {
        admins: []
    }

    componentDidMount() {
        this.loadAdmins();
    }

    loadAdmins = (res) => {
    
        API.viewAdmins()
        .then(res => {
            this.setState({
                admins: res.data
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
                        <th>Master Level?</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.admins.map(admin => (
                    <tr key={admin.id}>
                        <th scope="row">1</th>
                        <td>{admin.first_name}</td>
                        <td>{admin.last_name}</td>
                        <td>{admin.email}</td>
                        <td>{admin.master_admin_status ? "Yes" : "No"}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )};
}

export default ViewAdmins;