import React, { Component } from "react";
import { Row, Col, Form, Label } from "reactstrap";
import { InputField, GenderField, GradeField, LocationField, UploadPhoto, SearchType, SubmitBtn, DiscardBtn } from "../components/Form";
import AdminSidebar from "../components/AdminSidebar";
import AdminMultipleKids from "../components/AdminMultipleKidList";
import AddAdmin from "../components/AddAdmin";
import AdminKidList from "../components/AdminKidList";
import AddDonorForm from "../components/AddDonorForm";
import AdminSearch from "../components/AdminSearch";
import ViewDonors from "../components/ViewDonors";
import ViewAdmins from "../components/ViewAdmins";
import MainContainer from "../components/Container";
import API from "../utils/API";

//Component for the various admin tools
class Admin extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
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

        // Message
        message: "Choose an admin tool from the menu to get started.",

        // Kid form inputs
        kidFirstNames: "",
        kidLastName: "",
        gender: "",
        birth_date: "",
        grade: "",
        kidLocation: "",
        bio: "",

        // Search inputs
        searchTerm: "",
        searchType: "Name",

        // Photo upload
        selectedFile: null,

        // Results arrays
        kids: []
    };

    // FUNCTIONS FOR TOOLBAR ON LEFT================================================
    // The toggles below set state as true for the tool the admin wants to see and sets state as false for all other tools

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
            message: "",
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
            message: "",
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
            message: "",
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
            message: "",
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
            message: "",
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
            message: "",
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
            message: "",
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
            message: "",
        })
    }
    // ==============================================================

    // Function that runs after a kid has been added
    resetKidForm = () => {
        this.setState({
            kidFirstNames: "", kidLastName: "", gender: "", birth_date: "",
            grade: "", kidLocation: "", bio: "",
            showAddKidForm: false,
        })
    }

    //function that sets the state to the name and value of the form input when the form data is changed
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    };

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    // Handles when an admin adds a new child
    handleKidFormSubmit = event => {
        event.preventDefault();
        // Use FormData to handle both text and the binary file
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
            .then(res => {
                this.resetKidForm();
                this.setState({
                    message: "A child was added to the database."
                })
            })
            .catch(err => {
                this.resetKidForm();
                this.setState({
                    message: "There was an error adding the child to the database."
                });
                console.log(err);
            }) 
    }

    // Handles when an admin is searching for a child
    handleAdminKidSearch = event => {
        event.preventDefault();
        API.kidSearch({
            searchTerm: this.state.searchTerm,
            searchType: this.state.searchType
        })
            .then(res => {
                // Set state of search terms back to original state, set state of kids to new search results
                this.setState({
                    searchTerm: "",
                    searchType: "Name",
                    kids: res.data
                })
            })
            .catch(err => {
                this.setState({
                    message: "We're sorry, there was a problem with the search."
                })
                console.log(err)
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
                        onClickAddAdmin={this.toggleAddAdmin}
                        onClickAdminSearch={this.showAdminSearch}
                        onClickShowDonors={this.showDonors}
                        onClickShowAdmins={this.showAdmins}
                    />
                    <Col xs="12" sm="8" md="9" lg="9" className="px-5" id="addKid">
                        {/* ADD KID FORM - displays if true =============== */}
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
                                    <Label>Profile Photo</Label>
                                    <UploadPhoto
                                        onChange={this.fileSelectedHandler}
                                        name="selectedFile"
                                        id=""
                                    />
                                    <SubmitBtn
                                        onClick={this.handleKidFormSubmit}
                                    />
                                    <DiscardBtn
                                        onClick={this.resetKidForm}
                                    />
                                </Form>
                            </div> :
                            null
                        }
                        {/* END OF ADD KID FORM============= */}

                        {/* SEARCH FOR KID if true================== */}
                        {this.state.showKidSearch ?
                            <Form inline>
                                <InputField
                                    value={this.state.searchTerm}
                                    onChange={this.handleInputChange}
                                    name="searchTerm"
                                />
                                <SearchType
                                    value={this.state.searchType}
                                    onChange={this.handleInputChange}
                                    name="searchType"
                                    id="searchKid"

                                />
                                <SubmitBtn
                                    id="searchSubmit"
                                    onClick={this.handleAdminKidSearch}
                                />
                            </Form>
                            :
                            null
                        }
                        {/* If search brings back results, show results */}
                        {this.state.kids.length ? (
                            <div>
                                {this.state.kids.map(kid => (
                                    <AdminKidList
                                        key={kid.id}
                                        id={kid.id}
                                        firstNames={kid.first_name}
                                        lastName={kid.last_name}
                                        gender={kid.gender}
                                        birthdate={kid.birth_date}
                                        grade={kid.grade}
                                        location={kid.location}
                                        needSponsor={kid.need_sponsor}
                                        bio={kid.kid_bio}
                                        redoSearch={this.handleAdminKidSearch}
                                    />
                                ))}
                            </div>
                        ) :
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
                        {/* Shows message on screen depending on task run and result */}
                            <MainContainer>
                                <h4 className="text-center">{this.state.message}</h4>
                            </MainContainer>
                    </Col>
                </Row>
            </MainContainer>
        )
    }
}

export default Admin;






