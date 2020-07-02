import React, { Component } from "react";
import UrlCreator from "./CreateurlComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Url from "./UrlComponent";
import Createstore from "./CreatestoreComponent";
import Updatestore from "./Storeupdater";
import Store from "./Storecomponent";
import SortingPage from "./routes/SortingPage";
import MerchantSortingPage from "./routes/MerchantSortingPage";
import CreateVISAReady from "./routes/CreateVISAReady"
import LinkAcquirer from "./routes/LinkAcquirer"
import VisaLogin from "./routes/VisaLogin";
import CustomerSignUp from './routes/CustomerSignUp';
import MerchantLogin from './routes/MerchantLogin';
import Dashboard from "./DashboardComponent";
import MyNavbar from "./NavbarComponent";
import Dashboardga from "./dashboardga";

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
          <Route path="/sortingpage" component={SortingPage} />
          <Route path="/merchantSignUp" component={MerchantSortingPage} />
          <Route path="/merchantCreateAcc" component={CreateVISAReady} />
          <Route path="/acquirerlink" component={LinkAcquirer} />
          <Route path='/visaLogin' component={VisaLogin} />
          <Route path='/customerSignUp' component={CustomerSignUp} />
          <Route path='/merchantLogin' component={MerchantLogin} />
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
