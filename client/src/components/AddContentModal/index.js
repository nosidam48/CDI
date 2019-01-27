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
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

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

    // Handles when an admin adds content
    handleContentSubmit = event => {
        console.log(this.state.kidId);
        event.preventDefault();
        // Use FormData to handle both text and the binary file
        let contentData = new FormData();
        contentData.append("kidId", this.state.kidId);
        // Check to see if an update was submitted. If so, append to contentData 
        if (this.state.update) {
            contentData.append("kid_notes", this.state.update);
        }
        // Check to see if a photo was submitted. If so, append to contentData
        if (this.state.selectedFile) {
            contentData.append('selectedFile', this.state.selectedFile, this.state.selectedFile.name);
        }

        API.addContent(contentData)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="d-inline ml-2">
                <Button inline size="sm" onClick={this.toggle}>Add Content</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add Content for {this.props.kidFirstNames + " " + this.props.kidLastName}</ModalHeader>
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
                        <Button onClick={(event) => { this.toggle(); this.handleContentSubmit(event) }}>Submit</Button>{' '}
                        <Button onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ConnectDonorModal;