import React, { Component } from "react";
// import { Navbar, NavbarBrand } from "reactstrap";
// import Header from "./HeaderComponent";
// import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from "react-router-dom";
// import UrlCreator from "./CreateurlComponent";
// import PageShower from "./PageComponent";
import Dashboard from "./DashboardComponent";
import MyNavbar from "./NavbarComponent";

class Main extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    // const Page = () => {
    //   // return <PageShower />;
    // };
    // const Createurl = () => {
    //   // return <UrlCreator />;
    // };
    return (
      
      <div>
        <MyNavbar />
        <Switch>
          {/* <Route path="/createurl" component={Createurl} /> */}
          {/* <Route path="/url" component={Page} /> */}
          {/* <Redirect to="/url" /> */}
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default Main;
