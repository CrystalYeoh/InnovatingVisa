import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import UrlCreator from "./CreateurlComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { postUrl, fetchUrls, fetchUsers } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    urls: state.urls,
    users: state.users,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addUrl: (
    url,
    headertext,
    headersubtext,
    bodytext,
    bodyimages,
    footerlinks,
    footertext,
    socialmediatypes,
    socialmedialinks
  ) =>
    dispatch(
      postUrl(
        url,
        headertext,
        headersubtext,
        bodytext,
        bodyimages,
        footerlinks,
        footertext,
        socialmediatypes,
        socialmedialinks
      )
    ),
  fetchUrls: () => dispatch(fetchUrls()),
  fetchUsers: () => dispatch(fetchUsers()),
  postUrl: (
    url,
    headertext,
    headersubtext,
    bodytext,
    bodyimages,
    footerlinks,
    footertext,
    socialmediatypes,
    socialmedialinks
  ) =>
    dispatch(
      postUrl(
        url,
        headertext,
        headersubtext,
        bodytext,
        bodyimages,
        footerlinks,
        footertext,
        socialmediatypes,
        socialmedialinks
      )
    ),
});
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  componentDidMount() {
    this.props.fetchUrls();
  }
  render() {
    const Createurl = () => {
      return <UrlCreator />;
    };
    console.log(this.state.apiResponse);
    return (
      <div>
        <Switch>
          <Route path="/createurl" component={Createurl} />

          <Redirect to="/createurl" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
