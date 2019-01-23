import React from "react";
import { Table } from "reactstrap";

// Displays table of kid results
function ViewAdmins() {
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
                    <tr>
                        <th scope="row">1</th>
                        <td>John</td>
                        <td>Doe</td>
                        <td>johndoe@gmail.com</td>
                        <td>Master</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th scope="row">2</th>
                        <td>John</td>
                        <td>Doe</td>
                        <td>johndoe@gmail.com</td>
                        <td>No</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default ViewAdmins;