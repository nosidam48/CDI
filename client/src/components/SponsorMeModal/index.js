import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FormBtn } from "../Form";
import auth0Client from "../../Auth";
import API from "../../utils/API";

//A modal to send an admin a message when a user wants to sponsor a child
class SponsorMeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.toggle = this.toggle.bind(this);
    }
    // Toggles the modal between show and hide
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    // Handles when an admin has edited a child's info
    handleKidEdit = (event) => {
        event.preventDefault(); 
    //   .then(res => {
    //         this.props.redoSearch(event);
    //     })
    //         .catch(err => {
    //             this.setState({
    //                 loading: false,
    //                 message: "We're sorry, there was a problem updating the child's record."
    //             })
    //             console.log(err);
    //         })
    }

    render() {
        return (
            <div className="d-inline mr-2">
                <Button inline="true" size="sm" className="mt-2" onClick={this.toggle}>Sponsor Me!</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Sponsor {this.props.kidFirstName}</ModalHeader>
                    {!this.props.authenticated ? (
                        <div>
                            <ModalBody>
                                Please create an account first so that we can contact you about sponsoring {this.props.kidFirstName}
                            </ModalBody>
                            <FormBtn
                                onClick={auth0Client.signIn}
                                btnText="Create an Account"
                            />
                        </div>
                    ) : (
                            <div>
                            <ModalBody>
                                Thank you so much for your interest! Please verify that you would like someone from the CDI to reach out to you about sponsoring {this.props.kidFirstName}. We will contact you at XXX user email address as soon as we can.
          </ModalBody>
                            <ModalFooter>
                                <FormBtn
                                    onClick={(event) => { this.toggle(); this.emailCDI(event) }}
                                    className="modalBtn"
                                    btnText="Yes, contact me"
                                    type="submit"
                                />{' '}
                                <FormBtn
                                    onClick={this.toggle}
                                    className="modalCancel"
                                    btnText="Discard"
                                />
                            </ModalFooter>
                            </div>
                    )}
        </Modal>
      </div>
                );
              }
            }
            
export default SponsorMeModal;