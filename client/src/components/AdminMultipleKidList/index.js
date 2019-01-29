import React from "react";
import { Table, Button } from "reactstrap";

// Displays table of kid results
function AdminMultipleKids() {
    return (
        <div>
            <Button inline="true" size="sm" className="mr-2">View all children</Button>
            <Button inline="true" size="sm" className="mr-2">View sponsored children</Button>
            <Button inline="true" size="sm">View unsponsored children</Button>
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Bairon</td>
                        <td>Duban Guillen</td>
                        <td>4/23/03</td>
                        <td>8th</td>
                        <td>Choluteca, Honduras</td>
                        <td>Yes</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Bairon</td>
                        <td>Duban Guillen</td>
                        <td>4/23/03</td>
                        <td>8th</td>
                        <td>Choluteca, Honduras</td>
                        <td>Yes</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default AdminMultipleKids;