import React from "react";
import { Table } from "reactstrap";
import API from "../../utils/API";
import LoadingSpinner from "../LoadSpinner";

// Displays table of kid results
class ViewUsers extends React.Component {

    state = {
        users: [],
        loading: false
    }

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = (res) => {
        // Set loading to true so spinner displays
        this.setState({ loading: true });

        API.viewUsers()
            .then(res => {
                this.setState({
                    users: res.data,
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
                        <Table className="mt-3">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First Names</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Children Sponsored</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.users.map(user => (
                                    <tr key={user.id}>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                        {user.kids.map(kid =>
                                            <td key={kid.id}><a href={"/kids/" + kid.id}>{kid.first_name}</a></td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
            </div>
        )
    };
}

export default ViewUsers;