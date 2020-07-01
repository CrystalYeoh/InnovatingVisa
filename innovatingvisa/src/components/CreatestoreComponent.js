import React, { Component } from "react";
import {
  Col,
  Button,
  Label,
  Input,
  FormText,
  Row,
  Form,
  FormGroup,
} from "reactstrap";
import { withRouter } from "react-router-dom";

import Itemstore from "./IndivitemformComponent";
import ImageUploading from "react-images-uploading";
import { API_URL } from "../shared/baseUrl";
import axios from "axios";

class CreateStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      headertext: "",
      user: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({
      user: this.props.user,
    });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const index = target.id;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    axios
      .post(`${API_URL}/sqlpoststore`, this.state)
      .then((res) => {
        console.log(res.data);
      })
      .then(this.props.history.push("/storeupdater"));

    console.log("Current State is: " + JSON.stringify(this.state));
  }

  render() {
    console.log(this.props.user);
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12">
            <h3>Store Creator</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="url" md={2}>
                  URL
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="url"
                    name="url"
                    placeholder="URL"
                    value={this.state.url}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="headertext" md={2}>
                  Headertext
                </Label>
                <Col md={10}>
                  <Input
                    type="headertext"
                    id="headertext"
                    name="headertext"
                    placeholder="Headertext"
                    value={this.state.headertext}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Submit Form
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateStore);
