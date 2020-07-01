import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
<<<<<<< HEAD
import UrlCreator from "./CreateurlComponent";
=======
// import Header from "./HeaderComponent";
// import Footer from "./FooterComponent";
>>>>>>> master
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
<<<<<<< HEAD
import axios from "axios";
import Url from "./UrlComponent";
import { API_URL } from "../shared/baseUrl";
import Createstore from "./CreatestoreComponent";
import Updatestore from "./Storeupdater";
import Store from "./Storecomponent";

=======
import { postUrl, fetchUrls, fetchUsers } from "../redux/ActionCreators";
//import UrlCreator from "./CreateurlComponent";
//import PageShower from "./PageComponent";
import SortingPage from './routes/SortingPage'
import MerchantSortingPage from "./routes/MerchantSortingPage";
import CreateVISAReady from "./routes/CreateVISAReady"
import LinkAcquirer from "./routes/LinkAcquirer";
import Trial from "./routes/trial";
import Dashboard from "./DashboardComponent";
import MyNavbar from "./NavbarComponent";
import UrlCreator from "./CreateurlComponent";
import PageShower from "./PageComponent";
import MyNavbar from "./NavbarComponent";
import Dashboard from "./DashboardComponent";


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
>>>>>>> master
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { user: 1 };
  }

  render() {
<<<<<<< HEAD
    const Createurl = () => {
      return <UrlCreator />;
    };
    const Sitewithurl = ({ match }) => {
      return <Url match={match.params} user={this.state.user} />;
    };
    const Storewithurl = ({ match }) => {
      return <Store match={match.params} />;
    };

=======
    // const Page = () => {
    //   return <PageShower />;
    // };
    // const Createurl = () => {
    //   return <UrlCreator />;
    // };
>>>>>>> master
    return (
      
      <div>
        <MyNavbar />
        <Switch>
<<<<<<< HEAD
          <Route
            path="/createurl"
            component={Createurl}
            user={this.state.user}
          />
          <Route path="/sites/:url" component={Sitewithurl} />
          <Route
            path="/createstore"
            component={() => <Createstore user={this.state.user} />}
          />
          <Route
            path="/storeupdater"
            component={() => <Updatestore user={this.state.user} />}
          />
          <Route path="/stores/:url" component={Storewithurl} />
=======
          {/* <Route path="/createurl" component={Createurl} />
          <Route path="/url" component={Page} /> */}
          <Route path="/sortingpage" component={SortingPage} />
          <Route path="/merchantSignUp" component={MerchantSortingPage} />
          <Route path="/merchantCreateAcc" component={CreateVISAReady} />
          <Route path="/acquirerlink" component={LinkAcquirer} />
          <Route path="/trial" component={Trial} />
          <Route path="/dashboard" component={Dashboard} />
          <Redirect to="/sortingpage" />
>>>>>>> master
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
