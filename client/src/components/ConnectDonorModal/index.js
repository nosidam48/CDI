import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AddKidForm from "../Add-Kid-Form";

// Modal displaying donor info where admin can connect donor with child
class ConnectDonorModal extends React.Component {
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
        <div className="d-inline ml-2">
          <Button inline onClick={this.toggle}>Search</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Connect child/donor</ModalHeader>
            <ModalBody>
              Donor info will go here
            </ModalBody>
            <ModalFooter>
                <Button onClick={this.toggle}>Connect donor/child</Button>{' '}
                <Button onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
  
  export default ConnectDonorModal;