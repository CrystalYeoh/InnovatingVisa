import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
// import Header from "./HeaderComponent";
// import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from "react-router-dom";
//import UrlCreator from "./CreateurlComponent";
//import PageShower from "./PageComponent";
import SortingPage from './routes/SortingPage'
import MerchantSortingPage from "./routes/MerchantSortingPage";
import CreateVISAReady from "./routes/CreateVISAReady"

class Main extends Component {
  constructor(props) {
    super(props);
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
          <Redirect to="/sortingpage" />
        </Switch>
      </div>
    );
  }
}

export default Main;
