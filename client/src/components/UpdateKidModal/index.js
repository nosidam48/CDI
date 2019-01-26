import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label } from 'reactstrap';
import { InputField, GenderField, GradeField, LocationField } from "../Form";

class UpdateKidModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      kidFirstNames: props.firstNames,
      kidLastName: props.lastName,
      gender: props.gender,
      birth_date: props.birthdate,
      grade: props.grade,
      kidLocation: props.location,
      bio: props.bio,
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

  render() {
    return (
      <div className="d-inline mr-2">
        <Button inline size="sm" onClick={this.toggle}>Update info</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Update child info</ModalHeader>
          <ModalBody>
            <Form>
              <Label>First Names</Label>
              <InputField
                value={this.state.kidFirstNames}
                onChange={this.handleInputChange}
                name="kidFirstNames"
              />
              <Label>Last Names</Label>
              <InputField
                value={this.state.kidLastName}
                onChange={this.handleInputChange}
                name="kidLastName"
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
                value={this.state.birthdate}
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
                value={this.state.location}
                onChange={this.handleInputChange}
                name="kidLocation"
              />
              <Label>Bio</Label>
              <InputField
                type="textarea"
                value={this.state.bio}
                onChange={this.handleInputChange}
                name="bio"
              />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={(event) => { this.toggle(); this.props.onClickModal(event) }}>Submit Changes</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UpdateKidModal;