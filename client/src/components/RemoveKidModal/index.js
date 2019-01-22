import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class RemoveChildModal extends React.Component {
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
        <Button inline size="sm" onClick={this.toggle}>Remove Child</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Remove child?</ModalHeader>
          <ModalBody>
            Are you sure you want to remove this child's record from the database? It will be removed permanently.
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

export default RemoveChildModal;