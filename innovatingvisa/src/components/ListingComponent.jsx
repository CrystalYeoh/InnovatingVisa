import React from "react";

import classnames from "classnames";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Container,
  Button,
} from "reactstrap";
// import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.listing = props.listing;
    this.url = this.listing["Url"];
    this.image = this.listing["frontimage"];
    this.title = this.listing["Headertext"];
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
    this.listing = this.props.listing;
    this.url = this.listing["Url"];
    this.image = this.listing["frontimage"];
    this.title = this.listing["Headertext"];
  }

  render() {
    console.log(this.url);
    return (
      <Card id="dashboardcards" border="primary" style={{ width: "18rem" }}>
        <CardImg variant="top" src={`${this.image}`} height = "250px"/>
        <CardBody>
          <CardTitle style={{ display: "flex", justifyContent: "center", height : "30px" }}>
            {this.title}
          </CardTitle>
        </CardBody>
        <div style={{ height: '50px', justifyContent: "center", textAlign: "center" }}>
          <CardBody style={{ textAlign: "center" }}>
            <Link to={"/sites/".concat(this.url)} >
            <Button
              variant="primary"
              to={`${this.url}`}
              style={{
                width: "15rem",
                display: "flex",
                justifyContent:"center"
              }}
            >
              Go to Website
            </Button>
          </Link>
          </CardBody>
        </div>
      <CardBody>
        <Link to={"/stores/".concat(this.url)}>
          <Button
            variant="primary"
            to={`${this.url}`}
            style={{
              width: "15rem",
              display: "flex-end",
              justifyContent: "center",
            }}
          >
            Go to Store
            </Button>
        </Link>
      </CardBody>
      </Card >
    );
  }
}

export default Listing;
