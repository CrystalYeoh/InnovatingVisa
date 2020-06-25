import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import UrlCreator from "./CreateurlComponent";
import PageShower from "./PageComponent";
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
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  componentDidMount() {
    this.props.fetchUrls();
  }
  render() {
    const Page = () => {
      return <PageShower />;
    };
    const Createurl = () => {
      return <UrlCreator />;
    };
    return (
      <div>
        <Switch>
          <Route path="/createurl" component={Createurl} />
          <Route
            path="/url"
            component={Page}
            apiresponse={this.state.api.Response}
          />
          <Redirect to="/url" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
