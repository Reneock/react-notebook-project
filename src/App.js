import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import AllNotebooks from './components/AllNotebooks';
import AddNotebook from './components/AddNotebook';
import './App.css';

class App extends Component {
 
 constructor(props) {
  super();
  this.state = { notebooks: []}
}

 addNewNotebook=(notebook)=>{
  notebook.id = Math.random().toString()
  this.setState({
    notebooks: [...this.state.notebooks,notebook]
  })
 }

 deleteNotebook = (id) => {
  let undeletedNotebooks = this.state.notebooks.filter((notebook) => notebook.id!== id);
  this.setState({
    notebooks: undeletedNotebooks
  })
 }

 editNotebook = (id, updatedNotebook) => {
  this.setState({
   notebooks: this.state.notebooks.map(notebook => notebook.id === id ? updatedNotebook : notebook)
  })
 }

 render(){ 
    return (
      <>
        <Container fluid style={{marginTop: "2rem"}}>
          <Row>
            <Col md="4">
             <AddNotebook addNotebook ={this.addNewNotebook}/>
            </Col>
            <Col>
             <AllNotebooks notebooksData={this.state.notebooks} deleteNotebook={this.deleteNotebook} editNotebook={this.editNotebook}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  } 
}


export default App;