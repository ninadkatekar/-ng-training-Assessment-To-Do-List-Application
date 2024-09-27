import React from 'react';
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button

const DeleteConfirmation = ({ task, onConfirm, onCancel, show }) => {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Do you want to delete task "{task?.assignedTo}"?</p> {/* Safely access task name */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          No
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmation;
