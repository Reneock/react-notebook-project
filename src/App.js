import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import AllNotebooks from './components/AllNotebooks';
import AddNotebook from './components/AddNotebook';
import './App.css';

class App extends Component {
 
 render(){ 
    return (
      <>
        <Container fluid style={{marginTop: "2rem"}}>
          <Row>
            <Col md="4">
             <AddNotebook />
            </Col>
            <Col>
             <AllNotebooks />
            </Col>
          </Row>
        </Container>
      </>
    );
  } 
}


export default App;