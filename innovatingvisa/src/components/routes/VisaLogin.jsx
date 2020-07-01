import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import './VisaLogin.css';
import axios from 'axios';
import Login from '../LoginComponentTest';
import {Redirect} from 'react-router-dom';

class VisaLogin extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      hrefs:'./CustomerSignUp',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.consumerSignUp = this.consumerSignUp.bind(this);
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
      console.log("1"+response);

    })
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
    window.location.href = "./CustomerSignUp";
    //dashbord redirect
    console.log(window.location.href)
  }

  consumerSignUp(event){
    event.preventDefault();
    window.location.href = "./CustomerSignUp";
  }

  render(){
    return (
      <div>
        <h1 className = 'heading'> Log in </h1>
        <Form className="form">

          <Row form>
            <Col md = {6} className="mx-auto">
              <FormGroup className="email">
                <Label for="email"> email </Label>
                <Input type="email"
                name="email"
                id="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleInputChange} />
              </FormGroup>

              <FormGroup className="password">
                <Label for="password"> Password </Label>
                <Input type="password"
                name="password"
                id="password"
                placeholder="****"
                value={this.state.password}
                onChange={this.handleInputChange} />
              </FormGroup>

              <FormGroup className='register'>
                  <Button  type = "submit" color="primary" onClick = {this.handleSubmit}>Login</Button>
              </FormGroup>
              </Col>
            </Row>



          <Row form>
          <Login className ="visa" />
          </Row>

          <Row form>
            <Col>
              <FormGroup className='register'>
                <Button  type = "submit" color="primary" onClick = {this.consumerSignUp}>Sign Up as a Consumer</Button>
              </FormGroup>
            </Col>
          </Row>

          </Form>

      </div>
    );
  }
}

export default VisaLogin
