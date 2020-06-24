import React, { Component } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { Link } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class UrlCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlname: "",
      headertext: "",
    };
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleHeaderChange = this.handleHeaderChange.bind(this);
  }
  handleUrlChange(event) {
    this.setState({ urlname: event.target.value });
  }

  handleHeaderChange(event) {
    this.setState({ headertext: event.target.value });
  }
  render() {
    console.log(this.state.headertext);
    return (
      <div className="container">
        <form>
          <FormGroup row>
            <Label for="urlselector">Url</Label>
            <Col sm={10}>
              <Input
                type="url"
                name="url"
                id="urlselector"
                placeholder="Enter Url Here"
                onChange={this.handleUrlChange}
                value={this.state.urlname}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="exampleheader">Header words</Label>
            <Input
              type="textarea"
              name="text"
              id="exampleheader"
              value={this.state.headertext}
              onChange={this.handleHeaderChange}
            />
          </FormGroup>
        </form>
        <Header headertext={this.state.headertext} />
      </div>
    );
  }
}

export default UrlCreator;
