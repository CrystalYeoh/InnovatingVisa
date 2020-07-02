import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  const twittercontent = (props.twitterchecked =="True") ? (
    <a className="btn btn-social-icon btn-twitter" href={props.twitterurl}>
      <i className="fa fa-twitter" href={props.twitterurl}></i>
    </a>
  ) : null;
  const facebookcontent = (props.facebookchecked =="True") ? (
    <a className="btn btn-social-icon btn-facebook" href={props.facebookurl}>
      <i className="fa fa-facebook" href={props.facebookurl}></i>
    </a>
  ) : null;
  const instagramcontent = (props.instagramchecked  =="True")? (
    <a className="btn btn-social-icon btn-instagram" href={props.instagramurl}>
      <i className="fa fa-instagram" href={props.instagramurl}></i>
    </a>
  ) : null;
  if (
    props.footertext !== "" ||
    props.twitterurl != "" ||
    props.facebookurl != "" ||
    props.instagramurl != "" ||
    props.phonenumber != ""
  )
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
                {twittercontent}
                {facebookcontent}
                {instagramcontent}
              </div>
              Contact Us at {props.phonenumber}
            </div>
          </div>
        </div>
      </div>
    );
  else return <div></div>;
}

export default Footer;
