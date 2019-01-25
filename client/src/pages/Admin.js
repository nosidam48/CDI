import React, { Component } from "react";
import { Row, Col, Form, Label } from "reactstrap";
import { InputField, GenderField, GradeField, LocationField, UploadPhoto, SubmitBtn, DiscardBtn } from "../components/Form";
import AdminSidebar from "../components/AdminSidebar";
import AdminKidSearch from "../components/AdminKidSearch";
import AdminMultipleKids from "../components/AdminMultipleKidList";
// import AdminDonorSearch from "../components/AdminDonorSearch";
import AddAdmin from "../components/AddAdmin";
import AdminKidList from "../components/AdminKidList";
import AddDonorForm from "../components/AddDonorForm";
import AdminSearch from "../components/AdminSearch";
import ViewDonors from "../components/ViewDonors";
import ViewAdmins from "../components/ViewAdmins";
// import AdminList from "../components/AdminList";
// import ConnectDonorModal from "../components/ConnectDonorModal";
import MainContainer from "../components/Container";
import API from "../utils/API";

class Admin extends Component {
    state = {
        // Toolbar functions
        showAddKidForm: false,
        showKidSearch: false,
        showMultipleKids: false,
        showAddDonorForm: false,
        showAddAdmin: false,
        showAdminSearch: false,
        showDonors: false,
        showAdmins: false,
        success: false,

        // Success message
        message: "",

        // Add Kid inputs
        kidFirstNames: "",
        kidLastName: "",
        gender: "",
        birth_date: "",
        grade: "",
        kidLocation: "",
        bio: "",

        // Photo upload
        selectedFile: null

    };

    // FUNCTIONS FOR TOOLBAR ON LEFT================================================
    // Toggles display of form to add a kid
    toggleAddKidForm = () => {
        this.setState({
            showAddKidForm: !this.state.showAddKidForm,
            showKidSearch: false,
            showMultipleKids: false,
            showAddDonorForm: false,
            showAddAdmin: false,
            showAdminSearch: false,
            showDonors: false,
            showAdmins: false,
            success: false,
        });
    }
    // Lets admin search for specific kid
    showKidSearch = () => {
        this.setState({
            showKidSearch: true,
            showAddKidForm: false,
            showMultipleKids: false,
            showAddDonorForm: false,
            showAddAdmin: false,
            showAdminSearch: false,
            showDonors: false,
            showAdmins: false,
            success: false,
        })
    }
    // Lets admin search for group of kids
    showMultipleKids = () => {
        this.setState({
            showMultipleKids: true,
            showKidSearch: false,
            showAddKidForm: false,
            showAddDonorForm: false,
            showAddAdmin: false,
            showAdminSearch: false,
            showDonors: false,
            showAdmins: false,
            success: false,
        })
    }
    // Toggles display of form to add a donor
    toggleAddDonorForm = () => {
        this.setState({
            showAddKidForm: false,
            showKidSearch: false,
            showMultipleKids: false,
            showAddDonorForm: !this.state.showAddDonorForm,
            showAddAdmin: false,
            showAdminSearch: false,
            showDonors: false,
            showAdmins: false,
            success: false,
        });
    }
    // Toggles display of form to add a donor
    toggleAddAdmin = () => {
        this.setState({
            showAddKidForm: false,
            showKidSearch: false,
            showMultipleKids: false,
            showAddDonorForm: false,
            showAddAdmin: !this.state.showAddAdmin,
            showAdminSearch: false,
            showDonors: false,
            showAdmins: false,
            success: false,
        });
    }
    // Lets admin search for admin
    showAdminSearch = () => {
        this.setState({
            showKidSearch: false,
            showAddKidForm: false,
            showMultipleKids: false,
            showAddDonorForm: false,
            showAddAdmin: false,
            showAdminSearch: true,
            showDonors: false,
            showAdmins: false,
            success: false,
        })
    }
    // Lets admin see all donors
    showDonors = () => {
        this.setState({
            showMultipleKids: false,
            showKidSearch: false,
            showAddKidForm: false,
            showAddDonorForm: false,
            showAddAdmin: false,
            showAdminSearch: false,
            showDonors: true,
            showAdmins: false,
            success: false,
        })
    }
    // Lets admin see all admins
    showAdmins = () => {
        this.setState({
            showMultipleKids: false,
            showKidSearch: false,
            showAddKidForm: false,
            showAddDonorForm: false,
            showAddAdmin: false,
            showAdminSearch: false,
            showDonors: false,
            showAdmins: true,
            success: false,
        })
    }
    // ==============================================================

