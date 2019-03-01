import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import AdminSidebar from "../components/AdminSidebar";
import AddKidForm from "../components/AddKidForm";
import SearchKid from "../components/SearchKid";
import AdminKidList from "../components/AdminKidList";
import SearchUser from "../components/SearchUser";
import AdminUserList from "../components/AdminUserList"
import AdminMultipleKids from "../components/AdminMultipleKidList";
import AddUserForm from "../components/AddUserForm";
import ViewAdmins from "../components/ViewAdmins"
import ViewUsers from "../components/ViewUsers"
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
        displayTool: "",
        showKidSearchResults: false,
        showUserSearchResults: false,

        // Message & loading
        message: "Choose an admin tool from the menu to get started.",
        loading: false,

        // Inputs for add kid/add user form
        firstNames: "",
        lastName: "",
        gender: "",
        birth_date: "",
        grade: "",
        location: "",
        bio: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        admin: false,

        // Search inputs
        searchTerm: "",
        searchType: "Name",
        userSearchType: "Name",
        userSearchTerm: "",

        // Photo upload
        selectedFile: null,

        // Results arrays
        kids: [],
        users: []
    };

    // FUNCTIONS FOR TOOLBAR ON LEFT================================================
    // The toggles below set state as true for the tool the admin wants to see and sets state as false for all other tools

    // Toggles display of form to add a kid
    toggleAddKidForm = () => {
        this.setState({
            displayTool: "AddKidForm",
            message: "",
        });
        window.scrollTo(0, 0);
    }
    // Lets admin search for specific kid
    showKidSearch = () => {
        this.setState({
            displayTool: "KidSearch",
            message: "",
        })
        window.scrollTo(0, 0);
    }
    // Lets admin search for group of kids
    showMultipleKids = () => {
        this.setState({
            displayTool: "MultipleKids",
            message: "",
        })
        window.scrollTo(0, 0);
    }
    // Toggles display of form to add a user
    toggleAddUserForm = () => {
        this.setState({
            displayTool: "AddUserForm",
            message: "",
        });
        window.scrollTo(0, 0);
    }

    // Lets admin search for admin
    showUserSearch = () => {
        this.setState({
            displayTool: "UserSearch",
            message: "",
        })
        window.scrollTo(0, 0);
    }
    // Lets admin see all users
    showUsers = () => {
        this.setState({
            displayTool: "Users",
            message: "",
        })
        window.scrollTo(0, 0);
    }
    // Lets admin see all admins
    showAdmins = () => {
        this.setState({
            displayTool: "Admins",
            showAdmins: true,
            message: "",
        })
        window.scrollTo(0, 0);
    }
    // ==============================================================

    // Function that runs after a kid has been added
    resetForm = () => {
        this.setState({
            firstNames: "", lastName: "", gender: "", birth_date: "",
            grade: "", location: "", bio: "", email: "", password: "",
            address: "", city: "", state: "", zip: "", admin: false,
            displayTool: ""
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
        // Set state to loading and empties results arrays
        this.setState({
            loading: true,
            kids: [],
            users: []
        })
        // Hide form and send user to top of the page 
        this.toggleAddKidForm();

        // Use FormData to send profile photo to S3
        let kidPhoto = new FormData();
        kidPhoto.append('selectedFile', this.state.selectedFile, this.state.selectedFile.name);

        // Upload profile photo to S3 and set state with returned file 
        API.addKidPhoto(kidPhoto)
            .then(res => {
                if (res.data.imageUrl) {
                    this.setState({ selectedFile: res.data.imageUrl })
                }
                // Send request to the database to create the new kid record
                API.addKid({
                    first_name: this.state.firstNames,
                    last_name: this.state.lastName,
                    gender: this.state.gender,
                    birth_date: this.state.birth_date,
                    grade: this.state.grade,
                    location: this.state.location,
                    kid_bio: this.state.bio,
                    need_sponsor: true,
                    selectedFile: this.state.selectedFile
                })
                    .then(res => {
                        this.resetForm();
                        this.setState({
                            message: "A child was added to the database.",
                            loading: false
                        })

                    })
                    .catch(err => {
                        this.resetForm();
                        this.setState({
                            message: "There was an error adding the child to the database.",
                            loading: false
                        });
                        window.scrollTo(0, 0);
                        console.log(err);
                    })
            })
    }

    // Handles when an admin submits a new user form
    handleUserFormSubmit = (event) => {
        event.preventDefault()
        this.setState({
            loading: true,
            kids: [],
            users: []
        });
        // Hide form and send user to top of the page
        this.toggleAddUserForm();

        // Post to db
        API.addUser({
            first_name: this.state.firstNames,
            last_name: this.state.lastName,
            email: this.state.email,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            admin: this.state.admin
        })
            .then(res => {
                this.resetForm();
                // Set message in state based on response
                if (res.data !== "Already exists.") {
                    this.setState({
                        message: "The donor was added to the database.",
                        loading: false
                    })
                } else {
                    this.setState({
                        message: "The donor already exists in the database.",
                        loading: false
                    })
                }
            })
            .catch(err => {
                console.log(err)
                window.scrollTo(0, 0);
            })
    }

    // Handles when an admin is searching for a child
    handleAdminKidSearch = event => {
        event.preventDefault();
        this.setState({
            loading: true,
            displayTool: "",
            kids: [],
            users: [],
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
                    displayTool: "KidSearch",
                    showKidSearchResults: true,
                    message: ""
                })
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    displayTool: "KidSearch",
                    message: "We're sorry. We encountered an error."
                })
                console.log(err)
            });
    }

    handleAdminUserSearch = event => {
        event.preventDefault();
        this.setState({
            loading: true,
            kids: [],
            users: [],
            displayTool: "",

        })
        API.userSearch({
            searchTerm: this.state.userSearchTerm,
            searchType: this.state.userSearchType
        })
            .then(res => {
                // Set state of search terms back to original state, set state of results to new search results
                this.setState({
                    users: res.data,
                    loading: false,
                    displayTool: "UserSearch",
                    showUserSearchResults: true,
                    message: ""
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
                        onClickUserSearch={this.showUserSearch}
                        onClickShowUsers={this.showUsers}
                        onClickShowAdmins={this.showAdmins}
                    />
                    <Col xs="12" sm="8" md="9" className="px-3" id="addKid">
                        {/* Shows loading spinner if loading is true */}
                        {this.state.loading ? (
                            <LoadSpinner className="kidsSpin" />
                        ) : null
                        }
                        {/* Forms below display when clicked on */}
                        {/* ADD KID FORM */}
                        {this.state.displayTool === "AddKidForm" ?
                            <AddKidForm
                                onChangeInput={this.handleInputChange}
                                onChangeFile={this.fileSelectedHandler}
                                firstNameValue={this.state.firstNames}
                                firstName="firstNames"
                                lastNamevalue={this.state.lastName}
                                lastName="lastName"
                                genderValue={this.state.gender}
                                genderName="gender"
                                birthdateValue={this.state.birth_date}
                                birthdateName="birth_date"
                                gradeValue={this.state.grade}
                                gradeName="grade"
                                locationValue={this.state.location}
                                locationName="location"
                                bioValue={this.state.bio}
                                bioName="bio"
                                photoName="selectedFile"
                                photoId=""
                                disabled={!(this.state.firstNames && this.state.lastName && this.state.gender && this.state.birth_date && this.state.grade && this.state.location && this.state.bio && this.state.selectedFile)}
                                onClickSubmit={this.handleKidFormSubmit}
                                onClickDiscard={this.resetForm}
                            /> : null}

                        {/* UPDATE CHILD/SEARCH */}
                        {this.state.displayTool === "KidSearch" ?
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
                        {this.state.showKidSearchResults ? (
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

                        {/* VIEW CHILDREN */}
                        {this.state.displayTool === "MultipleKids" ? (
                            <AdminMultipleKids />
                        ) : null}

                        {/* ADD USER */}
                        {this.state.displayTool === "AddUserForm" ? (
                            <AddUserForm
                                onChangeInput={this.handleInputChange}
                                firstNameValue={this.state.firstNames}
                                firstName="firstNames"
                                lastNamevalue={this.state.lastName}
                                lastName="lastName"
                                emailValue={this.state.email}
                                emailName="email"
                                addressValue={this.state.address}
                                addressName="address"
                                cityValue={this.state.city}
                                cityName="city"
                                stateValue={this.state.state}
                                stateName="state"
                                zipValue={this.state.zip}
                                zipName="zip"
                                adminValue={this.state.admin}
                                adminName="admin"
                                disabled={!(this.state.firstNames && this.state.lastName && this.state.email)}
                                onClickSubmit={this.handleUserFormSubmit}
                                onClickDiscard={this.resetForm}
                        />
                    ) : null}


                        {/* USER SEARCH */}
                        {this.state.displayTool === "UserSearch" ?
                            <SearchUser
                                onChange={this.handleInputChange}
                                termValue={this.state.userSearchTerm}
                                termName="userSearchTerm"
                                typeValue={this.state.userSearchType}
                                typeName="userSearchType"
                                typeId="userSearchType"
                                submitId="searchSubmit"
                                onClick={this.handleAdminUserSearch}
                            />
                            : null}
                        {/* If search brings back results, show results */}
                        {this.state.showUserSearchResults ? (
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
                                                address={user.address}
                                                city={user.city}
                                                state={user.state}
                                                zip={user.zip}
                                                admin={user.admin_status}
                                                masterAdmin={user.master_admin_status}
                                                redoSearch={this.handleAdminUserSearch}
                                            />
                                        ))}
                                    </div>
                                ) : <h4 className="text-center mt-4">We couldn't find any users that match your search.</h4>}
                            </div>
                        ) : null
                        }

                        {/* Shows users for admins */}
                        {this.state.displayTool === "Users" ? (
                            <ViewUsers />
                        ) : null}

                        {/* Shows admins for admins */}
                        {this.state.displayTool === "Admins" ? (
                            <ViewAdmins />
                        ) : null}

                        {/* Shows message on screen depending on task run and result */}
                        <MainContainer>
                            <h4 className="text-center">{this.state.message}</h4>
                        </MainContainer>
                    </Col>
                </Row>
            </MainContainer >
        )
    }
}

export default Admin;






