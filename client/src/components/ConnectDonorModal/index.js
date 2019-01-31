import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import { InputField, SubmitBtn, DiscardBtn } from "../Form";
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
      message: "",
      loading: false,
      connected: false
    };

    this.toggle = this.toggle.bind(this);
  }
  //toggle the modal state between true and false to show or hide it
  toggle() {
    this.setState({
      modal: !this.state.modal,
      message: "",
      donorFirstName: "",
      donorLastName: "",
      donors: [],
      connected: false
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
    this.setState({
      loading: true
    })
    API.donorSearch({
      first_name: this.state.donorFirstName,
      last_name: this.state.donorLastName,
      email: this.state.donorEmail,
    })
      .then(res => {
        // Set state of form inputs back to blank
        this.setState({
          donorFirstName: "",
          donorLastName: "",
          donorEmail: "",
          message: "No donors matched your search",
          donors: res.data,
          loading: false
        })
      })
      .catch(err => console.log(err));
  }

  // Handles the connect donor button when the right donor has been found
  handleConnectDonor = (donorId, kidId) => {
    this.setState({
      loading: true
    })
    
    // Create object to send
    let connectData = {
      donor_id: donorId,
      kid_id: kidId
    }
    API.connectDonor(connectData)
      .then(res => {
          this.setState({
            message: "The donor and child have been successfully connected.",
            loading: false,
            connected: true  
          })
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="d-inline mr-2">
        <Button inline="true" size="sm" className="mt-2" onClick={this.toggle}>Connect Donor to Child</Button>
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
                disabled={!(this.state.donorFirstName || this.state.donorLastName || this.state.donorEmail)}
                onClick={this.handleDonorSearch}
              />
            </Form>
            {this.state.donors.length > 0 ? (
              <div className="mt-2">
                <hr />
                <p className="font-weight-bold">Users found</p>
                {this.state.donors.map(donor => (
                  <div className="mb-1">
                    <SubmitBtn
                      size="sm"
                      onClick={() => this.handleConnectDonor(donor.id, this.props.kidId)}
                      donorId={donor.id}
                      kidId={this.props.kidId}
                      className="mr-2"
                    />
                    {donor.first_name} {donor.last_name} {donor.email}
                  </div>
                ))}
              </div>
            ) : (
              <h4 className="text-center py-3">{this.state.message}</h4>
            )}
            { this.state.connected ? (
              <h4 className="text-center py-3">{this.state.message}</h4>
            ) : (
              <h4 className="text-center py-3"></h4>
            )}
          </ModalBody>
          <ModalFooter>
            <DiscardBtn onClick={this.toggle} className="modalCancel"></DiscardBtn>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ConnectDonorModal;