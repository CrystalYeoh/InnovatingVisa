import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import createBucket from "./Creategcpbucket";

function PageShower(props) {
  return (
    <div className="container">
      <Button onClick={createBucket} color="primary">
        primary
      </Button>
    </div>
  );
}

export default PageShower;
