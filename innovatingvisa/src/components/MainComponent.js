import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
// import Header from "./HeaderComponent";
// import Footer from "./FooterComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { postUrl, fetchUrls, fetchUsers } from "../redux/ActionCreators";
//import UrlCreator from "./CreateurlComponent";
//import PageShower from "./PageComponent";
import SortingPage from './routes/SortingPage'
import MerchantSortingPage from "./routes/MerchantSortingPage";
import CreateVISAReady from "./routes/CreateVISAReady"
import LinkAcquirer from "./routes/LinkAcquirer"
import Trial from "./routes/trial"
import UrlCreator from "./CreateurlComponent";
import PageShower from "./PageComponent";
import VisaLogin from "./routes/VisaLogin"
import CustomerSignUp from './routes/CustomerSignUp'

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
    // const Page = () => {
    //   return <PageShower />;
    // };
    // const Createurl = () => {
    //   return <UrlCreator />;
    // };
    return (
      <div>
        <Switch>
          {/* <Route path="/createurl" component={Createurl} />
          <Route path="/url" component={Page} /> */}
          <Route path="/sortingpage" component={SortingPage} />
          <Route path="/merchantSignUp" component={MerchantSortingPage} />
          <Route path="/merchantCreateAcc" component={CreateVISAReady} />
          <Route path="/acquirerlink" component={LinkAcquirer} />
          <Route path="/trial" component={Trial} />
          <Route path='/visaLogin' component={VisaLogin} />
<<<<<<< HEAD
          <Redirect to="/visaLogin" />
=======
          <Route path='/customerSignUp' component={CustomerSignUp} />
          <Redirect to="/sortingpage" />
>>>>>>> f511feed3200aad0bb5a809148140fb4d0db5c45
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
