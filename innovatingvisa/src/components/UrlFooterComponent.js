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
            </div>{" "}
            <div className="col-12 col-sm-4 align-self-center">
              <div className="text-center">
                <a
                  className="btn btn-social-icon btn-google"
                  href="http://google.com/+"
                >
                  <i className="fa fa-google-plus"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-facebook"
                  href="http://www.facebook.com/profile.php?id="
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-linkedin"
                  href="http://www.linkedin.com/in/"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-twitter"
                  href="http://twitter.com/"
                >
                  <i className="fa fa-twitter" href={props.twitterurl}></i>
                </a>
                <a
                  className="btn btn-social-icon btn-google"
                  href={props.twitterurl}
                >
                  <i className="fa fa-youtube"></i>
                </a>
                <a className="btn btn-social-icon" href="mailto:">
                  <i className="fa fa-envelope-o"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else return <div></div>;
}

export default Footer;
