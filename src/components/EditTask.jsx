import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditTask = ({ task, handleEdit }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [description, setDescription] = useState(task.description);


  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(task.id, description); 
    handleClose();
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTask;