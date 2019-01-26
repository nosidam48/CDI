import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label } from 'reactstrap';
import { InputField, SubmitBtn } from "../Form";
import API from "../../utils/API";


// Modal displaying donor info where admin can connect donor with child
class ConnectDonorModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      donorFirstName: "",
      donorLastName: "",
      donorEmail: "",
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
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="d-inline ml-2">
        <Button inline size="sm" onClick={this.toggle}>Connect to Donor</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Connect child/donor</ModalHeader>
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
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ConnectDonorModal;