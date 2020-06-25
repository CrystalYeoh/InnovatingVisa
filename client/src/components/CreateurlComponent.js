import React, { Component } from "react";
import { Col, Button, Label, Input, FormText, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Header from "./UrlHeaderComponent";
import Footer from "./UrlFooterComponent";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length < len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class UrlCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal2Open: false,
    };
    this.toggleModal2 = this.toggleModal2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleModal2() {
    this.setState({
      isModal2Open: !this.state.isModal2Open,
    });
  }

  handleSubmit(values) {
    this.toggleModal2();
    this.props.postComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
    // event.preventDefault();
  }
  render() {
    console.log(this.state.headertext);
    return (
      <div className="container">
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
          <Row className="form-group">
            <Label for="rating" md={12}>
              rating
            </Label>
            <Col md={12}>
              <Control.select
                model=".rating"
                name="rating"
                className="form-control"
                id="rating"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Control.select>
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="author" md={12}>
              Your Name
            </Label>
            <Col md={12}>
              <Control.text
                model=".author"
                id="author"
                name="author"
                placeholder="Your Name"
                className="form-control"
                validators={{
                  required,
                  minLength: minLength(3),
                  maxLength: maxLength(15),
                }}
              />
              <Errors
                className="text-danger"
                model=".author"
                show="touched"
                messages={{
                  required: "Required",
                  minLength: "Should have more than 3 Characters",
                  maxLength: "Should have 15 or less Characters",
                }}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="Comment" md={12}>
              Comment
            </Label>
            <Col md={12}>
              <Control.textarea
                model=".comment"
                id="comment"
                name="comment"
                resize="none"
                rows="6"
                className="form-control"
                validators={{
                  required,
                }}
              />
              <Errors
                className="text-danger"
                model=".comment"
                show="touched"
                messages={{
                  required: "Required",
                }}
              />
            </Col>
          </Row>
          <Button type="submit" value="submit" color="primary">
            Submit
          </Button>
        </LocalForm>
        <Header headertext={this.state.headertext} />
      </div>
    );
  }
}

export default UrlCreator;
