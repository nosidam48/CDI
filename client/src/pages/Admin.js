import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import AddKidForm from "../components/AddKidForm";
import AdminSidebar from "../components/AdminSidebar";
import AdminKidSearch from "../components/AdminKidSearch";
import AdminMultipleKids from "../components/AdminMultipleKidList";
import AdminDonorSearch from "../components/AdminDonorSearch";
import AddAdmin from "../components/AddAdmin";
import AdminKidList from "../components/AdminKidList";
import AddDonorForm from "../components/AddDonorForm";
import ConnectDonorModal from "../components/ConnectDonorModal";
import MainContainer from "../components/Container";
import AdminMasterSidebar from "../components/AdminMasterSidebar";

class Admin extends Component {
    state = {
        showAddKidForm: false,
        showKidSearch: false,
        showMultipleKids: false,
        showAddDonorForm: false
    };

    // Toggles display of form to add a kid
    toggleAddKidForm = () => {
        this.setState({
            showAddKidForm: !this.state.showAddKidForm,
            showKidSearch: false,
            showMultipleKids: false,
            showAddDonorForm: false
        });
    }

    // Lets admin search for specific kid
    showKidSearch = () => {
        this.setState({
            showKidSearch: true,
            showAddKidForm: false,
            showMultipleKids: false,
            showAddDonorForm: false
        })
    }

    // Lets admin search for group of kids
    showMultipleKids = () => {
        this.setState({
            showMultipleKids: true,
            showKidSearch: false,
            showAddKidForm: false,
            showAddDonorForm: false
        })
    }

    // Toggles display of form to add a donor
    toggleAddDonorForm = () => {
        console.log("click worked")
        this.setState({
            showAddKidForm: false,
            showKidSearch: false,
            showMultipleKids: false,
            showAddDonorForm: !this.state.showAddDonorForm
        });
    }
    
    render() {
        return (
            <MainContainer>
                <Row>
                    {/* Displays the AdminSidebar with needed props */}
                    <AdminSidebar 
                        onClickAddKid={this.toggleAddKidForm}
                        onClickKidSearch={this.showKidSearch}
                        onClickMultipleKidSearch={this.showMultipleKids} 
                        onClickAddDonor={this.toggleAddDonorForm}
                    />
                    <Col xs="10" className="px-5">
                        {/* Shows AddKidForm if true and passes onClick to AddKidForm button */}
                        {this.state.showAddKidForm ? 
                            <AddKidForm onClickAddKid={this.toggleAddKidForm} /> :
                            null
                        }
                        {/* Shows kid search bar if true */}
                        {this.state.showKidSearch ? 
                            <AdminKidSearch /> :
                            null
                        }
                        {/* <AdminKidList /> */}
                        
                        {/* Shows multiple kids  */}
                        {this.state.showMultipleKids ?
                            <AdminMultipleKids /> : 
                            null
                        }
                        {/* Shows form to add donor */}
                        {this.state.showAddDonorForm ?
                            <AddDonorForm 
                                onClickAddDonor={this.toggleAddDonorForm}
                            /> : 
                            null
                        }
                        {/* <AdminDonorSearch /> */}
                        {/* <ConnectDonorModal /> */}
                        {/* <AddAdmin /> */}
                    </Col>
                </Row>
            </MainContainer>
        )
    } 
}

export default Admin;






