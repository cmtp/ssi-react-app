import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';

class CommentForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.toggleModal}>
          <i className="fa fa-pencil" aria-hidden="true" />
          Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Enviar Comentarios</ModalHeader>
          <ModalBody />
        </Modal>
      </React.Fragment>
    );
  }
}

export default CommentForm;
