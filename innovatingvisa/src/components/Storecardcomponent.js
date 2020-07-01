import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  Media,
} from "reactstrap";

function Storecard(props) {
  const rows = [];
  console.log(props["item"]);

  return (
    <Card id="storecard">
      <CardImg
        top
        width="100%"
        src={props["item"]["image"]}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>{props["item"]["itemname"]}</CardTitle>
        <CardSubtitle>${props["item"]["price"]}</CardSubtitle>
        <CardSubtitle>Qty Left:{props["item"]["quantity"]}</CardSubtitle>

        <CardText>
          <div>{props["item"]["description"]} </div>
        </CardText>
      </CardBody>
    </Card>
  );
}

export default Storecard;
