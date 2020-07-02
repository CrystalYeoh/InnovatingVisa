import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import UrlCreator from "./CreateurlComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import axios from "axios";
import Url from "./UrlComponent";
import { API_URL } from "../shared/baseUrl";
import Createstore from "./CreatestoreComponent";
import Updatestore from "./Storeupdater";
import Store from "./Storecomponent";
import SortingPage from "./routes/SortingPage";
import MerchantSortingPage from "./routes/MerchantSortingPage";
import CreateVISAReady from "./routes/CreateVISAReady"
import LinkAcquirer from "./routes/LinkAcquirer"
import Trial from "./routes/trial"
import UrlCreator from "./CreateurlComponent";
import PageShower from "./PageComponent";
import VisaLogin from "./routes/VisaLogin";
import CustomerSignUp from './routes/CustomerSignUp';
import MerchantLogin from './routes/MerchantLogin';
import CreateVISAReady from "./routes/CreateVISAReady";
import LinkAcquirer from "./routes/LinkAcquirer";
import Trial from "./routes/trial";
import Dashboard from "./DashboardComponent";
import MyNavbar from "./NavbarComponent";
import Dashboardga from "./dashboardga";


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
    this.state = { user: 1 };
  }

  render() {
    const Createurl = () => {
      return <UrlCreator />;
    };
    const Sitewithurl = ({ match }) => {
      return <Url match={match.params} user={this.state.user} />;
    };
    const Storewithurl = ({ match }) => {
      return <Store match={match.params} />;
    };

    return (
      <div>
        <MyNavbar />
        <Switch>
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
          {/* <Route path="/createurl" component={Createurl} />
          <Route path="/url" component={Page} /> */}
          <Route path="/sortingpage" component={SortingPage} />
          <Route path="/merchantSignUp" component={MerchantSortingPage} />
          <Route path="/merchantCreateAcc" component={CreateVISAReady} />
          <Route path="/acquirerlink" component={LinkAcquirer} />
          <Route path="/trial" component={Trial} />
          <Route path='/visaLogin' component={VisaLogin} />
          <Route path='/customerSignUp' component={CustomerSignUp} />
          <Route path='/merchantLogin' component={MerchantLogin} />
//           <Redirect to="/visaLogin" />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/stores/:url" component={Storewithurl} />
          <Route path="/gadashboard" component={Dashboardga} />

          <Redirect to="/sortingpage" />

        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
