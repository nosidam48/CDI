import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import { InputField, FormBtn } from "../Form";
import LoadingSpinner from "../LoadSpinner";
import API from "../../utils/API";

//A modal to send an admin a message when a user wants to sponsor a child
class SponsorMeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            modal: false,
            loading: false,
            message: ""
        };
        this.toggle = this.toggle.bind(this);
    }
    // Toggles the modal between show and hide. Also clears any previous results.
    toggle() {
        this.setState({
            modal: !this.state.modal,
            email: "",
            message: ""
        });
    }

    // Function that listens for the inputs of the form data
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    };

    // Handles when a user clicks Contact Me in the modal
    contactMe = (event) => {
        event.preventDefault();
        // Set state of loading to true
        this.setState({ loading: true });

        // Set email variable based on whether prop was passed
        let email = ""
        if (this.props.email) {
            email = this.props.email
        } else {
            email = this.state.email
        }
        API.sponsorMe({
            id: this.props.id,
            kidFirstName: this.props.kidFirstName,
            kidLastName: this.props.kidLastName,
            email: email
        })
            .then(res => {
                console.log(res);
                if (res.data === "Email notification sent") {
                    this.setState({
                        message: "We have received your request and will contact you soon.",
                        loading: false
                    })
                }
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    message: "We're sorry. We could not process your request at this time. Try again later or email us directly at cdi@example.com."
                })
                console.log(err);
            })
    }

    render() {
        return (
            <div className="d-inline mr-2">
                <Button inline="true" size="sm" className="mt-2" onClick={this.toggle}>Sponsor Me!</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Sponsor {this.props.kidFirstName}</ModalHeader>
                    {/* Show loading spinner when loading */}
                    {this.state.loading ? <LoadingSpinner className="kidsSpin" />
                        : (
                            /* If the process has already run and a message exists, show the message */
                            this.state.message ? <h4 className="text-center p-3">{this.state.message}</h4>
                                : (
                                    /* If user does not have an account or an email address in their profile, ask for one to send to the CDI admin */
                                    !this.props.email ? (
                                        <ModalBody>
                                            Thank you so much for your interest in sponsoring {this.props.kidFirstName}! Please enter an email address, and we will contact you as soon as we can.
                                            <Form>
                                                <InputField
                                                    value={this.state.email}
                                                    onChange={this.handleInputChange}
                                                    name="email"
                                                /* placeholder="Email Address" */
                                                />
                                            </Form>
                                        </ModalBody>
                                    ) : (
                                            <ModalBody>
                                                Thank you so much for your interest! Please verify that you would like someone from the CDI to reach out to you about sponsoring {this.props.kidFirstName}. We will contact you at {this.props.email} as soon as we can.
                                            </ModalBody>
                                        )))}
                    {/* If there's a message, hide the footer */}
                    {this.state.message ? null : (
                        <ModalFooter >
                        <FormBtn
                            onClick={this.contactMe}
                            className="modalBtn"
                            btnText="Yes, contact me"
                        />{' '}
                        <FormBtn
                            onClick={this.toggle}
                            className="modalCancel"
                            btnText="Discard"
                        />
                    </ModalFooter>
                    )}
                </Modal>
            </div>
        );
    }
}

export default SponsorMeModal;