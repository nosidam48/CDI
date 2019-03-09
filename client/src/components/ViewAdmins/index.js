import React from "react";
import { Table } from "reactstrap";
import API from "../../utils/API";
import LoadingSpinner from "../LoadSpinner";

// Displays table of kid results
class ViewAdmins extends React.Component {

    state = {
        admins: [],
        loading: false,
    }

    componentDidMount() {
        this.loadAdmins();
    }

    loadAdmins = (res) => {
        // Set loading to true so spinner displays
        this.setState({ loading: true });

        API.viewAdmins()
            .then(res => {
                this.setState({
                    admins: res.data,
                    loading: false
                })
            })
    }

    render() {
        return (
            <div>
                {/* Display loader until results come, then display results */}
                {this.state.loading ? <LoadingSpinner className="kidsSpin" />
                    : (
                        <Table>
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
                                        <th scope="row">{admin.id}</th>
                                        <td>{admin.first_name}</td>
                                        <td>{admin.last_name}</td>
                                        <td>{admin.email}</td>
                                        <td><span className="mobile-col">Master status? </span>{admin.master_admin_status ? "Yes" : "No"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
            </div>
        )
    };
}

export default ViewAdmins;