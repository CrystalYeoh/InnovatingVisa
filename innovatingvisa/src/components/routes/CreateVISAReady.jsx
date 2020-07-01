import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import './CreateVISAReady.css';
import axios from 'axios';

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
      descr: '',
      addr:'',
      merchType:'',
      contactNo:'',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    console.log(target);
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    axios.post('/merchantSignUp', this.state)
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
      <h1 className = 'heading'>Sign up for VISAMarket Account!</h1>
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
          <Col md = {6}>
            <FormGroup>
              <Label for="addr">Address</Label>
              <Input
                name="addr"
                id="addr"
                placeholder="Enter your address here"
                value={this.state.addr}
                onChange={this.handleInputChange} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="merchantType">Merchant Type</Label>
              <Input
                type ="select"
                name="merchType"
                id="merchType"
                placeholder="What is your merchant type?"
                value={this.state.merchType}
                onChange={this.handleInputChange}>
                <option>Retail</option>
                <option>Food and Beverage</option>
                <option>Finance</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col>
            <FormGroup>
              <Label for="contactNo">Contact Number</Label>
              <Input
                name="contactNo"
                id="contactNo"
                placeholder="+65"
                value={this.state.contactNo}
                onChange={this.handleInputChange}>
              </Input>
            </FormGroup>
          </Col>
          <Col></Col>
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
export default  CreateVISAReady
