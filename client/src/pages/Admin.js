import React, { Component } from "react";
import { Row } from "reactstrap";
import AddKidForm from "../components/Add-Kid-Form"
import AdminSidebar from "../components/Admin-Sidebar"
import AdminSearch from "../components/Admin-Search"
import AddAdmin from "../components/Add-Admin"
import MainContainer from "../components/Container"

class Admin extends Component {
    render() {
        return (
            <MainContainer>
                <Row>
                    <AdminSidebar/>
                    <AddKidForm/>
                </Row>
            </MainContainer>
        )
    } 
}

export default Admin;






