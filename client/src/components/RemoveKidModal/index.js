import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

//A modal to remove a child
class RemoveChildModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }
  //toggles the modal between show and hide (true/false)
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="d-inline ml-2">
        <Button inline size="sm" onClick={this.toggle}>Remove Child</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Remove {this.props.kidFirstNames}?</ModalHeader>
          <ModalBody>
            Are you sure you want to remove {this.props.kidFirstNames} {this.props.kidLastName}'s record from the database? It will be removed permanently.
          </ModalBody>
          <ModalFooter>
            <Button size="sm" onClick={() => { this.toggle(); this.props.onClick(this.props.kidId) }}>Yes, remove record</Button>{' '}
            <Button size="sm" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default RemoveChildModal;