import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import AddKidForm from "../components/Add-Kid-Form";
import AdminSidebar from "../components/Admin-Sidebar";
import AdminKidSearch from "../components/AdminKidSearch";
import AdminDonorSearch from "../components/AdminDonorSearch";
import AddAdmin from "../components/AddAdmin";
import AdminKidList from "../components/AdminKidList";
import ConnectDonorModal from "../components/ConnectDonorModal";
import MainContainer from "../components/Container";

class Admin extends Component {
    
    render() {
        return (
            <MainContainer>
                <Row>
                    <AdminSidebar/>
                    <Col xs="10" className="px-5">
                        {/* <AddKidForm/> */}
                        {/* <AddAdmin /> */}
                        {/* <AdminKidSearch /> */}
                        <AdminKidList />
                        <AdminDonorSearch />
                        {/* <ConnectDonorModal /> */}
                    </Col>
                </Row>
            </MainContainer>
        )
    } 
}

export default Admin;






