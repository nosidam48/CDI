import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API from "../../utils/API";

//A modal to remove a child
class RemoveUserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      message: ""
    };

    this.toggle = this.toggle.bind(this);
  }
  //toggles the modal between show and hide (true/false). Also resets the message to empty
  toggle() {
    this.setState({
      modal: !this.state.modal,
      message: ""
    });
  }

  // Handles when an admin removes a child
  handleRemoveUser = id => {
    API.removeUser(id)
      .then(res => {
        this.setState({
          message: "The user's record was successfully removed"
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="d-inline">
        <Button inline="true" size="sm" className="mt-2" onClick={this.toggle}>Remove User</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Remove {this.props.userFirstName}?</ModalHeader>

          {/* If message has success text, show the text */}
          {this.state.message ? (
            <h4 className="text-center py-3">{this.state.message}</h4>
          ) : (
              <div>
                {/* If message has not text, show Remove text */}
                <ModalBody>
                  Are you sure you want to remove {this.props.userFirstName} {this.props.userLastName}'s record from the database? It will be removed permanently.
                </ModalBody>
                <ModalFooter>
                  <Button size="sm" onClick={() => this.handleRemoveUser(this.props.userId)} className="modalBtn">Yes, remove record</Button>{' '}
                  <Button size="sm" onClick={this.toggle} className="modalCancel">Cancel</Button>
                </ModalFooter>
              </div>
            )}
        </Modal>
      </div>
    );
  }
}

export default RemoveUserModal;