    kidAdded = () => {
        this.setState({
            kidFirstNames: "", kidLastName: "", gender: "", birth_date: "",
            grade: "", kidLocation: "", bio: "",
            showAddKidForm: false,
            success: true,
            message: "A child was added to the database."
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    };

    fileSelectedHandler = event => {
        console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    handleKidFormSubmit = event => {
        event.preventDefault();
        let kidData = new FormData();
        kidData.append("first_name", this.state.kidFirstNames);
        kidData.append("last_name", this.state.kidLastName);
        kidData.append("gender", this.state.gender);
        kidData.append("birth_date", this.state.birth_date);
        kidData.append("grade", this.state.grade);
        kidData.append("location", this.state.kidLocation);
        kidData.append("kid_bio", this.state.bio);
        kidData.append("need_sponsor", true);
        kidData.append('selectedFile', this.state.selectedFile, this.state.selectedFile.name);
        
        API.addKid(kidData)
            .then(res => this.kidAdded())
            .catch(err => console.log(err));
            
            // first_name: this.state.kidFirstNames,
            // last_name: this.state.kidLastName,
            // gender: this.state.gender,
            // birth_date: this.state.birth_date,
            // grade: this.state.grade,
            // location: this.state.kidLocation,
            // kid_bio: this.state.bio,
            // need_sponsor: true,
            // selectedFile: this.state.selectedFile
    //     })
            
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
                        onClickAddAdmin={this.toggleAddAdmin}
                        onClickAdminSearch={this.showAdminSearch}
                        onClickShowDonors={this.showDonors}
                        onClickShowAdmins={this.showAdmins}
                    />
                    <Col xs="10" className="px-5">
                        {/* Renders AddKidForm if true */}
                        {this.state.showAddKidForm ?
                            <div>
                                <h5 className="border-bottom">Add a child to the database</h5>
                                <Form className="mt-4">
                                    <Label>First Names</Label>
                                    <InputField
                                        value={this.state.kidFirstNames}
                                        onChange={this.handleInputChange}
                                        name="kidFirstNames"
                                        placeholder="First names"
                                    />
                                    <Label>Last Names</Label>
                                    <InputField
                                        value={this.state.kidLastName}
                                        onChange={this.handleInputChange}
                                        name="kidLastName"
                                        placeholder="Last name"
                                    />
                                    <Label>Gender</Label>
                                    <GenderField
                                        value={this.state.gender}
                                        onChange={this.handleInputChange}
                                        name="gender"
                                    />
                                    <Label>Birthdate</Label>
                                    <InputField
                                        type="date"
                                        value={this.state.birth_date}
                                        onChange={this.handleInputChange}
                                        name="birth_date"
                                    />
                                    <Label>Grade in School</Label>
                                    <GradeField
                                        value={this.state.grade}
                                        onChange={this.handleInputChange}
                                        name="grade"
                                    />
                                    <Label>Location</Label>
                                    <LocationField
                                        value={this.state.kidLocation}
                                        onChange={this.handleInputChange}
                                        name="kidLocation"
                                    />
                                    <Label>Bio</Label>
                                    <InputField
                                        type="textarea"
                                        value={this.state.bio}
                                        onChange={this.handleInputChange}
                                        name="bio"
                                        placeholder="Description of the child"
                                    />
                                    <Label>Photo</Label>
                                    <UploadPhoto
                                        onChange={this.fileSelectedHandler}
                                        name="selectedFile"
                                        id=""
                                    />
                                    <SubmitBtn
                                        onClick={this.handleKidFormSubmit}
                                    />
                                    <DiscardBtn
                                        onClick={this.toggleAddKidForm}
                                    />
                                </Form>
                            </div> :
                            null
                        }
                        {/* Shows kid search bar if true */}
                        {this.state.showKidSearch ?
                            <AdminKidSearch /> :
                            null
                        }

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
                        {/* Shows form to add admin */}
                        {this.state.showAddAdmin ?
                            <AddAdmin
                                onClickAddAdmin={this.toggleAddAdmin}
                            /> :
                            null
                        }
                        {/* Shows admin search bar*/}
                        {this.state.showAdminSearch ?
                            <AdminSearch
                                onClickAdminSearch={this.showAdminSearch}
                            /> :
                            null
                        }
                        {/* <AdminList /> */}

                        {/* Shows all donors */}
                        {this.state.showDonors ?
                            <ViewDonors /> :
                            null
                        }
                        {/* Shows all admins */}
                        {this.state.showAdmins ?
                            <ViewAdmins /> :
                            null
                        }
                        {/* Shows success message */}
                        {this.state.success ?
                            <MainContainer>
                                <h4 className="text-center">{this.state.message}</h4>
                            </MainContainer> :
                            null
                        }

                        {/* <AdminDonorSearch /> */}
                        {/* <ConnectDonorModal /> */}
                    </Col>
                </Row>
            </MainContainer>
        )
    }
}

export default Admin;






