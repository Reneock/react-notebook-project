import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Notebook from './Notebook';

const AllNotebooks = (props) => {
  return (
      <Container>
        <Row>
          {props.notebooksData.map((notebook) =>
           { return <Notebook notebookInfo={notebook} key={notebook.id} deleteNotebook={props.deleteNotebook} editNotebook={props.editNotebook}/>}
           )
          }
        </Row>
      </Container>
  );
}

export default AllNotebooks;