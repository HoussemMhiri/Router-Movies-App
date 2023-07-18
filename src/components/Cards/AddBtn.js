import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddBtn = ({ add }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [mov, setMov] = useState("");
  const [rate, setRate] = useState(Number);
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");

  const submits = (e) => {
    e.preventDefault();
    add(mov, rate, img, desc);
  };

  return (
    <div className="add-btn">
      <Button style={{ width: "100px" }} variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          style={{ backgroundColor: "#2c3e50", color: "white" }}
          closeButton
        >
          <Modal.Title>Add Your Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#2c3e50", color: "white" }}>
          <Form onSubmit={submits}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Name:</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={mov}
                onChange={(e) => setMov(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label> Img Url: </Form.Label>
              <Form.Control
                type="url"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Rating:</Form.Label>
              <Form.Control
                type="number"
                min="1"
                max="5"
                placeholder="From 1 To 5 Stars "
                value={Number(rate)}
                onChange={(e) => setRate(Number(e.target.value))}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            ></Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>About The Movie</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>
            <Button style={{ marginLeft: 400 }} variant="primary" type="submit">
              Add
            </Button>

            <Button
              style={{ marginLeft: -150 }}
              variant="secondary"
              onClick={handleClose}
            >
              Close
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer
          style={{ backgroundColor: "#2c3e50", color: "white" }}
        ></Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddBtn;
