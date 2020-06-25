import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import './CreateVISAReady.css';

class CreateVISAReady extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      email:'',
      companyName: '',
      password:'',
      passwordVerify:'',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
  }
  render(){
    return (
      <Form  className="form">
        <Row form>
          <Col md = {6}>
            <FormGroup className="firstName">
              <Label for="firstName" >First Name</Label>
              <Input 
                type="name"
                name="firstName" 
                id="firstName" 
                placeholder="John" 
                value={this.state.firstName}
                onChange={this.handleInputChange} />
            </FormGroup>
          </Col>
          <Col md = {6}>
            <FormGroup className="lastName">
              <Label for="lastName">Last Name</Label>
              <Input 
                type="name"
                name="lastName" 
                id="lastName"
                placeholder="Smith"
                value={this.state.lastName}
                onChange={this.handleInputChange} />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
        <Col md = {6}> 
            <FormGroup>
              <Label for="email">Email</Label>
              <Input 
                type="email"
                name="email"
                id="email"
                placeholder="johnsmith@domain.com"
                value={this.state.email}
                onChange={this.handleInputChange}/>
            </FormGroup>
          </Col>
          <Col md = {6}>
            <FormGroup>
              <Label for="companyName">Company Name</Label>
              <Input 
                type="name"
                name="companyName"
                id="companyName"
                placeholder="Smith Company"
                value={this.state.companyName}
                onChange={this.handleInputChange} />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md = {6}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input 
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password here"
                value={this.state.password}
                onChange={this.handleInputChange} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="passwordVerify">Verify Password</Label>
              <Input 
                type="password"
                name="passwordVerify"
                id="passwordVerify"
                placeholder="Verify your password" 
                value={this.state.passwordVerify}
                onChange={this.handleInputChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col>
            <FormGroup>
              <Button type = "submit" color="primary" onClick = {this.handleSubmit}>Register</Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>

    );
  }
}
export default  CreateVISAReady
  