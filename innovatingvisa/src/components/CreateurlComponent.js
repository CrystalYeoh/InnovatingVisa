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
import { Link } from "react-router-dom";
import Header from "./UrlHeaderComponent";
import Footer from "./UrlFooterComponent";
import UrlBody from "./UrlBody";
import _ from "lodash";

class UrlCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      headertext: "",
      headersubtext: "",
      bodytextrow: 1,
      bodyheading: [""],
      bodytext: [""],
      bodyimages: [],
      footerlinks: [],
      footertext: "",
      socialmediatypes: [],
      socialmedialinks: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const index = target.id;
    const arraystring = [];
    console.log(target.id);

    if (name === "bodytextrow") {
      for (var i = 0; i < value; i++) {
        arraystring.push("");
      }
      this.setState({
        bodytext: arraystring,
        bodyheading: arraystring,
      });
    }

    if (name == "bodytext") {
      const variable = _.cloneDeep(this.state.bodytext);
      const index2 = Number(index.split("_")[0]);

      variable.splice(index2, 1, value);
      this.setState({
        [name]: variable,
      });
    } else if (name == "bodyheading") {
      const var2 = _.cloneDeep(this.state.bodyheading);
      const index2 = Number(index.split("_")[0]);
      var2.splice(index2, 1, value);

      this.setState({
        [name]: var2,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  handleSubmit(event) {
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
  }
  render() {
    const rows = [];

    for (var index = 0; index < this.state.bodytextrow; index++) {
      rows.push(
        <div>
          <FormGroup row>
            <Label htmlFor="bodyheading" md={2}>
              Body Heading
            </Label>
            <Col md={10}>
              <Input
                type="text"
                id={index.toString().concat("_heading")}
                name="bodyheading"
                placeholder="Bodyheading"
                value={this.state.bodyheading[index]}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="bodytext" md={2}>
              Bodytext
            </Label>
            <Col md={10}>
              <Input
                type="textarea"
                id={index.toString().concat("_body")}
                name="bodytext"
                placeholder="Bodytext"
                rows="12"
                value={this.state.bodytext[index]}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
        </div>
      );
    }
    console.log(this.state.bodytext);
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12">
            <h3>Website Creator</h3>
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
                    type="text"
                    id="headertext"
                    name="headertext"
                    placeholder="Headertext"
                    value={this.state.headertext}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="headersubtext" md={2}>
                  Header Subtext
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="headersubtext"
                    name="headersubtext"
                    placeholder="Header Subtext"
                    value={this.state.headersubtext}
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Header
                  headertext={this.state.headertext}
                  headersubtext={this.state.headersubtext}
                />
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="headersubtext" md={2}>
                  No. Of Rows of Body Text
                </Label>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="bodytextrow"
                    value={this.state.bodytextrow}
                    onChange={this.handleInputChange}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </Input>
                </Col>
              </FormGroup>

              {rows}
              <UrlBody
                bodytext={this.state.bodytext}
                bodytextrow={this.state.bodytextrow}
                bodyheading={this.state.bodyheading}
              />

              <FormGroup row>
                <Label htmlFor="footertext" md={2}>
                  Footertext
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="footertext"
                    name="footertext"
                    value={this.state.footertext}
                    onChange={this.handleInputChange}
                  ></Input>
                </Col>
              </FormGroup>
              <h4>Social Media</h4>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.facebook}
                        onChange={this.handleInputChange}
                      />{" "}
                      <strong>Facebook</strong>
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.twitter}
                        onChange={this.handleInputChange}
                      />{" "}
                      <strong>Twitter</strong>
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Submit Webpage
                  </Button>
                </Col>
              </FormGroup>
            </Form>
            <Footer footertext={this.state.footertext} />
          </div>
        </div>
      </div>
    );
  }
}

export default UrlCreator;
