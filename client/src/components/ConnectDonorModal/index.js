import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import { InputField, SubmitBtn } from "../Form";
import API from "../../utils/API";


// Modal displaying donor info where admin can connect donor with child
class ConnectDonorModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      donorFirstName: "",
      donorLastName: "",
      donorEmail: "",
      donors: [],
    };

    this.toggle = this.toggle.bind(this);
  }
  //toggle the modal state between true and false to show or hide it
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  //function to listen for the input data on the forms
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  };

  // Handles the admin search for a donor to connect to
  handleDonorSearch = event => {
    event.preventDefault();
    API.donorSearch({
      first_name: this.state.donorFirstName,
      last_name: this.state.donorLastName,
      email: this.state.donorEmail,
    })
      .then(res => {
        console.log(res.data)
        // Set state of form inputs back to blank
        this.setState({
          donorFirstName: "",
          donorLastName: "",
          donorEmail: "",
          donors: res.data
        })
      })
      .catch(err => console.log(err));
  }

  // Handles the connect donor button when the right donor has been found
  handleConnectDonor = (donorId, kidId) => {
    
    // Create object to send
    let connectData = {
      donor_id: donorId,
      kid_id: kidId
    }
    console.log(connectData)
    API.connectDonor(connectData)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="d-inline mr-2">
        <Button inline size="sm" className="mt-2" onClick={this.toggle}>Connect Donor to Child</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Connect donor to {this.props.kidFirstNames + " " + this.props.kidLastName}</ModalHeader>
          <ModalBody>
            <h5>Search for donor (one field required)</h5>
            <Form>
              <InputField
                value={this.state.donorFirstName}
                onChange={this.handleInputChange}
                name="donorFirstName"
                placeholder="First name"
              />
              <InputField
                value={this.state.donorLastName}
                onChange={this.handleInputChange}
                name="donorLastName"
                placeholder="Last name"
              />
              <InputField
                value={this.state.donorEmail}
                onChange={this.handleInputChange}
                name="donorEmail"
                placeholder="Email address"
              />
              <SubmitBtn
                onClick={this.handleDonorSearch}
              />
            </Form>
            {this.state.donors.length ? (
              <div className="mt-2">
                <hr />
                {this.state.donors.map(donor => (
                  <div>
                    <SubmitBtn
                      size="sm"
                      onClick={() => this.handleConnectDonor(donor.id, this.props.kidId)}
                      donorId={donor.id}
                      kidId={this.props.kidId}
                      className="mr-2"
                    />
                    {donor.first_name + "  " + "  " + donor.last_name + "  " + donor.email}
                  </div>
                ))}
              </div>
            ) : null}
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle} className="modalCancel">Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ConnectDonorModal;