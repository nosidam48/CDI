import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label } from 'reactstrap';
import { InputField, UploadPhoto } from "../Form";
import API from "../../utils/API";


// Modal where admin can add photo or update to a child
class ConnectDonorModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            update: "",
            kidId: props.kidId,
            selectedFile: null,
            message: ""
        };

        this.toggle = this.toggle.bind(this);
    }
    //A function that toggles whether the modal will be shown. Also resets the message.
    toggle() {
        this.setState({
            modal: !this.state.modal,
            message: ""
        });
    }
    // A function to get the form info
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    };
    // A function to retrieve the uploaded file from the form
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    // Handles when an admin adds content
    handleContentSubmit = event => {
        console.log(this.state.kidId);
        event.preventDefault();
        // Use FormData to handle both text and the binary file
        let contentData = new FormData();
        contentData.append("kidId", this.state.kidId);
        // The user can submit an update or a photo but doesn't have to do both. 
        // So check to see if an update was submitted. If so, append to contentData 
        if (this.state.update) {
            contentData.append("kid_notes", this.state.update);
        }
        // Check to see if a photo was submitted. If so, append to contentData
        if (this.state.selectedFile) {
            contentData.append('selectedFile', this.state.selectedFile, this.state.selectedFile.name);
        }
        //Call the add content function
        API.addContent(contentData)
            .then(res => {
                // Update message to success to alert the user the content went through
                this.setState({
                    message: "Content successfully added"
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="d-inline ml-2">
                <Button inline size="sm" onClick={this.toggle}>Add Content</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add Content for {this.props.kidFirstNames + " " + this.props.kidLastName}</ModalHeader>
                    
                    {/* If message has success text, show the text */}
                    {this.state.message ? (
                        <h4 className="text-center py-3">{this.state.message}</h4>
                    ) : (
                            <div>
                            {/* If there is no success message, show the content submission form */}
                                <ModalBody>
                                    <Form>
                                        <Label>Update for donor</Label>
                                        <InputField
                                            type="textarea"
                                            value={this.state.update}
                                            onChange={this.handleInputChange}
                                            name="update"
                                            placeholder="Not required"
                                        />
                                        <Label>Add photo (not required)</Label>
                                        <UploadPhoto
                                            onChange={this.fileSelectedHandler}
                                            name="selectedFile"
                                            id=""
                                        />
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button onClick={(event) => this.handleContentSubmit(event)}>Submit</Button>{' '}
                                    <Button onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                            </div>
                        )}
                </Modal>
            </div>
        );
    }
}

export default ConnectDonorModal;