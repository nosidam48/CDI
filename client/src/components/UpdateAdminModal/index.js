import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import AddAdmin from "../AddAdmin";

class UpdateAdminModal extends React.Component {
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
          <Button inline size="sm" onClick={this.toggle}>Update info</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Update info</ModalHeader>
            <ModalBody>
              <AddAdmin />
            </ModalBody>
          </Modal>
        </div>
      );
    }
  }
  
  export default UpdateAdminModal;