import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import './VisaLogin.css';
import axios from 'axios';

class VisaLogin extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName:'',
      password:'',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    console.log(target);
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event){
    axios.post('/visaLogin',this.state)
    .then(function (response) {
      console.log(response);
    })
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  render(){
    return (
      <div>
        <h1 className = 'heading'> Log in </h1>
        <Form className="form">
          <Row form>
            <Col md = {6}>
              <FormGroup className="userName">
                <Label for="userName"> Username </Label>
                <Input type="name"
                name="username"
                id="username"
                placeholder="Username"
                value={this.state.userName}
                onChange={this.handleInputChange} />
              </FormGroup>
            </Col>
          </Row>
          <Row form> 
            <Col md = {6}>
              <FormGroup className="password">
                <Label for="password"> Username </Label>
                <Input type="name"
                name="password"
                id="password"
                placeholder="****"
                value={this.state.password}
                onChange={this.handleInputChange} />
              </FormGroup>
            </Col>
            </Row>
            <Row form>
              <Col>
                <FormGroup className='register'>
                  <Button  type = "submit" color="primary" onClick = {this.handleSubmit}>Register</Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>
      </div>
    );
  }
}

export default VisaLogin
