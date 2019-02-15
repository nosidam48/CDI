import React, { Component } from "react";
import { Row, Col, Form, Label } from "reactstrap";
import { InputField, GenderField, GradeField, LocationField, UploadPhoto, SearchType, SubmitBtn, DiscardBtn, UserSearchType } from "../components/Form";
import AdminSidebar from "../components/AdminSidebar";
import AddKidForm from "../components/AddKidForm";
import SearchKid from "../components/SearchKid";
import AdminKidList from "../components/AdminKidList";
import AdminUserList from "../components/AdminUserList"
import AdminMultipleKids from "../components/AdminMultipleKidList";
import AddUserForm from "../components/AddUserForm";
import ViewAdmins from "../components/ViewAdmins"
import ViewDonors from "../components/ViewDonors"
import MainContainer from "../components/Container";
import LoadSpinner from "../components/LoadSpinner";
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
        showSearchResults: false,
        showMultipleKids: false,
        showAddUserForm: false,
        showAdminSearch: false,
        showDonors: false,
        showAdmins: false,

        // Message & loading
        message: "Choose an admin tool from the menu to get started.",
        loading: false,

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
        userSearchType: "Name",
        userSearchTerm: "",

        // Photo upload
        selectedFile: null,

        // Results arrays
        kids: [],
        users: [],
    };

    // FUNCTIONS FOR TOOLBAR ON LEFT================================================
    // The toggles below set state as true for the tool the admin wants to see and sets state as false for all other tools

    // Toggles display of form to add a kid
    toggleAddKidForm = () => {
        this.setState({
            showAddKidForm: !this.state.showAddKidForm,
            showKidSearch: false,
            showSearchResults: false,
            showMultipleKids: false,
            showAddUserForm: false,
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
            showSearchResults: false,
            showMultipleKids: false,
            showAddUserForm: false,
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
            showSearchResults: false,
            showAddKidForm: false,
            showAddUserForm: false,
            showAdminSearch: false,
            showDonors: false,
            showAdmins: false,
            message: "",
        })
    }
    // Toggles display of form to add a donor
    toggleAddUserForm = () => {
        this.setState({
            showAddKidForm: false,
            showKidSearch: false,
            showSearchResults: false,
            showMultipleKids: false,
            showAddUserForm: !this.state.showAddUserForm,
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
            showSearchResults: false,
            showAddKidForm: false,
            showMultipleKids: false,
            showAddUserForm: false,
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
            showSearchResults: false,
            showAddKidForm: false,
            showAddUserForm: false,
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
            showSearchResults: false,
            showAddKidForm: false,
            showAddUserForm: false,
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

    // Function to handle photo uploads
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    // Handles when an admin adds a new child
    handleKidFormSubmit = event => {
        event.preventDefault();
        // Set state to loading
        this.setState({ loading: true})

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
                    message: "A child was added to the database.",
                    loading: false
                })
            })
            .catch(err => {
                this.resetKidForm();
                this.setState({
                    message: "There was an error adding the child to the database.",
                    loading: false
                });
                console.log(err);
            })
    }

    // Handles when an admin is searching for a child
    handleAdminKidSearch = event => {
        event.preventDefault();
        this.setState({
            loading: true,
            showKidSearch: false,
            kids: [],
            showSearchResults: false,
            message: ""
        })
        API.kidSearch({
            searchTerm: this.state.searchTerm,
            searchType: this.state.searchType
        })
            .then(res => {
                // Set state of kids to new search results
                this.setState({
                    kids: res.data,
                    loading: false,
                    showKidSearch: true,
                    showSearchResults: true,
                    message: ""
                })
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    showKidSearch: true,
                    message: "We're sorry. We encountered an error."
                })
                console.log(err)
            });
    }

    handleAdminSearch = event => {
        event.preventDefault();
        this.setState({
            loading: true,
            users: [],
            showSearchResults: false,
        })
        API.userSearch({
            searchTerm: this.state.userSearchTerm,
            searchType: this.state.userSearchType
        })
            .then(res => {
                // Set state of search terms back to original state, set state of kids to new search results
                this.setState({
                    userSearchTerm: "",
                    userSearchType: "Name",
                    users: res.data,
                    loading: false,
                    showSearchResults: true,
                })
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    message: "We're sorry. We encountered an error."
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
                        onClickAddUser={this.toggleAddUserForm}
                        onClickAdminSearch={this.showAdminSearch}
                        onClickShowDonors={this.showDonors}
                        onClickShowAdmins={this.showAdmins}
                    />
                    <Col xs="12" sm="8" md="9" className="px-3" id="addKid">
                        {/* Shows loading spinner if loading is true */}
                        {this.state.loading ? (
                            <LoadSpinner className="kidsSpin" />
                        ) : null
                        }

                        {/* ADD KID FORM - displays if true =============== */}
                        {this.state.showAddKidForm ?
                            <AddKidForm
                                onChangeInput={this.handleInputChange}
                                onChangeFile={this.fileSelectedHandler}
                                firstNameValue={this.state.kidFirstNames}
                                firstName="kidFirstNames"
                                lastNamevalue={this.state.kidLastName}
                                lastName="kidLastName"
                                genderValue={this.state.gender}
                                genderName="gender"
                                birthdateValue={this.state.birth_date}
                                birthdateName="birth_date"
                                gradeValue={this.state.grade}
                                gradeName="grade"
                                locationValue={this.state.kidLocation}
                                locationName="kidLocation"
                                bioValue={this.state.bio}
                                bioName="bio"
                                photoName="selectedFile"
                                photoId=""
                                disabled={!(this.state.kidFirstNames && this.state.kidLastName && this.state.gender && this.state.birth_date && this.state.grade && this.state.kidLocation && this.state.bio && this.state.selectedFile)}
                                onClickSubmit={this.handleKidFormSubmit}
                                onClickDiscard={this.resetKidForm}
                            /> : null}

                        {/* SEARCH FOR KID if true================== */}
                        {this.state.showKidSearch ?
                            <SearchKid 
                                onChange={this.handleInputChange}
                                termValue={this.state.searchTerm}
                                termName="searchTerm"
                                typeValue={this.state.searchType}
                                typeName="searchType"
                                typeId="searchKid"
                                submitId="searchSubmit"
                                onClick={this.handleAdminKidSearch}
                            /> : null
                        }
                        {/* If search brings back results, show results */}
                        {this.state.showSearchResults ? (
                            <div>
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
                                ) : <h4 className="text-center mt-4">We couldn't find any profiles that match your search.</h4>}
                            </div>
                        ) : null
                        }

                        {/* SEARCH FOR USER if true================== */}
                        {this.state.showAdminSearch ?
                            <Form inline>
                                <InputField
                                    value={this.state.userSearchTerm}
                                    onChange={this.handleInputChange}
                                    name="userSearchTerm"
                                />
                                <UserSearchType
                                    value={this.state.userSearchType}
                                    onChange={this.handleInputChange}
                                    name="userSearchType"
                                    id="userSearchType"
                                />
                                <SubmitBtn
                                    id="searchSubmit"
                                    onClick={this.handleAdminSearch}
                                />
                            </Form>
                            :
                            null
                        }
                        {/* If search brings back results, show results */}
                        {this.state.showSearchResults ? (
                            <div>
                                {this.state.users.length ? (
                                    <div>
                                        {this.state.users.map(user => (
                                            <AdminUserList
                                                key={user.id}
                                                id={user.id}
                                                firstName={user.first_name}
                                                lastName={user.last_name}
                                                email={user.email}
                                                password={user.password}
                                                user_address={user.user_address}
                                                user_city={user.user_city}
                                                user_state={user.user_state}
                                                user_zip={user.user_zip}
                                                redoSearch={this.handleAdminSearch}
                                            />
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                        ) : null
                        }

                        {/* Shows kids for admins */}
                        {this.state.showMultipleKids ? (
                            <AdminMultipleKids />
                        ) : null}

                        {/* Shows form to add donor */}
                        {this.state.showAddUserForm ? (
                            <AddUserForm
                                toggle={this.toggleAddUserForm}
                            />
                        ) : null}

                        {/* Shows users for admins */}
                        {this.state.showDonors ? (
                            <ViewDonors />
                        ) : null}

                        {/* Shows admins for admins */}
                        {this.state.showAdmins ? (
                            <ViewAdmins />
                        ) : null}

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






