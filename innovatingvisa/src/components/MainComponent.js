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
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
