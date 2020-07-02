import React from "react";

import classnames from "classnames";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
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
        <CardImg variant="top" src={`${this.image}`} />
        <CardBody>
          <CardTitle style={{ display: "flex", justifyContent: "center" }}>
            {this.title}
          </CardTitle>
          <Link to={"/sites/".concat(this.url)}>
            <Button
              variant="primary"
              to={`${this.url}`}
              style={{
                width: "15rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Go to Website
            </Button>
          </Link>
          <Link to={"/stores/".concat(this.url)}>
            <Button
              variant="primary"
              to={`${this.url}`}
              style={{
                width: "15rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Go to Store
            </Button>
          </Link>
        </CardBody>
      </Card>
    );
  }
}

export default Listing;
