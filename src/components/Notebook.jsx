import React, {useState} from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import EditNotebook from './EditNotebook';
import { useDispatch } from "react-redux";
import {deleteNotebook} from "../actions/notebooksActions";

const Notebook = (props) => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteNotebook(props.notebookInfo.id));
    //props.deleteNotebook(props.notebookInfo.id);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Notebook</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <EditNotebook notebookInfo={props.notebookInfo} editNotebook={props.editNotebook} closeModal={handleClose}/> 
        </Modal.Body>
      </Modal>

      <Col md="4" style={{ marginBottom: "1rem" }}>
        <Card style={{ backgroundColor: "#3b444b", color: "white" }}>
          <Card.Body>
            
            <Card.Title style={{ marginLeft: "60px", fontWeight: "800" }}> Notebook</Card.Title>
            <Card.Text>
              <p><strong> Title: </strong>{props.notebookInfo.title}</p>
              <p><strong> Date: </strong> {props.notebookInfo.date}</p>
              <p><strong> Description: </strong> {props.notebookInfo.description}</p>
            </Card.Text>
            <Card.Link href="#">
              <Button style={{ width: "75px" }} href="#" variant="primary" onClick={handleShow}>Edit</Button>
            </Card.Link>
            <Card.Link href="#">
              <Button style={{ marginLeft: "10px" }} href="#" variant="danger" onClick={handleDelete}>Delete</Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Notebook;