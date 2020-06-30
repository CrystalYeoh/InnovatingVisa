import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import UrlCreator from "./CreateurlComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import axios from "axios";
import Url from "./UrlComponent";
import { API_URL } from "../shared/baseUrl";
import Createstore from "./CreatestoreComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { url: "" };
  }

  render() {
    const Createurl = () => {
      return <UrlCreator />;
    };
    const Sitewithurl = ({ match }) => {
      return <Url match={match.params} />;
    };

    return (
      <div>
        <Switch>
          <Route path="/createurl" component={Createurl} />
          <Route path="/sites/:url" component={Sitewithurl} />
          <Route path="/createstore" component={Createstore} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
