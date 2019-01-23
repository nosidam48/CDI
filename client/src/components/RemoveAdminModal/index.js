import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class RemoveAdminModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="d-inline ml-2">
        <Button inline size="sm" onClick={this.toggle}>Remove Admin</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Remove Admin?</ModalHeader>
          <ModalBody>
            Are you sure you want to remove this admin's record from the database? It will be removed permanently.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Yes, remove record</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default RemoveAdminModal;