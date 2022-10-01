import React, { Component } from 'react';
import { Form, Button} from 'react-bootstrap';

class EditNotebook extends Component {
  constructor(props){
    super(props);
    this.state ={title: props.notebookInfo.title,
     date: props.notebookInfo.date,
     description: props.notebookInfo.description,
     id:props.notebookInfo.id
    }
  }

  handleChange=(e)=>{
    e.preventDefault();
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  handleSubmit=(e)=>{
    e.preventDefault();
    //this.props.addNotebook(this.state); to edit below code is introduced
    this.props.editNotebook(this.state.id, this.state);
    this.setState({title:"", date:"", description: ""});
    this.props.closeModal();
  };


  render() {
    return (

        <Form onSubmit={this.handleSubmit} style={{border:"1px solid #36454f", backgroundColor: "#36454f", color: "#fff", height: "420px", borderRadius:"5px"}}>
          <Form.Group style={{width: "300px", marginTop:"20px", marginLeft:"50px"}} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Notebook title" value={this.state.title} name="title" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group style={{width: "300px", marginLeft:"50px"}} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Date Recorded" value={this.state.date} name="date" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group style={{width: "300px", marginLeft:"50px"}} className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="description" as="textarea" style={{height:"100px"}} placeholder="Note Text" value={this.state.description} name="description" onChange={this.handleChange}/>
          </Form.Group>
          
          <Button style={{marginTop:"15px", marginLeft: "150px", width: "100px"}} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    );
  }
}

export default EditNotebook;