import React, { Component } from "react";
import AddKidForm from "../components/Add-Kid-Form"
import AdminSidebar from "../components/Admin-Sidebar"
import AdminSearch from "../components/Admin-Search"
import AddAdmin from "../components/Add-Admin"
import Container from "../components/Container"
import SidenavButton from "../components/Sidenav-Button";

class Admin extends Component {
    render() {
        return (
            <Container>
                <AdminSidebar/>
                <SidenavButton/>
                <AddKidForm/>
                <AdminSearch/>
                <AddAdmin/>
            </Container>
        )
    } 
}

export default Admin;






