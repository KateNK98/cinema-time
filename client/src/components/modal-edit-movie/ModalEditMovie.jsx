import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalEditMovie() {
  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);
  const showModalHandler = () => setShow(true);

  return (
    <>
      <Button variant="primary" type="submit" onClick={showModalHandler}>
        Edite movie
      </Button>

      <Modal show={show} onHide={closeModalHandler} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Are ypu sure you want to delete this movie?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This will delete this movie permanently, Ypu cannot undo this action.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalHandler}>
            Cancel
          </Button>
          <Button variant="primary"  type="submit" onClick={closeModalHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEditMovie;