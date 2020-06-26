import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  if (props.footertext !== "")
    return (
      <div className="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-4 offset-1 col-sm-2"></div>
            <div className="col-7 col-sm-5">
              <h5>{props.footertext}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  else return <div></div>;
}

export default Footer;
