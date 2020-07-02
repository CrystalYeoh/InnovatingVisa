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

function UrlBody(props) {
  const rows = [];
  console.log(props);

  for (var index = 0; index < props.bodytextrow; index++) {
    if (
      !(props.bodyimages[index] == "" || props.bodyimages[index] == undefined)
    ) {
      console.log(props.bodyimages[index]);
      rows.push(
        <Card id={index} key={index}>
          <Media>
            <Media left className="mr-5">
              <Media object src={props.bodyimages[index]} alt="text" />
            </Media>
            <Media body>
              <Media heading> {props.bodyheading[index]}</Media>
              <p>{props.bodytext[index]}</p>
            </Media>
          </Media>
        </Card>
      );
    } else {
      rows.push(
        <Card id={index}>
          <Media>
            <Media body>
              <Media heading> {props.bodyheading[index]}</Media>
              <p>{props.bodytext[index]}</p>
            </Media>
          </Media>
        </Card>
      );
    }
  }
  if (props.bodytext !== [""]) {
    return <div>{rows}</div>;
  } else return <div></div>;
}

export default UrlBody;
