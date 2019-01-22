import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import AddKidForm from "../Add-Kid-Form";

class UpdateKidModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
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
        <div className="d-inline mr-2">
          <Button inline size="sm" onClick={this.toggle}>Update/add info</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Update/add child info</ModalHeader>
            <ModalBody>
              <AddKidForm />
            </ModalBody>
          </Modal>
        </div>
      );
    }
  }
  
  export default UpdateKidModal;