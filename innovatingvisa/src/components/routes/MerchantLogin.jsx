import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import './VisaLogin.css';
import axios from 'axios';
import Login from '../LoginComponentTest';

class MerchantLogin extends Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
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
    axios.post('/merchantLogin',this.state)
    .then(function (response) {
      console.log(response);
    })
    console.log("Current State is: " + JSON.stringify(this.state));
    window.location.href = "./dashboard";

    // alert("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
  }


render(){
  return (
    <div>
      <h1 className = 'heading'> Merchant Log in </h1>
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
                <Button  type = "submit" color="primary" >Sign Up as a Merchant</Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
    </div>
  );
}
}

export default MerchantLogin;
